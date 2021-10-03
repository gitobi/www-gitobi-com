import React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.png"
import font from "../../images/font.png"

import {
  footer,
  footerContainer,
  footerLogo,
  siteLogo,
  siteFont,
  nav,
  footerNavItem,
  footerNavItemLink,
  footerCopyRight,
  footerCopyRightLink,
} from "./footer.module.scss"

const Footer = () => {

  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <div className={footerLogo}>
          <Link to="/">
            <img className={siteLogo} src={logo} alt="Gitobi logo" />
            <img className={siteFont} src={font} alt="Gitobi" />
          </Link>
        </div>
        <nav className={nav}>
          <ul>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/">
                ABOUT
              </Link>
            </li>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/">
                SERVICES
              </Link>
            </li>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/">
                TOPICS
              </Link>
            </li>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className={footerCopyRight}>
        &copy; 2020&nbsp;
        <a
          className={footerCopyRightLink}
          href="https://www.gitobi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitobi LLC.
        </a>
      </p>
    </footer>
  )
}

export default Footer
