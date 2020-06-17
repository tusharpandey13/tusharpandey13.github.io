import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Icon from "@mdi/react"
import {
  mdiMenu,
  mdiBook,
  mdiTextBox,
  mdiFolderHome,
  mdiChevronRight,
} from "@mdi/js"

import "./header.scss"

const Header = props => {
  const [ismenuButtonActive, setismenuButtonActive] = useState(false)
  const toggleMenu = () => setismenuButtonActive(!ismenuButtonActive)

  let BreadcrumbIcon = (
    <Icon
      path={mdiChevronRight}
      size={1.2}
      className={[`icon`, `H-nav-flex`].join(" ")}
    />
  )
  let HomeIcon = <Icon path={mdiFolderHome} size={1.2} className={`icon`} />
  let BlogIcon = <Icon path={mdiBook} size={1} className={`icon`} />
  let BlogPostIcon = <Icon path={mdiTextBox} size={1.1} className={`icon`} />
  let MenuIcon = <Icon path={mdiMenu} size={1.2} className={`icon`} />

  let nav = (
    <div className={`H-nav-C`}>
      <Link
        to="/"
        style={{
          color: `$border-color)`,
          height: `100%`,
          textDecoration: `none`,
        }}
        tabIndex={0}
      >
        <div className={[`H-nav-flex`, `navButtonContainer`].join(" ")}>
          {HomeIcon}
        </div>
      </Link>

      {props.pathIndex >= 1 && BreadcrumbIcon}
      {props.pathIndex >= 1 && (
        <Link
          to="/blog"
          style={{
            color: `$border-color)`,
            height: `100%`,
            textDecoration: `none`,
          }}
          tabIndex={1}
        >
          <div className={[`H-nav-flex`, `navButtonContainer`].join(" ")}>
            {BlogIcon}
          </div>
        </Link>
      )}

      {props.pathIndex > 1 && BreadcrumbIcon}
      {props.pathIndex > 1 && (
        <div className={[`H-nav-flex`, `navButtonContainer`].join(" ")}>
          {BlogPostIcon}
        </div>
      )}
    </div>
  )
  let menu = (
    <a
      className={[
        `H-menu-button`,
        `navButtonContainer`,
        `H-nav-flex`,
        ismenuButtonActive && `menuButtonActive`,
      ].join(" ")}
      tabIndex={2}
      onClick={toggleMenu}
    >
      {MenuIcon}
    </a>
  )
  let menuback = (
    <div
      className={[
        `H-menu-C`,
        `H-menu-bg`,
        ismenuButtonActive && `visible`,
      ].join(" ")}
    ></div>
  )
  return (
    <header>
      {nav}
      <div className={`H-menu-C`}>
        {menu}
        {menuback}
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
