import { useContext } from "react";

import { ScrollContext } from "../contexts";

export const useScroll = () => {
    const { ref, target, onTarget } = useContext(ScrollContext)

    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!ref || !ref.current) return;

        const { currentTarget } = event;

        const id = currentTarget.getAttribute("data-id");

        if (!id) return;

        const element = document.getElementById(id);

        if (!element) return;

        const center = element.offsetLeft + element.offsetWidth / 2;

        onTarget(center - ref.current.offsetWidth / 2, "click");
    }

    const onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (!ref || !ref.current) return;

        const { currentTarget } = event;

        onTarget(currentTarget.scrollLeft + event.deltaY);
    }

    return { ref, target, onClick, onScroll };
}