import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  li,
  a,
  container,
  leftItem,
  featuredImage,
  rightItem,
  header,
} from "./topic-list-item.module.scss"

const TopicListItem = ({ className, path, title, featuredImagePath, featuredImageAlt, date, category, descriptionHTML }) => {
  return (
    <li
      className={`${li} ${className}`}
    >
      <Link
        className={a}
        to={path}
      >
        <div
          className={container}
        >
          <GatsbyImage
            className={leftItem}
            imgClassName={featuredImage}
            image={getImage(featuredImagePath)}
            alt={featuredImageAlt}
          />
          <div
            className={rightItem}
          >
            <h2
              className={header}
            >
              {title}
            </h2>
            <p>{category} {date}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: descriptionHTML,
              }}
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TopicListItem
