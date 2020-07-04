import React from "react"
import { Link } from "gatsby"
import Tags from "./tags"
import Image from './image'

const CardLink = ({ post }) => {
  const categories = post.frontmatter.categories;
  console.log(post.frontmatter);
  return(
    <div className="cardlink">
      <Image imgName={post.frontmatter.image}/>
      <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
      <Tags tags={categories}/>
    </div>)
}

export default CardLink

