import React from "react"
import { Global, css, ThemeProvider } from "@emotion/react"
import "@fontsource/inter/500.css"
import "@fontsource/inter/800.css"
import "@fontsource/pt-serif"
import Header from "./header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Hero from "../components/hero"

const theme = {
  colors: {
    accent: "#14274e",
  },
}

export default function Layout(props) {
  const { title, description } = useSiteMetadata()

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
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
              font-size: 20px;
              line-height: 1.6;
              color: black;

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
                margin-top: 0;
                margin-bottom: 0.775rem;
                letter-spacing: -0.04rem;
                font-family: "Inter";
              }

              strong {
                /* color: #bb2205; */
                /* opacity: 0.2; */
                font-weight: bolder;
              }

              li {
                margin-top: 0.25rem;
              }
              p {
                margin-bottom: 1.1rem;
              }
              img {
                margin: 0;
              }
              main {
                margin: 2rem auto 4rem;
                max-width: 90vw;
                width: 750px;
                padding: 10px;
                position: relative;
                /* border-radius: 5px; */
                @media (min-width: 600px) {
                  padding: 40px 80px 60px 80px;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                  margin-top: -20px;
                  background-color: rgb(250, 250, 250);
                }
              }
              nav {
                padding: 0;
                margin: 0;
              }
              footer a {
                color: #8bcdcd;
                text-decoration: none;
              }
              footer a:hover {
                color: whitesmoke;
              }
              a {
                color: #000080;
              }
              figcaption {
                font-size: 0.8rem;
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
            background: #000080;
          `}
        >
          <Header />
          {props.hero ? <Hero /> : null}
        </div>
        <main>
          {props.title && (
            <h2
              css={css`
                font-size: 2rem;
                margin-top: 0;
                font-weight: 800;
                color: #f1695e;

                @media (min-width: 600px) {
                  /* margin-top: 1.55rem; */
                }
              `}
            >
              {props.title}
            </h2>
          )}

          {props.children}
        </main>
        <div
          css={css`
            background: #000080;
          `}
        >
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

/* 

  @media (min-width: 600px) {
    font-size: 3rem;
  }
*/
