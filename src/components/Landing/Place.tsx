import { StaticWrapperSectionProps } from "../../types"

import { HalftoneCard } from "..";

export const Place: React.FC<Partial<StaticWrapperSectionProps>> = () => {
    return <div className="bi-fold">
        <div>
            <HalftoneCard src="cdn/place.png" style={{ height: 400, marginBottom: 40 }} disableOverlay={true} />

            <h2>THIS IS NOT A PLACE MADE FOR THE MANY.</h2>
            <p>Variants are a different approach to <em>digital-being</em>. Capturing the provenance of each diverging path, we erect digital pyramids representing the efforts of the time before now. Leaving a record of the path we were once on, this is the home and visualization of learning and growing in a way aligned to the fleeting complexities of the modern age.</p>
        </div>

        <div>
            <p>The essence of this place lies in the exploration of digital variants—highly niched personalities that act as gatekeepers of focused interests and audiences. Each variant and its spawned world serve as a visualization of a hyper-specific focus, creating an esoteric yet captivating atmosphere. Aware of the comedic irony, variants are an authentic representation of an only partially real material.</p>

            <p>This realm is alive and ever-evolving, mirroring the growth and progression of the variants themselves. It is a living, breathing entity that embraces change and uncertainty. Stagnation has no place here. Instead, we embrace the exhilarating opportunity to grow by facing the unknown head-on. The content within this realm is a dynamic tapestry, constantly shifting and adapting to the ever-evolving landscape of knowledge and exploration.</p>

            <p>In this realm, we encourage you to be your true variant self, exploring the artificially digital world. If you find yourself not fully comprehending or feeling entirely comfortable in this space, fear not. It is intentional. This realm is not meant for everyone -- it is designed to resonate with those who seek the different, the unconventional, and the thought-provoking.</p>

            <p>To amplify the richness of this space, we create competing variants that explore the same topic from different perspectives and justifications. Being wrong is not feared here; it is an opportunity for growth. Facing the unknown is not avoided; it is welcomed as a chance for discovery. What stands today may not stand tomorrow, as this space is ever-shifting and adapting to the evolving landscape of knowledge and exploration.</p>

            <p>It is a place where we can be our-variant-selves and explore the world around us without concerns for the limitations beyond. If you do not get it or feel comfortable in a space, that is okay. You are not supposed to.</p>
        </div>
    </div >
}