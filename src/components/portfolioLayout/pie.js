import React from "react"

import piedata from "./piedata.json"

import { ResponsivePie } from "@nivo/pie"
import StarRatings from "react-star-ratings"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsivePie = props => {
  return (
    <ResponsivePie
      data={piedata.data}
      fill={piedata.fill}
      margin={{ top: 25, right: 150, bottom: 25, left: 0 }}
      innerRadius={0.5}
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
      enableSlicesLabels={false}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#1c1c1c"
      tooltip={({ id, value, rating, desc, color }) => {
        return (
          <div>
            <span style={{ color }}>
              {id}: <strong>"{desc}"</strong>
            </span>
            <div>
              <StarRatings
                rating={rating}
                starRatedColor={color}
                // changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension={`20px`}
                starSpacing={`5px`}
                starEmptyColor={`rgba(255,255,255,0.3)`}
              />
            </div>
          </div>
        )
      }}
      theme={{
        axis: { ticks: { text: { color: "#1c1c1c", fontSize: `0.8em` } } },

        tooltip: {
          container: {
            background: "rgba(0,0,0,0.6)",
            backdropFilter: `blur(5px)`,
            backfaceVisibility: `hidden`,
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
          color: "rgba(255, 255, 255, 0.2)",
          size: 4,
          padding: 2,
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
        {
          id: "squares",
          type: "patternSquares",
          size: 4,
          padding: 1,
          stagger: false,
          background: "inherit",
          color: "rgba(255, 255, 255, 0.2)",
        },
      ]}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 120,
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
