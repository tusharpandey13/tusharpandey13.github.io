import React, { useMemo, useState, Fragment } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
// import Scroll from "../../locomotiveScroll"

import "./homeheader.scss"

const HomeHeader = props => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y
      const shouldBeStyle = {
        visibility: isVisible ? "visible" : "hidden",
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        transform: isVisible ? "none" : "translate(0, -100%)",
      }
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

  const headbase = (
    <div className={`hh-C`} style={{ ...headerStyle }}>
      {/* <Scroll
        container={`.L-flex-C`}
        callback={dir => {
          if (
            JSON.stringify(shouldBeStyle(dir)) === JSON.stringify(headerStyle)
          )
            return
          setHeaderStyle(shouldBeStyle(dir))
        }}
      /> */}

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
  return headbase
}

export default HomeHeader
