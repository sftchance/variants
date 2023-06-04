import { Target } from "./";

export type ScrollContext = {
    ref: React.RefObject<HTMLDivElement> | null;
    target: Target;
    onTarget: (x: number, type?: "scroll" | "click") => void;
}