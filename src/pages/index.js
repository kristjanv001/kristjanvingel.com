import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postPreview"

export default function Home() {
  const posts = usePosts()

  return (
    <React.Fragment>
      <Layout>
        <h2>Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </React.Fragment>
  )
}
