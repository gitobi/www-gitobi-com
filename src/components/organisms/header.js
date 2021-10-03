import React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"
import font from "../../images/font.png"
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
            <img className={siteLogo} src={logo} alt="Gitobi logo" />
            <img className={siteFont} src={font} alt="Gitobi" />
          </Link>
        </div>
        <nav className={nav}>
          <ul className={headerNav}>
            <li className={headerNavItem}>
              <Link className={headerNavItemLink} to="/">
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
              <Link className={headerNavItemLink} to="/">
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
