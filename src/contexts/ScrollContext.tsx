import { createContext, useEffect, useRef, useState } from 'react';

import { ScrollContext as ScrollContextType, Target } from '../types';

const DEFAULT_TARGET: Target = {
    x: 0,
    type: "scroll"
}

export const ScrollContext = createContext<ScrollContextType>({
    ref: null,
    target: DEFAULT_TARGET,
    onTarget: () => { return },
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [target, setTarget] = useState<Target>(DEFAULT_TARGET);

    const onTarget = (x: number, type?: "scroll" | "click") => {
        setTarget({
            x,
            type: type ? type : "scroll"
        });
    }

    useEffect(() => {
        const { current } = ref;

        if (!current) return;

        const behavior = target.type === "scroll" ? "auto" : "smooth";

        current.scrollTo({
            top: 0,
            left: target.x,
            behavior
        });
    }, [target]);

    return (<ScrollContext.Provider value={{
        ref,
        target,
        onTarget
    }}>
        {children}
    </ScrollContext.Provider>)
}