import { motion } from "framer-motion";

import { ScrollProvider } from "./contexts";

import { Decentered, Hero, Monuments, Place, StaticWrapper, Variants } from './components'

import './style/App.scss'

function App() {
    return <>
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

export default App
