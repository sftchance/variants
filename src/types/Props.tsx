import { ReactNode } from "react";

export type CountUpProps = {
    start?: number;
    end: number;
    duration?: number;
    prepend?: string;
    append?: string
}

export type HalftoneCardProps = React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
    title?: string;
    description?: string;
    disableOverlay?: boolean;
}

export type HeaderLinkProps = React.HTMLAttributes<HTMLButtonElement> & {
    dataId?: string;
    text: ReactNode;
}

export type PostProps = {
    filename: string,
    content: string,
    title: string,
    description: string,
    image: string,
    attributes: {
        created: string,
        readTime: number,
        authors: string[],
        tags?: string[],
        related?: string[],
        inbound?: string[],
        [key: string]: string | string[] | number | undefined,
    },
};

export type PostAttributeProps = {
    [key: string]: string | undefined,
}

export type PostCardProps = {
    filename: string
}

export type PostNoteProps = React.HTMLAttributes<HTMLDivElement> & {
    author?: string,
    note?: string,
    side?: string,
    hover?: boolean,
    created?: string,
}

export type StaticWrapperProps = {
    children: ReactNode[] | ReactNode;
}

export type StaticWrapperSectionProps = React.HTMLAttributes<HTMLElement> & {
    distanceToCenter?: boolean;
    fit?: boolean;
    padded?: boolean;
};
