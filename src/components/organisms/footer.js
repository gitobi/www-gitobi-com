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
              placeholder="none"
            />
            <StaticImage
              className={siteFont}
              src="../../images/font.png"
              alt="Gitobi"
              placeholder="none"
            />
          </Link>
        </div>
        <nav className={nav}>
          <ul>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/about/">
                ABOUT
              </Link>
            </li>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/services/">
                SERVICES
              </Link>
            </li>
            <li className={footerNavItem}>
              <Link className={footerNavItemLink} to="/topics/">
                TOPICS
              </Link>
            </li>
            <li className={footerNavItem}>
              <a
                className={footerNavItemLink}
                href="https://goo.gl/forms/UwYGr6VurI"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className={footerCopyRight}>
        &copy; 2020&nbsp;
        <Link className={footerCopyRightLink} to="/">
        Gitobi LLC.
      </Link>
      </p>
    </footer>
  )
}

export default Footer
