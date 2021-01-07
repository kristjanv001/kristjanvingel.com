import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        Go back to <Link to="/">homepage</Link>
      </p>
    </Layout>
  )
}
