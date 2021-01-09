import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postPreview"
// import { css } from "@emotion/react"
import "@fontsource/inter/700.css"
import Hero from "../components/hero"

export default function Home() {
  const posts = usePosts()

  return (
    <div>
      <Layout title="Blog" hero={Hero}>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </div>
  )
}
