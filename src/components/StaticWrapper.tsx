import { Footer, Header } from "./"

import { useScroll } from "../hooks";

import { StaticWrapperProps } from "../types";

import "../style/StaticWrapper.scss"

export const StaticWrapper: React.FC<StaticWrapperProps> = ({ children }) => {
    const { ref, onScroll } = useScroll();

    return <div id="wrapper" className="wrapper" onWheel={onScroll} ref={ref}>
        <Header />

        {children.map((child, index) => {
            const { fit, id, padded } = child.props;

            return <section
                key={index}
                id={id}
                className={`${fit ? "fit" : ""} ${padded ? "padded" : ""}`}
            >{child}</section>
        })}

        <Footer />
    </div>
}