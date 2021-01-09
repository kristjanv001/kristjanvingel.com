import React from "react"
import { Global, css } from "@emotion/react"
import "@fontsource/inter/500.css"
import "@fontsource/inter/800.css"
import "@fontsource/pt-serif"
import Header from "./header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Hero from "../components/hero"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            /* -webkit-font-smoothing: antialiased; */
            /* -moz-osx-font-smoothing: grayscale; */
            /* text-rendering: optimizeLegibility; */
            /* text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px; */
          }
          /* any element that is placed immediately after any element */
          * + * {
            /* margin-top: 1rem; */
            margin-top: 0.465rem;
          }
          html,
          body {
            margin: 0;

            /* color: rgb(35, 35, 35); */
            font-family: "PT Serif";
            /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
            font-weight: 500;
            font-size: 19px;
            line-height: 1.6;

            background: whitesmoke;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              line-height: 1.1;
              /* line-height: 1.25; */
              margin-top: 1.55rem;
              margin-bottom: 0.775rem;
              letter-spacing: -0.04rem;
              font-family: "Inter";

              /* any element that is placed immediately after a heading element */
              /* see postPreview :first-of-type as well */
            }

            strong {
              color: #48426d;
              /* opacity: 0.2; */
            }

            li {
              margin-top: 0.25rem;
            }

            main {
              margin: 2rem auto 4rem;
              max-width: 90vw;
              width: 750px;
            }
            p {
              margin-bottom: 1.1rem;
            }
            img {
              margin: 0;
            }
            main {
              padding: 10px;

              position: relative;

              /* border-radius: 5px; */

              @media (min-width: 600px) {
                padding: 40px 80px 60px 80px;
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
                margin-top: -20px;
                background-color: rgb(250, 250, 250);
              }
            }
            nav {
              padding: 0;
              margin: 0;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <div
        css={css`
          background-color: #36096d;
          background-image: linear-gradient(315deg, #028090 0%, #008080 74%);
          /* border: 3px solid green; */
        `}
      >
        <Header />
        {props.hero ? <Hero /> : null}
      </div>
      <main>
        <h2
          css={css`
            font-size: 2rem;
            margin-top: 0;
            font-weight: 800;

            @media (min-width: 600px) {
              margin-top: 1.55rem;
            }
          `}
        >
          {props.title}
        </h2>
        {props.children}
      </main>
      <div
        css={css`
          background-color: #36096d;
          background-image: linear-gradient(315deg, #028090 0%, #008080 74%);
        `}
      >
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  )
}

/* 

  @media (min-width: 600px) {
    font-size: 3rem;
  }
*/
