import { Footer, Header } from "./"

import { useScroll } from "../hooks";

import { StaticWrapperProps, StaticWrapperSectionProps } from "../types";

import "../style/StaticWrapper.scss"

export const StaticWrapper = (props: StaticWrapperProps) => {
    const { children } = props;

    const { ref, onScroll } = useScroll();

    const childrenAgg = Array.isArray(children) ? children : [children];

    return <div id="wrapper" className="wrapper" onWheel={onScroll} ref={ref}>
        <Header />

        {childrenAgg.map((child, index) => {
            const { fit, id, padded } = (child as React.ReactElement<StaticWrapperSectionProps>).props;

            const className = `${fit ? "fit" : ""} ${padded ? "padded" : ""}`;

            return <section key={index} id={id} className={className}>{child}</section>
        })}

        <Footer />
    </div>
}