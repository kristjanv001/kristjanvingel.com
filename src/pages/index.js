import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postPreview"
export default function Home() {
  const posts = usePosts()

  return (
    <Layout>
      <h2>Blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
