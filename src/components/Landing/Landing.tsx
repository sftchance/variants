import { ScrollProvider } from "../../contexts";

import {
    Decentered,
    Hero,
    Meta,
    Monuments,
    Place,
    StaticWrapper,
    Variants
} from '..'

export function Landing() {
    return <>
        <Meta title="VARIANTS"
            description="Discover a diverse collection of content, tools, and ideas curated by the Variants of CHANCE. Explore the latest releases and immerse yourself in the world of creativity and abstract discovery." />

        <ScrollProvider>
            <StaticWrapper>
                <Hero id="hero" fit={true} />
                <Variants id="variants" />
                <Place id="place" padded={true} />
                <Monuments id="monuments" padded={true} />
                <Decentered id="decentered" padded={true} />
            </StaticWrapper>
        </ScrollProvider>
    </>
}