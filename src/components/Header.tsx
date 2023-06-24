import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { faGithub, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faBars, faRandom, faTimes, faWandMagicSparkles } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useScroll } from "../hooks"

import { HeaderLink } from "./"

import "../style/Header.scss"

const HERO_BREAKPOINT = 1200

export const Header: React.FC = () => {
	const { pathname } = useLocation()

	const { target } = useScroll()

	const [collapsed, setCollapsed] = useState(false)

	const isHome = pathname === "/"

	useEffect(() => {
		setCollapsed(false)
	}, [pathname])

	return (
		<nav className={`${collapsed ? "collapsed" : ""}`}>
			{isHome ? <HeaderLink text="⚫ CHANCE" dataId="hero" /> : <Link to="/">⚫ CHANCE</Link>}

			<div className="links" onClick={() => setCollapsed(false)}>
				<div className={`about ${target.x <= HERO_BREAKPOINT ? "hidden" : ""} `}>
					<Link to="/post">
						Library
						<FontAwesomeIcon icon={faArrowRight} />
					</Link>

					<HeaderLink text="Variants" dataId="variants" icon={faArrowRight} />
					<HeaderLink text="Place" dataId="place" icon={faArrowRight} />
					<HeaderLink text="Monuments" dataId="monuments" icon={faArrowRight} />
					<HeaderLink text="Decentered" dataId="decentered" icon={faArrowRight} />

					<div className="socials">
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faGithub} />
						<FontAwesomeIcon icon={faMedium} />
						<FontAwesomeIcon icon={faRandom} />
					</div>

					<div className="easter-egg">
						<h5>
							<FontAwesomeIcon icon={faWandMagicSparkles} />
							Not sure where to start?
						</h5>
						<p>
							Variants are the myopic capture of a multi-faceted mimetic-focused digital personality.
							Follow what draws your attention!
						</p>

						<Link to="/post/">
							<button>Start here</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="hamburger" onClick={() => setCollapsed(!collapsed)}>
				<FontAwesomeIcon icon={collapsed ? faTimes : faBars} />
			</div>
		</nav>
	)
}
