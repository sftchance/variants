import { useMemo } from "react";

import { HeaderLinkProps } from "../types";

import { useScroll } from "../hooks";

export const HeaderLink = (props: HeaderLinkProps) => {
    const { className: _className, dataId, text } = props;

    const { target, onClick } = useScroll();

    const isActive = useMemo((): boolean => {
        if (!dataId) return false;

        const element = document.getElementById(dataId);

        if (!element) return false;

        return target.x >= element.offsetLeft && target.x <= element.offsetLeft + element.offsetWidth;
    }, [target, dataId]);

    const className = `link ${isActive ? "active" : ""} ${_className ? _className : ""}`;

    return <button className={className} data-id={dataId} onClick={onClick}>
        {text}
    </button >
}