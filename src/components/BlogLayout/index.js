/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"

import "./bloglayout.scss"

const BlogLayout = props => {
  return (
    <div
      className={[`L-flex-C`].join(" ")}
      style={props.fullheight && { height: `100vh` }}
    >
      <Header title={props.title} path={props.path} />
      <main className={`L-main`}>
        <div className={`L-M-left`}></div>
        <div className={`L-M-center`}>{props.children}</div>
        <div className={`L-M-right`}></div>
      </main>
      <div className={`S-border`}></div>
      <Footer />
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default BlogLayout
