import React from "react"

import TopicListItem from "../../molecules/list-items/topic-list-item"

import {
  ul,
  li,
} from "./topics-list.module.scss"

const TopicsList = ({ className, posts }) => {

  return (
    <ul
      className={`${ul} ${className}`}
    >
      {posts.map(post => {
        return (
          <TopicListItem
            key={post.fields.slug}
            className={li}
            path={post.fields.slug}
            title={post.frontmatter.title}
            featuredImagePath={post.frontmatter.featuredImage.src}
            featuredImageAlt={post.frontmatter.featuredImage.alt}
            date={post.frontmatter.date}
            category={post.frontmatter.category}
            descriptionHTML={post.frontmatter.description}
          />
        )
      })}
    </ul>
  )
}

export default TopicsList
