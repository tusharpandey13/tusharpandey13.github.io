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
  let cvicon = <Icon path={mdiCardAccountDetailsStarOutline} size={1.2} />

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
          href={`https://www.linkedin.com/ambry/?x-li-ambry-ep=AQERcJEq9W2_5wAAAXLIrJ4_p6-PDBbont4CffKb8t4G4wtuIndM2BsAL7sRfnsiU5edNRkexI6rcMnAMn7sdDKb4gmLd4H2Jl7OogS15vMZcgMse8sDu0hMeylzS9t3sD5PEIlpXK4bJREwPbqaezreIPhlXK3VHLomhtXI3rSqcyR7kmFmkPbs_I9B6w2zlVwjaDVnREmHwMbbXuTWc9b8CkTtK6IkQeq5I3Pu-5GRXgKclfhG-cuzkyper4bh12ey1uWR1PdsLtyg5yBGAJ0BvRAnBij4jUC-Qafjl8Goorch3e3oKCJXNlkkilOTLEtUZAW2mp6EmTk4VL0OMMR7VilaRpKcpO3KKM1nYR1bNTYoVuVnmLqHHGB0v3MrSo64qm8oBlVe3fgXIBYekQ5sFRGvhe6vvkF8VLcxd9pVthnIDnv5pbMKs_n1N_5p93hr3d_V25neVn3uSty9MN8WkMQlHdDmdlcaMrvmZgJGBUFjcQ5V0ahAU-VfOcpHETFgK0eilo0gG5dM5D3aRA&x-ambry-um-filename=Profile.pdf`}
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
