import React from "react"
import radardata from "./radardata.json"

import { ResponsiveRadar } from "@nivo/radar"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data /* see data tab */ }) => {
  return (
    <ResponsiveRadar
      data={radardata}
      keys={["Skills"]}
      indexBy="domain"
      maxValue="auto"
      margin={{ top: 70, right: 0, bottom: 70, left: 0 }}
      curve="linearClosed"
      // curve="catmullRomClosed"
      borderWidth={1}
      // borderColor={{ from: "color" }}
      borderColor={{ from: "color", modifiers: [["brighter", 0.2]] }}
      gridLevels={5}
      gridShape="linear"
      gridLabelOffset={36}
      enableDots={true}
      dotSize={8}
      dotColor={{ from: "color", modifiers: [["brighter", 1]] }}
      dotBorderWidth={0}
      dotBorderColor="#ffffff"
      enableDotLabel={true}
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={{ scheme: "purple_orange" }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
      theme={{
        axis: { ticks: { text: { color: "#1c1c1c", fontSize: `0.8em` } } },
      }}
      legends={[
        {
          anchor: "top",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 0,
          itemHeight: 0,
          itemTextColor: "transparent",
          symbolSize: 0,
          symbolShape: "circle",
          effects: [
            {
              // on: "hover",
              style: {
                itemTextColor: "transparent",
                display: `none`,
              },
            },
          ],
        },
      ]}
    />
  )
}
export default MyResponsiveRadar
