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

const Layout = props => {
  // const gqlData = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <div className={`body-container`}>
      <Header title={props.title} />
      <div className={`L-flex-container`}>
        <main className={`L-main`}>
          <div className={`L-M-left`}></div>
          <div className={`L-M-center`}>{props.children}</div>
          <div className={`L-M-right`}></div>
        </main>
        <Footer />
      </div>
      <div className={`S-border`}></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
