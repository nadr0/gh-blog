import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleLinks from "../components/articlelinks"

const Articles = () => {
  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Latest articles</h1>
      <ArticleLinks></ArticleLinks>
    </Layout>
  )
}

export default Articles
