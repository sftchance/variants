import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Variant {
    name: string;
    created: Date;
    links?: {
        icon: IconProp;
        url: string;
    }[];
}