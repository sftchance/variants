import { StaticWrapperSectionProps } from "../types"

import { HalftoneCard } from "./"

export const Decentered = (props: StaticWrapperSectionProps) => {
    props;

    return <div className="bi-fold">
        <div>
            <HalftoneCard src="cdn/decentered.png" style={{ height: 720 }} disableOverlay={true} />
        </div>

        <div>
            <h2>MODULATED REALITY WITH DECENTERED IDENTITY.</h2>

            <p>CHANCE variants are not scoped as intent of audience, but as a space specifically crafted to cultivate a specific niche and topic. All writings are for me and the few. Are you among those?</p>
            <p>Ex do dolore proident irure. Laborum elit ex eiusmod dolore reprehenderit quis est pariatur deserunt ea nulla enim. Labore pariatur dolore cupidatat occaecat ipsum pariatur ea pariatur laborum minim magna est. Elit Lorem minim non.</p>
            <p>Veniam laboris sint voluptate. Id enim deserunt sint ipsum culpa amet ipsum ut in. Ut est Lorem mollit veniam ex enim exercitation amet consectetur aliquip ex tempor culpa qui anim. Ullamco deserunt nostrud nostrud ullamco excepteur laboris consequat. Anim officia nulla ad reprehenderit sunt deserunt ipsum quis adipisicing et.</p>
            <p>Ex do dolore proident irure. Laborum elit ex eiusmod dolore reprehenderit quis est pariatur deserunt ea nulla enim. Labore pariatur dolore cupidatat occaecat ipsum pariatur ea pariatur laborum minim magna est. Elit Lorem minim non.</p>
        </div>
    </div>
}