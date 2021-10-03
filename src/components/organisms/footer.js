import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
