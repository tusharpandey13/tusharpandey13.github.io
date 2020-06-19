import PropTypes from "prop-types"
import React, { useState } from "react"

import NavItem from "./navItem"

import Icon from "@mdi/react"
import {
  mdiMenu,
  mdiBook,
  mdiTextBox,
  mdiFolderHome,
  mdiChevronRight,
  mdiCircleSmall,
  mdiCardAccountDetailsStarOutline,
} from "@mdi/js"

import "./header.scss"

const Header = props => {
  const [ismenuButtonActive, setismenuButtonActive] = useState(false)
  const toggleMenu = () => setismenuButtonActive(!ismenuButtonActive)

  let BreadcrumbIcon = <Icon path={mdiChevronRight} size={1.2} />
  let circleicon = <Icon path={mdiCircleSmall} size={1} />
  let HomeIcon = <Icon path={mdiFolderHome} size={1.2} />
  let BlogIcon = <Icon path={mdiBook} size={1} />
  let BlogPostIcon = <Icon path={mdiTextBox} size={1.1} />
  let MenuIcon = <Icon path={mdiMenu} size={1.2} />
  let cvicon = <Icon path={mdiCardAccountDetailsStarOutline} size={1.1} />

  let nav = (
    <div className={[`H-nav-C`, props.pathIndex == 0 && `blur`].join(" ")}>
      <NavItem
        href={`/`}
        pathIndex={props.pathIndex}
        icon={HomeIcon}
        text={`Home`}
      ></NavItem>

      {props.pathIndex == 0 && circleicon}
      {props.pathIndex >= 1 && BreadcrumbIcon}

      <NavItem
        href={`/blog`}
        pathIndex={props.pathIndex}
        icon={BlogIcon}
        text={`Blog`}
      ></NavItem>

      {props.pathIndex == 0 && circleicon}

      {props.pathIndex == 0 && (
        <NavItem
          href={`./profile.pdf`}
          pathIndex={props.pathIndex}
          icon={cvicon}
          text={`Resume`}
        ></NavItem>
      )}

      {props.pathIndex > 1 && BreadcrumbIcon}
      {props.pathIndex > 1 && (
        <NavItem
          href={``}
          pathIndex={props.pathIndex}
          icon={BlogPostIcon}
          text={props.title}
        ></NavItem>
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
    <header style={props.no_border_top && { borderTop: `none`, width: `100%` }}>
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
