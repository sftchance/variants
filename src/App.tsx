import { Route, Routes } from 'react-router-dom'
import { Meta, Post, Posts, ScrollToTop } from './components'

function App() {
    return <>
        <Meta title="VARIANTS"
            description="Discover a diverse collection of content, tools, and ideas curated by the Variants of CHANCE. Explore the latest releases and immerse yourself in the world of creativity and abstract discovery." />

        <ScrollToTop />

        <Routes location={location} key={location.pathname}>
            <Route path="post/" element={<Posts />} />
            <Route path="post/:id/" element={<Post />} />
        </Routes>
    </>
}

export default App
