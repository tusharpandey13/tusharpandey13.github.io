import React from "react"

import Scroll from "../locomotiveScroll"

import HomeHeader from "./homeheader"
import HomeDescr from "./homedescr"

import "./newhome.scss"

const HomeLayout = props => {
  let bigtext = (
    <div className={`bigtext-C`}>
      <div className={`cleartop`}></div>
      <div className={`bigtext`}>
        <span>TUSHAR PANDEY</span>
      </div>
      <HomeDescr></HomeDescr>
    </div>
  )

  return (
    <div>
      <HomeHeader></HomeHeader>
      <div className={`L-flex-C`}>
        <Scroll callbacks={props.location} />
        {bigtext}
      </div>
    </div>
  )
}

export default HomeLayout
