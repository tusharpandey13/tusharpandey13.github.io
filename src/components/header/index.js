import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "@mdi/react"
import { mdiChevronRight, mdiClockDigital } from "@mdi/js"
import { mdiFolderHome } from "@mdi/js"
import { mdiTextBox } from "@mdi/js"
import { mdiBook } from "@mdi/js"
import { mdiMenu } from "@mdi/js"

import "./header.css"

const Header = props => {
  let BreadcrumbIcon = (
    <Icon
      path={mdiChevronRight}
      size={1.2}
      className={[`icon`, `L-H-I-C`].join(" ")}
    />
  )
  let HomeIcon = <Icon path={mdiFolderHome} size={1.2} className={`icon`} />
  let BlogIcon = <Icon path={mdiBook} size={1} className={`icon`} />
  let BlogPostIcon = <Icon path={mdiTextBox} size={1.1} className={`icon`} />
  let MenuIcon = <Icon path={mdiMenu} size={1.2} className={`icon`} />

  let HeadImg = <img src={require("../../images/head.png")} />
  return (
    <header className={`L-H`}>
      <div className={`L-H-flex`}>
        <div className={`L-H-I`}>
          <Link
            to="/"
            style={{
              color: `#3d3d3d`,
              height: `100%`,
              textDecoration: `none`,
            }}
          >
            <div className={[`L-H-I-C`, `navContainer`, `h`].join(" ")}>
              {HomeIcon}
            </div>
          </Link>

          {props.pathIndex >= 1 && BreadcrumbIcon}
          {props.pathIndex >= 1 && (
            <Link
              to="/blog"
              style={{
                color: `#3d3d3d`,
                height: `100%`,
                textDecoration: `none`,
              }}
            >
              <div className={[`L-H-I-C`, `navContainer`, `h`].join(" ")}>
                {BlogIcon}
              </div>
            </Link>
          )}

          {props.pathIndex > 1 && BreadcrumbIcon}
          {props.pathIndex > 1 && (
            <div className={[`L-H-I-C`, `navContainer`].join(" ")}>
              {BlogPostIcon}
            </div>
          )}
          {props.pathIndex > 1 && (
            <div className={[`L-H-I-C`].join(" ")}>
              <span className={`textContainer`}>{props.title}</span>
            </div>
          )}
        </div>
        <div className={`L-H-I`}>
          <div className={[`L-H-I-C`, `navContainer`, `h`].join(" ")}>
            {MenuIcon}
          </div>
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
