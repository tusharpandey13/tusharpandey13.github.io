import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import { ReactComponent as IconSvg } from "./book-24px.svg"

const Header = props => (
  <header className={`L-H-flex`}>
    <div className={`L-H-item`}>
      <Link
        to="/"
        style={{
          color: `#3d3d3d`,
          textDecoration: `none`,
        }}
      >
        <div className={`L-H-T`}>
          <img src={require(props.titleIconUrl)} />
          {props.title}
        </div>
      </Link>
    </div>
    <div className={`L-H-item`}>
      <div className={`L-H-name`}>
        <span>Tushar Pandey</span>
        <img src={require("./head.png")} />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  titleIconUrl: PropTypes.string,
}

Header.defaultProps = {
  title: `Blog`,
}

export default Header
