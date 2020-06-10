import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className={`site-header`}>
    <h1 className={`site-header-h1`}>
      <Link
        to="/"
        style={{
          color: `#3d3d3d`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
