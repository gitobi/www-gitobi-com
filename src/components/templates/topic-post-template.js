import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Seo from "../molecules/seo"
import BaseLayout from "./base-layout.js"

import {
  article,
  imgWrapper,
  img,
  a,
  footer,
} from "./topic-post-template.module.scss"

const TopicPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <BaseLayout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        imagePath={getSrc(post.frontmatter.featuredImage.src)}
        isArticle={true}
      />
      <article
        className={article}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.category} {post.frontmatter.date}</p>
          <GatsbyImage
            className={imgWrapper}
            imgClassName={img}
            image={getImage(post.frontmatter.featuredImage.src)}
            alt={post.frontmatter.featuredImage.alt}
          />
          <p>{post.frontmatter.description}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer
          className={footer}
        >
          <Link
            className={a}
            to="/topics/"
          >
            Topics に戻る
          </Link>
        </footer>
      </article>
    </BaseLayout>
  )
}

export default TopicPostTemplate

export const pageQuery = graphql`
  query TopicPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        category
        date(formatString: "YYYY年M月D日")
        description
        featuredImage {
          src {
            childImageSharp {
              gatsbyImageData(width: 640, layout: CONSTRAINED)
            }
          }
          alt
        }
        title
      }
    }
  }
`
