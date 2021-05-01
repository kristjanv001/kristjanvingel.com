import React from "react"
import Layout from "../components/layout"
import "@fontsource/inter/600.css"

export default function Contact({ data }) {
  return (
    <Layout title="Contact">
      <div>
        <p>You can email me at:</p>
        <p>
          <strong>kristjan.vingel@protonmail.ch</strong>
        </p>

        <p>I also hang out on: </p>
        <ul>
          <li>
            <a href="https://github.com/kristjanv001">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/kristjanv001">Twitter</a>
          </li>
        </ul>
        <p>
          However, the most reliable way to get in touch with me is by email. I
          don't necessarily check my inbox every 5 minutes, but when I get the
          time, I'll get back to you.
        </p>
        <p>
          Hope to hear from you{" "}
          <span role="img" aria-label="waving hand emoji">
            👋
          </span>
        </p>
      </div>
    </Layout>
  )
}
