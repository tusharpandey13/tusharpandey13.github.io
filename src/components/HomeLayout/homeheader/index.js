import React from "react"
import "./homeheader.scss"

const HomeHeader = props => {
  return (
    <div className={`hh-C`}>
      <div className={`h-C`}>
        <div className={`h-b`}>Home</div>
      </div>
      <div className={`h-C`}>
        <div className={`h-b`}>TW</div>
        <div className={`h-b`}>IG</div>
        <div className={`h-b`}>IN</div>
        <div className={`h-b`}>GH</div>
      </div>
    </div>
  )
}

export default HomeHeader
