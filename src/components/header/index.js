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
  const [isMenuActive, setisMenuActive] = useState(false)
  const toggleMenu = () => {
    setisMenuActive(!isMenuActive)
  }
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

  let first = (
    <div className={[`L-H-1-flex`]}>
      <div className={`L-H-I`}>
        <Link
          to="/"
          style={{
            color: `$border-color)`,
            height: `100%`,
            textDecoration: `none`,
          }}
          tabIndex={0}
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
              color: `$border-color)`,
              height: `100%`,
              textDecoration: `none`,
            }}
            tabIndex={1}
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
        {/* {props.pathIndex > 1 && ( */}
        <div className={[`L-H-I-C`].join(" ")}>
          <span className={`textContainer`}>{props.title}</span>
        </div>
        {/* )} */}
      </div>
      <div className={`L-H-I`}>
        <div
          className={[
            `L-H-I-C`,
            `navContainer`,
            `h`,
            isMenuActive && `menuactive`,
            isMenuActive && `shadow-below`,
          ].join(" ")}
          tabIndex={2}
          onClick={toggleMenu}
        >
          {MenuIcon}
        </div>
      </div>
    </div>
  )
  // febfej
  let second = (
    <div
      className={[`L-H-1-flex`, `L-H-menu`, isMenuActive && `blurbehind`].join(
        " "
      )}
    ></div>
  )
  return (
    <header className={`L-H`}>
      {first}
      {isMenuActive && second}
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
