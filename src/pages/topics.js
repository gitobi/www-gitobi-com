import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/molecules/seo"
import BaseLayout from "../components/templates/base-layout"
import TopicsList from "../components/organisms/lists/topics-list"

import {
  article,
  section,
  sectionContainer,
} from "./topics.module.scss"

const TopicsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <BaseLayout>
      <Seo
        title="TOPICS"
        description="Gitobiの最新ニュースを紹介します。"
      />
      <article className={article}>
        <section className={section}>
          <h1>TOPICS</h1>
          <p>Gitobiのコーポレートニュース、メディア掲載情報などを発信しています。</p>
        </section>
        <section className={sectionContainer}>
          <TopicsList
            posts={posts}
          />
        </section>
      </article>
    </BaseLayout>
  )
}

export default TopicsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年M月D日")
          title
          description
          category
          featuredImage {
            src {
              childImageSharp {
                gatsbyImageData(width: 640, layout: CONSTRAINED)
              }
            }
            alt
          }
        }
      }
    }
  }
`
