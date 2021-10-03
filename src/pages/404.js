import React from "react"

import BaseLayout from "../components/templates/base-layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <Seo title="お探しのページが見つかりませんでした。" />
      <h1>お探しのページが見つかりませんでした。</h1>
    </BaseLayout>
  )
}

export default NotFoundPage
