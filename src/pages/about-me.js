import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => {
  return (
  <Layout>
    <SEO title="About me" />
    <h1>Hello, I'm some blogger.</h1>

    <h2>Philosophy</h2>

    <blockquote cite="https://www.taniarascia.com/philosophy/">
      <p>In my website redesign and <a href="https://www.taniarascia.com/another-website-redesign/">making the internet better article</a>, I wrote about some of the ways I try to make my corner of the web beautiful. Here's what I do and why. I hope to encourage others by example.</p>
      <footer>—Tania Rascia, <cite>https://www.taniarascia.com/philosophy/</cite></footer>
    </blockquote>

    <h4>No ads</h4>
    <h4>No social media</h4>
    <h4>No tracking or analytics</h4>
    <h4>No third party scripts</h4>
    <h4>No sponsored posts</h4>
    <h4>No affiliate links</h4>
    <h4>No paywall</h4>
    <h4>No comments</h4>

  </Layout>
  )
}

export default AboutMe