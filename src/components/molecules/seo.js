import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, imagePath, isArticle }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  const pageUrl = `${site.siteMetadata.siteUrl}${pathname}`
  const pageTitle = title ? title + ' | ' + site.siteMetadata.title : site.siteMetadata.title
  const pageDescription = description || site.siteMetadata.description

  const ogImageUrl = imagePath ? `${site.siteMetadata.siteUrl}${imagePath}` : `${site.siteMetadata.siteUrl}/logo.png`
  const ogType = isArticle ? 'article' : 'website'
  const twitterCard = isArticle ? 'summary_large_image' : 'summary'

  return (
    <Helmet
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:url`,
          content: pageUrl,
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
          property: `og:image`,
          content: ogImageUrl,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `fb:app_id`,
          content: `1992704417697102`,
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
          content: twitterCard,
        },
        {
          name: `twitter:site`,
          content: `@gitobi_`,
        },
      ]}
    >
      <title>{pageTitle}</title>
    </Helmet>
  )
}

export default Seo
