import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./footer.css"

const Footer = () => (
  <footer>
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
