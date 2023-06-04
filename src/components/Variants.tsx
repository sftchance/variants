import { StaticWrapperSectionProps, Variant as VariantType } from "../types"

import { Variant } from "./Variant"

import "../style/Variants.scss";

export const Variants = (props: StaticWrapperSectionProps) => {
    props;

    const variants: VariantType[] = [{
        name: 'nftchance',
        created: new Date('09/14/2021'),
    }, {
        name: 'sftchance',
        created: new Date('03/15/2023'),
    }, {
        name: 'nomerit',
        created: new Date('09/14/2021'),
    }, {
        name: '~~~~~~~',
        created: new Date('03/15/2023'),
    }]

    return <div className="variants">
        {variants.map((variant, index) => {
            return <Variant key={index}  {...variant} />
        })}
    </div>
}