import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  header,
  headerContainer,
  logoContainer,
  siteLogo,
  siteFont,
  nav,
  headerNav,
  headerNavItem,
  headerNavItemLink,
} from "./header.module.scss"

const Header = () => {
  return (
    <header className={header}>
      <div className={headerContainer}>
        <div className={logoContainer}>
          <Link to="/">
            <StaticImage
              className={siteLogo}
              src="../../images/logo.png"
              alt="Gitobi logo"
              placeholder="blurred"
            />
            <StaticImage
              className={siteFont}
              src="../../images/font.png"
              alt="Gitobi"
              placeholder="blurred"
            />
          </Link>
        </div>
        <nav className={nav}>
          <ul className={headerNav}>
            <li className={headerNavItem}>
              <Link className={headerNavItemLink} to="/about">
                ABOUT
              </Link>
            </li>
            <li className={headerNavItem}>
              <Link className={headerNavItemLink} to="/">
                SERVICES
              </Link>
            </li>
            <li className={headerNavItem}>
              <Link className={headerNavItemLink} to="/">
                TOPICS
              </Link>
            </li>
            <li className={headerNavItem}>
              <Link className={headerNavItemLink} to="https://goo.gl/forms/UwYGr6VurI">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
