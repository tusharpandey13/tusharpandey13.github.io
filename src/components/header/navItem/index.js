import { Link } from "gatsby"
import React from "react"

import "./navitem.scss"

const NavItem = props => {
  return (
    <Link
      to={props.href}
      style={{
        color: `$border-color`,
        height: `100%`,
        textDecoration: `none`,
      }}
    >
      <div
        className={[
          `H-nav-flex`,
          `navButtonContainer`,
          props.path === "home" && `blur`,
        ].join(" ")}
      >
        {props.icon}
        <span>{props.text}</span>
      </div>
    </Link>
  )
}

export default NavItem
