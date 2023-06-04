import "../style/Container.scss";

export const Container = (props: React.HTMLAttributes<HTMLElement>) => {
    const { className } = props

    return <div {...props} className={`container ${className || ""}`}>
        {props.children}
    </div >
}