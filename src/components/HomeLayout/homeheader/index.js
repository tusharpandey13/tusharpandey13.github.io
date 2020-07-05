import React from "react"
import "./homeheader.scss"

const HomeHeader = props => {
  return (
    <div className={`hh-C`}>
      <div className={`h-C`}>
        <div className={`h-b`}>
          <i>Home</i>
        </div>
      </div>
      <div className={`h-C`}>
        <a className={`h-b`}>TW</a>
        <a className={`h-b`}>IG</a>
        <a className={`h-b`}>IN</a>
        <a className={`h-b`}>GH</a>
      </div>
    </div>
  )
}

export default HomeHeader
