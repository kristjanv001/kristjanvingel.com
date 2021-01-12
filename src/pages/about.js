import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "@fontsource/inter/600.css"

export default function About({ data }) {
  return (
    <Layout title="About">
      <div
        css={css`
          display: flex;
          flex-direction: column-reverse;

          @media (min-width: 600px) {
            display: block;
          }
        `}
      >
        <div
          css={css`
            width: 100%;

            @media (min-width: 600px) {
              max-width: 200px;
              float: right;
              margin-left: 10px;
            }
          `}
        >
          <figure>
            <Img fluid={data.file.childImageSharp.fluid} />
            <figcaption>This is me in Brussels, 2018</figcaption>
          </figure>
        </div>

        <div>
          <p
            css={css`
              font-weight: bolder;
            `}
          >
            I'm a software engineer who writes.
          </p>
          <p>
            Welcome to an HTML document in the global system of interconnected
            computer networks that use the TCP/IP protocol to communicate
            between networks and devices.
          </p>

          <p>
            Although I have always been into computers, I never imagined being
            an engineer writing code. In fact, I have an LLM degree in the field
            of tax law. I was supposed to become a tax lawyer.
          </p>

          <p>
            Yet, something pulled me into the creative areas of life, such as
            writing and photography.
          </p>

          <p>
            It was in one late evening in a small but cozy room in Taipei where
            I discovered the field of front-end development. I knew instantly
            that I've found what I've been looking for and began learning HTML
            the very next day. The rest is history.
          </p>

          <p>
            Today I work on personal projects using tools and languages such as{" "}
            <strong>JavaScript</strong>, <strong>React</strong> and GraphQL.
          </p>

          <p>
            I enjoy coding up beautiful user interfaces that provide the best
            possible experience for the user. Through code, I can express myself
            artistically while satisfying my curiosity for technology.
          </p>
          <p>
            I'm truly happy and grateful to be able to do what I really love.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      absolutePath
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
