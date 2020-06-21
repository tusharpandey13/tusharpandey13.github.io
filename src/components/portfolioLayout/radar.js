import React from "react"
import radardata from "./radardata.json"

import { ResponsiveRadar } from "@nivo/radar"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
    data={radardata}
    keys={["Skills"]}
    indexBy="domain"
    maxValue="auto"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
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
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        symbolSize: 12,
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
export default MyResponsiveRadar
