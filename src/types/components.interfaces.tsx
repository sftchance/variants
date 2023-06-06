export type CountUpProps = {
    start?: number;
    end?: number;
    duration?: number;
    prepend?: string;
    append?: string;
};

export type HalftoneCardProps = {
    src?: string;
    title?: string;
    description?: string;
    disableOverlay?: boolean;
};

export type HeaderLinkProps = {
    dataId?: string;
    text: React.ReactNode;
}

export type MetaProps = {
    title: string;
    description?: string;
    image?: string;
    [key: string]: string | undefined;
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

export type PostCardProps = {
    filename: string;
};

export type PostCodeProps = {
    children: string[];
    language?: string;
}

export type PostNoteProps = {
    author?: string,
    note: string,
    created?: string,
    side?: string,
    hover?: boolean,
}

export type StaticWrapperSectionProps = (React.ReactElement & {
    distanceToCenter?: boolean;
    fit?: boolean;
    id?: string;
    padded?: boolean;
});

export type StaticWrapperProps = { children: StaticWrapperSectionProps[] }

export type TagProps = {
    to?: string;
}

export type VariantProps = {
    name: string;
    created: Date;
    twitter?: boolean;
}
