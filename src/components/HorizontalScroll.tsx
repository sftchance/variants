import { useRef } from 'react';

import { StaticWrapperProps } from '../types';

export const HorizontalScroll = (props: StaticWrapperProps) => {
    const { children } = props;

    const ref = useRef<HTMLDivElement>(null);

    const onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        const container = ref.current;

        if (!container) return;

        container.scrollLeft += event.deltaY;
    }

    return <div onWheel={onScroll} ref={ref}>
        {children}
    </div>
}