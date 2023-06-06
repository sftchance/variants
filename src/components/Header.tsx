import { Link, useLocation } from "react-router-dom";

import { useScroll } from "../hooks";

import { HeaderLink, Tag } from "./";

import "../style/Header.scss"

const HERO_BREAKPOINT = 1200;

export const Header: React.FC = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const { tag, author } = Object.fromEntries(queryParams.entries());

    const { target } = useScroll();

    const isHome = location.pathname === "/";

    if (!isHome) return <nav>
        <Link to="/">⚫ CHANCE</Link>

        <Link to="/post">
            Library
        </Link>

        <div className="about">
            {tag && <p><Tag children={tag} /></p>}

            {author && <span className="author">
                <img src={`/cdn/author/${author}.png/`} alt={author} />

                <strong>{author}</strong>
            </span>}
        </div>
    </nav>

    return <nav>
        <HeaderLink text="⚫ CHANCE" dataId="hero" />

        <Link to="/post">
            Library
        </Link>

        <div className={`about ${target.x <= HERO_BREAKPOINT ? "hidden" : ""} `}>
            <HeaderLink text="Variants" dataId="variants" />
            <HeaderLink text="Place" dataId="place" />
            <HeaderLink text="Monuments" dataId="monuments" />
            <HeaderLink text="Decentered" dataId="decentered" />
        </div>
    </nav>
}