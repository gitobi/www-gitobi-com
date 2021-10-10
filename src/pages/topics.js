import React from "react"

import BaseLayout from "../components/templates/base-layout"

import {
  article,
  section,
  sectionContainer,
} from "./topics.module.scss"

const TopicsPage = () => {
  return (
    <BaseLayout>
      <article className={article}>
        <section className={section}>
          <h1>TOPICS</h1>
          <p>Gitobiのコーポレートニュース、メディア掲載情報などを発信しています。</p>
        </section>
        <section className={sectionContainer}>
          <div>
            <h2>Topic</h2>
            <p>Header</p>
          </div>
          <div>
            <h2>Topic</h2>
            <p>Header</p>
          </div>
        </section>
      </article>
    </BaseLayout>
  )
}

export default TopicsPage
