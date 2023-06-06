export type ScrollContextProps = {
    ref: React.RefObject<HTMLDivElement> | null;
    target: TargetProps;
    onTarget: (x: number, type?: "scroll" | "click") => void;
}

export type TargetProps = {
    x: number;
    type: "scroll" | "click";
}
