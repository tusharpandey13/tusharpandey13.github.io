import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "@mdi/react"
import { mdiChevronRight } from "@mdi/js"
import { mdiFolderHome } from "@mdi/js"

import "./header.css"

const Header = props => {
  let TitleIcon = <div style={{ display: `none` }}></div>
  let BreadcrumbIcon = <div style={{ display: `none` }}></div>
  if (props.title !== "Home") {
    TitleIcon = <Icon path={props.headerIcon} size={1} className={`icon`} />
    BreadcrumbIcon = (
      <Icon path={mdiChevronRight} size={1.2} className={`icon`} />
    )
  }
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
          <div className={`L-H-T`}>
            <Icon path={mdiFolderHome} size={1.2} className={`icon`} />
            {BreadcrumbIcon}
            {TitleIcon}
            <span>{props.title}</span>
          </div>
        </Link>
      </div>
      <div className={`L-H-item`}>
        <div className={`L-H-T`}>
          <span>Tushar Pandey</span>
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
