import { Link } from "gatsby"
import React from "react"

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
          props.pathIndex == 0 && `blur`,
        ].join(" ")}
      >
        {props.icon}
        <span>{props.text}</span>
      </div>
    </Link>
  )
}

export default NavItem
