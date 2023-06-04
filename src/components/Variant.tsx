import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Variant as VariantType } from "../types"

import { HalftoneCard } from "./"

import "../style/Variant.scss"

export const Variant = (variant: VariantType) => {
    return <HalftoneCard className="variant">
        <p className="lead">{variant.created.toLocaleDateString()}</p>
        <h2>{variant.name}</h2>

        <div className="links">
            {variant.links?.map((link, index) => {
                return <a key={index} className="variant" href={link.url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={link.icon} />
                </a>
            })}
        </div>
    </HalftoneCard>
}