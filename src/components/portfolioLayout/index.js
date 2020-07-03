import React from "react"

// import BlogLayout from "../BlogLayout"
import Header from "../header"
import Footer from "../footer"
import MessageBox from "../messageBox"

import MyResponsivePie from "./pie"
import MyResponsiveRadar from "./radar"
import "./portfolio.scss"

const PortfolioLayout = props => {
  let pie = <MyResponsivePie></MyResponsivePie>
  let radar = <MyResponsiveRadar></MyResponsiveRadar>

  return (
    <div className={`L-flex-C`}>
      <Header title={`portfolio`} path={`portfolio`}></Header>
      <div className={`P-B-C`}>
        <MessageBox></MessageBox>
        <div className={`chart-C`} style={{ maxWidth: `680px` }}>
          {radar}
        </div>
        <div className={`chart-C`} style={{ maxWidth: `830px` }}>
          {pie}
        </div>
      </div>
      <Footer></Footer>
      <div className={`S-border`}></div>
    </div>
  )
}

export default PortfolioLayout
