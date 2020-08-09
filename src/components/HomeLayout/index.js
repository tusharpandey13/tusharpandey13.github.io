import React from "react"

import HomeHeader from "./homeheader"
import HomeDescr from "./homedescr"
import HomeContent from "./homecontent"

import "./newhome.scss"

const HomeLayout = props => {
  let bigtext = (
    <div className={`bigtext-C`}>
      <div className={`cleartop`} />
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"}>
        <div className={`bigtext`}>
          <span>TUSHAR PANDEY</span>
        </div>
      </a>

      {/* <div className={`cleartop`} /> */}
      <HomeDescr></HomeDescr>
    </div>
  )

  return (
    <div>
      <HomeHeader></HomeHeader>
      <div className={`L-flex-C`}>
        {bigtext}
        <HomeContent></HomeContent>
      </div>
    </div>
  )
}

export default HomeLayout
