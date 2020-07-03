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
  mdiOrderBoolAscendingVariant,
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
  let portfolioicon = <Icon path={mdiOrderBoolAscendingVariant} size={1.1} />

  let nav_home = (
    <NavItem
      href={`/`}
      path={props.path}
      icon={HomeIcon}
      text={`Home`}
    ></NavItem>
  )
  let nav_blog = (
    <NavItem
      href={`/blog`}
      path={props.path}
      icon={BlogIcon}
      text={`Blog`}
    ></NavItem>
  )
  let nav_portfolio = (
    <NavItem
      href={`/portfolio`}
      path={props.path}
      icon={portfolioicon}
      text={`Portfolio`}
    ></NavItem>
  )
  let nav_cv = (
    <NavItem
      href={`https://github.com/tusharpandey13/portfolio/raw/master/src/resources/profile.pdf`}
      path={props.path}
      icon={cvicon}
      text={`Resume`}
    ></NavItem>
  )
  let nav_blogpost = (
    <NavItem
      href={``}
      path={props.path}
      icon={BlogPostIcon}
      text={props.title}
    ></NavItem>
  )
  let nav_newhome = (
    <NavItem
      href={`/newhome`}
      path={props.path}
      icon={BlogPostIcon}
      text={`NewHome`}
    ></NavItem>
  )
  let pathmap = {
    blog: nav_blog,
    blogpost: (
      <>
        {nav_blog}
        {BreadcrumbIcon}
        {nav_blogpost}
      </>
    ),
    portfolio: nav_portfolio,
  }
  let nav = (
    <div className={[`H-nav-C`, props.path === `home` && `blur`].join(" ")}>
      {nav_home}
      {props.path === `home` && (
        <>
          {circleicon}
          {nav_newhome}
          {circleicon}
          {nav_blog}
          {circleicon}
          {nav_portfolio}
          {circleicon}
          {nav_cv}
        </>
      )}
      {props.path !== `404` && props.path !== `home` && (
        <>
          {BreadcrumbIcon}
          {pathmap[props.path]}
        </>
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
        props.path === `home` && `blur`,
      ].join(" ")}
      onClick={toggleMenu}
    >
      {MenuIcon}
    </button>
  )
  let menuback = (
    <div
      className={[`H-menu-bg`, ismenuButtonActive && `visible`].join(" ")}
    ></div>
  )
  return (
    <header style={props.no_border_top && { borderTop: `none`, width: `100%` }}>
      {nav}
      <div className={`H-menu-C`}>
        {!(props.path === `home`) && menu}
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
