import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import Header from "../header"
import Footer from "../footer"

import "./mainlayout.scss"

const MainLayout = props => {
  // https://source.unsplash.com/random/1024x576/?mountain,building,water
  let bgUrl = "https://source.unsplash.com/collection/10741347/1024x576"

  const [image, setImage] = useState(undefined)

  useEffect(() => {
    async function getImage(url) {
      let imageBlob
      try {
        imageBlob = (
          await axios.get(url, {
            responseType: "blob",
          })
        ).data
      } catch (err) {
        return null
      }
      return URL.createObjectURL(imageBlob)
    }
    async function getImages() {
      let tmp = await getImage(bgUrl)
      // console.log(tmp)
      setImage(tmp)
      // getImages()
    }
    getImages()
  }, [bgUrl])

  let textcard = (
    <div
      className={`clip-text-0`}
      style={
        image && {
          backgroundImage: `url(${image})`,
        }
      }
    >
      <div className={[`clip-text-2`, image && `visible`].join(" ")}>
        <div
          className={`clip-text`}
          style={
            image && {
              backgroundImage: `url(${image})`,
            }
          }
        >
          TUSHAR.
        </div>
      </div>
    </div>
  )

  return (
    <div className={[`L-flex-C`].join(" ")}>
      <Header title={props.title} pathIndex={props.pathIndex} />
      <div className={`wrapper`}>{textcard}</div>
      <Footer />
      <div className={`S-border`}></div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
