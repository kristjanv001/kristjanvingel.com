import React from "react"
import { Global, css } from "@emotion/react"
// import "@fontsource/inter/500.css"
// import "@fontsource/playfair-display/700.css"
import Header from "./header"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
          }
          /* any element that is placed immediately after any element */
          * + * {
            /* margin-top: 1rem; */
            margin-top: 0.465rem;
          }
          html,
          body {
            margin: 0;

            color: rgb(35, 35, 35);
            /* font-family: Inter; */
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 500;
            font-size: 18px;
            line-height: 1.6;
            background-color: rgb(250, 250, 250);

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              /* line-height: 1.1; */
              line-height: 1.25;
              margin-top: 1.55rem;
              /* margin-bottom: 0.775rem; */
              letter-spacing: -0.04rem;
              /* font-family: "Playfair Display"; */

              /* any element that is placed immediately after a heading element */
              /* see postPreview :first-of-type as well */
              + * {
                margin-top: 1.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }

            main {
              margin: 2rem auto 4rem;
              max-width: 90vw;
              width: 750px;
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
      <Header />
      <main
        css={css`
          margin-top: -20px;
          background: #fff;

          padding: 40px 80px 60px 80px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
          position: relative;
          background: white;
          border-radius: 5px;
        `}
      >
        <div>{props.children}</div>
      </main>
    </React.Fragment>
  )
}
