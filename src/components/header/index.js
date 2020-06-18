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
  mdiCircleSmall,
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
  let circleicon = (
    <Icon path={mdiCircleSmall} size={1} className={[`icon`].join(" ")} />
  )
  let HomeIcon = <Icon path={mdiFolderHome} size={1.2} className={`icon`} />
  let BlogIcon = <Icon path={mdiBook} size={1} className={`icon`} />
  let BlogPostIcon = <Icon path={mdiTextBox} size={1.1} className={`icon`} />
  let MenuIcon = <Icon path={mdiMenu} size={1.2} className={`icon`} />
  console.log(!!props.no_border_top)
  let nav = (
    <div className={[`H-nav-C`, props.pathIndex == 0 && `blur`].join(" ")}>
      <Link
        to="/"
        style={{
          color: `$border-color)`,
          height: `100%`,
          textDecoration: `none`,
        }}
      >
        <div
          className={[
            `H-nav-flex`,
            `navButtonContainer`,
            props.pathIndex == 0 && `blur`,
          ].join(" ")}
        >
          {HomeIcon}
          <span>Home</span>
        </div>
      </Link>

      {props.pathIndex == 0 && circleicon}
      {props.pathIndex >= 1 && BreadcrumbIcon}
      {/* {BreadcrumbIcon} */}
      {/* {props.pathIndex >= 1 && ( */}
      <Link
        to="/blog"
        style={{
          color: `$border-color)`,
          height: `100%`,
          textDecoration: `none`,
        }}
      >
        <div
          className={[
            `H-nav-flex`,
            `navButtonContainer`,
            ,
            props.pathIndex == 0 && `blur`,
          ].join(" ")}
        >
          {BlogIcon}
          <span>Blog</span>
        </div>
      </Link>
      {/* )} */}

      {props.pathIndex > 1 && BreadcrumbIcon}
      {props.pathIndex > 1 && (
        <div
          className={[
            `H-nav-flex`,
            `navButtonContainer`,
            props.pathIndex == 0 && `blur`,
          ].join(" ")}
        >
          {BlogPostIcon}
          <span className={`blogposttitle`}>Post</span>
        </div>
      )}
    </div>
  )
  let menu = (
    <button
      className={[
        `H-menu-button`,
        `navButtonContainer`,
        `H-nav-flex`,
        ismenuButtonActive && `menuButtonActive`,
        props.pathIndex == 0 && `blur`,
      ].join(" ")}
      onClick={toggleMenu}
    >
      {MenuIcon}
    </button>
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
    <header style={props.no_border_top && { borderTop: `none` }}>
      {nav}
      <div className={`H-menu-C`}>
        {!(props.pathIndex == 0) && menu}
        {menuback}
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  border_top: PropTypes.bool,
}

Header.defaultProps = {
  title: `Blog`,
}

export default Header
