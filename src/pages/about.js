import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import "@fontsource/inter/600.css"

export default function About() {
  return (
    <Layout title="About">
      <p>
        Welcome to a HTML document in the global system of interconnected
        computer networks that use the TCP/IP protocol to communicate between
        networks and devices.
      </p>
      <p>
        My name is <strong>Kristjan Vingel</strong>, I'm a front-end engineer
        who likes to write and this is my personal website.
      </p>

      <p>
        I am currently working on personal projects using{" "}
        <strong>JavaScript</strong>, <strong>React</strong>, and recently also
        GraphQL.
      </p>

      <p>
        Since blogging is a huge passion of mine, I drop my nuggets of gold here
        from time to time.
      </p>

      <p>I'd be happy to hear about your ideas.</p>
      <p
        css={css`
          font-family: Inter;
          font-weight: 600;
        `}
      >
        <span role="img" aria-label="mailbox-emoji">
          📭
        </span>{" "}
        <strong>kristjan.vingel@protonmail.ch</strong>
      </p>
    </Layout>
  )
}
