/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import SEO from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Navigation from '../../../../src/navigation'


type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
          backgroundColor: `#240001`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
      })}
    />
        <Navigation />

    <SEO />
    <main className={className} >{children}</main>
  </React.Fragment>
)

export default Layout
