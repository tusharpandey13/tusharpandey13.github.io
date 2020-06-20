import React from "react"

import "./piechart.scss"

import { ResponsivePie } from "@nivo/pie"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = props => {
  let skillmap = {
    1: `Novice`,
    2: `Beginner`,
    3: `Intermediate`,
    4: `Advanced`,
    5: `Pro`,
    6: `Guru`,
  }
  return (
    <ResponsivePie
      data={props.data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      // pixelRatio={2}
      padAngle={0.7}
      sortByValue={true}
      fit={false}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={20}
      radialLabelsLinkHorizontalLength={40}
      radialLabelsLinkStrokeWidth={1.2}
      radialLabelsLinkColor={{ from: "color" }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      // slicelabel
      enableSlicesLabels={true}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#1c1c1c"
      sliceLabel={function (e) {
        return skillmap[e.value]
      }}
      // tooltip
      tooltipFormat={value => skillmap[value]}
      tooltip={({ id, value, color }) => (
        <span style={{ color }}>
          {id}: <strong>{skillmap[value]}</strong>
        </span>
      )}
      theme={{
        tooltip: {
          container: {
            background: "rgba(0,0,0,0.8)",
            // color: `#3c3c3c`,
          },
        },
      }}
      //
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 40,
          // translateY: 56,
          itemWidth: 100,
          itemHeight: 30,
          itemsSpacing: 2,
          itemTextColor: "#666",
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  )
}

export default MyResponsivePie
