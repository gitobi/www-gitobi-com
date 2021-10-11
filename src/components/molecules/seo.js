import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, type }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  )

  const pageTitle = title ? title + ' | ' + site.siteMetadata.title : site.siteMetadata.title
  const pageDescription = description || site.siteMetadata.description
  const pageType = type ? type : 'website'

  return (
    <Helmet
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:type`,
          content: pageType,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
    >
      <title>{pageTitle}</title>
    </Helmet>
  )
}

export default Seo
