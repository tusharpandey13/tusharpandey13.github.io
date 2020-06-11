import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import { ReactComponent as IconSvg } from "./book-24px.svg"

const Header = ({ siteTitle }) => (
  <header className={`site-header-flex`}>
    <div className={`site-header-item`}>
      <Link
        to="/"
        style={{
          color: `#3d3d3d`,
          textDecoration: `none`,
        }}
      >
        <div className={`site-header-title`}>
          <img src={require("./book-24px.svg")} />
          {siteTitle}
        </div>
      </Link>
    </div>
    <div className={`site-header-item`}>
      <div className={`site-header-name`}>
        <span>Tushar Pandey</span>
        <img src={require("./head.png")} />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
