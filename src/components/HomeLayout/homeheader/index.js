import React from "react"
import "./homeheader.scss"

const HomeHeader = props => {
  return (
    <div className={`hh-C`}>
      <div className={`h-C hometext`}>
        <div className={`h-b`}>
          <i>Home</i>
        </div>
      </div>
      <div className={`h-C`}>
        <a
          className={`h-b`}
          href={`https://twitter.com/_tusharpandey13/`}
          target={"_blank"}
        >
          <span>TW</span>
        </a>
        <a
          className={`h-b`}
          href={`https://www.instagram.com/tusharpandey13/`}
          target={"_blank"}
        >
          <span>IG</span>
        </a>
        <a
          className={`h-b`}
          href={`https://www.linkedin.com/in/tushar-pandey-376a51134/`}
          target={"_blank"}
        >
          <span>IN</span>
        </a>
        <a
          className={`h-b`}
          href={`https://github.com/tusharpandey13/`}
          target={"_blank"}
        >
          <span>GH</span>
        </a>
      </div>
    </div>
  )
}

export default HomeHeader
