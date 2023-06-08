import { StaticWrapperSectionProps } from "../../types"

import { Variant } from "./Variant"

import "../../style/Variants.scss";

export const Variants: React.FC<Partial<StaticWrapperSectionProps>> = () => {
    const variants = [{
        name: 'nftchance',
        created: new Date('09/14/2021'),
        twitter: true,
    }, {
        name: '~~~~~~~',
        created: new Date('02/27/2022'),
    }, {
        name: 'sftchance',
        created: new Date('03/15/2023'),
        twitter: true
    }, {
        name: '~~~~~~~',
        created: new Date('04/04/2023'),
    }]

    return <div className="variants">
        {variants.map((variant, index) => {
            return <Variant key={index}  {...variant} />
        })}
    </div>
}