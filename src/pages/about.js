import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h2>About me</h2>
      <p>
        Go back to <Link to="/">homepage</Link>
      </p>
    </Layout>
  )
}
