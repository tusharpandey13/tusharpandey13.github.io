import React from "react"

import BlogLayout from "../BlogLayout"
import Header from "../header"
import Footer from "../footer"

import MyResponsivePie from "./PieChart"
// import MyResponsiveSunburst from "./sunburst"
import piedata from "./piedata.json"
import sunburstdata from "./sunburstdata.json"
// import MyResponsivePieCanvas from "./piecanvas"

// import { Doughnut } from "react-chartjs-2"
// import * as pattern from "patternomaly"

import "./portfolio.scss"

const PortfolioLayout = props => {
  let pie = <MyResponsivePie data={piedata}></MyResponsivePie>
  // let pie = <MyResponsivePieCanvas data={piedata}></MyResponsivePieCanvas>
  // let sunburst = (
  //   <MyResponsiveSunburst data={sunburstdata}></MyResponsiveSunburst>
  // )
  // pattern.generate(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"])
  // let dd = {
  //   labels: ["Red", "Green", "Yellow"],
  //   datasets: [
  //     {
  //       data: [3, 5, 1],
  //       backgroundColor: [
  //         pattern.draw("square", "#ff6384"),
  //         pattern.draw("circle", "#36a2eb"),
  //         pattern.draw("triangle", "orange", "green"),
  //       ],
  //       // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //     },
  //   ],
  // }
  return (
    <div className={`L-flex-C`}>
      <Header title={`portfolio`} path={`portfolio`}></Header>
      <div className={`P-B-C`}>
        <div className={`chart-C`}>{pie}</div>
      </div>
      <Footer></Footer>
      <div className={`S-border`}></div>
    </div>
  )
}

export default PortfolioLayout
