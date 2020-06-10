import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
