/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`body-container`}>
      <div className={`layout-flex-container`}>
        <main className={`layout-main`}>
          <div className={`layout-main-left`}></div>
          <div className={`layout-main-center`}>{children}</div>
          <div className={`layout-main-right`}></div>
        </main>
        <Footer />
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={`site-border`}></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
