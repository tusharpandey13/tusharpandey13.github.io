import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "@mdi/react"
import { mdiChevronRight, mdiClockDigital } from "@mdi/js"
import { mdiFolderHome } from "@mdi/js"
import { mdiTextBox } from "@mdi/js"
import { mdiBook } from "@mdi/js"

import "./header.css"

const Header = props => {
  let BreadcrumbIcon = (
    <Icon path={mdiChevronRight} size={1.2} className={`icon`} />
  )
  let HomeIcon = <Icon path={mdiFolderHome} size={1.2} className={`icon h`} />
  let BlogIcon = <Icon path={mdiBook} size={1} className={`icon h`} />
  let BlogPostIcon = <Icon path={mdiTextBox} size={1.1} className={`icon h`} />
  return (
    <header className={`L-H-flex`}>
      <div className={`L-H-item`}>
        <Link
          to="/"
          style={{
            color: `#3d3d3d`,
            height: `100%`,
            textDecoration: `none`,
          }}
        >
          <div className={`L-H-T`}>{HomeIcon}</div>
        </Link>
        <Link
          to="/blog"
          style={{
            color: `#3d3d3d`,
            height: `100%`,
            textDecoration: `none`,
          }}
        >
          <div className={`L-H-T`}>
            {props.pathIndex >= 1 && BreadcrumbIcon}
            {props.pathIndex >= 1 && BlogIcon}
          </div>
        </Link>

        <div className={`L-H-T`}>
          {props.pathIndex > 1 && BreadcrumbIcon}
          {props.pathIndex > 1 && BlogPostIcon}
          <span>{props.title}</span>
        </div>
      </div>
      <div className={`L-H-item`}>
        <div className={`L-H-T`}>
          <span></span>
          <img src={require("../../images/head.png")} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: `Blog`,
}

export default Header
