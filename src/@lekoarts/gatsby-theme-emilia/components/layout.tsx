import React from "react"
import { Global } from "@emotion/core"
import { css, Styled } from "theme-ui"
import { Container } from "theme-ui"
import SEO from "./seo"
import Navigation from "./navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
      <Navigation/>
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `background`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    {children}
  </Styled.root>
)

export default Layout
