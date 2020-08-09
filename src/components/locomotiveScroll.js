import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

const scrolloptions = {
  // Locomotive Scroll
  // https://github.com/locomotivemtl/locomotive-scroll#instance-options
  // container: "#___gatsby",
  // container: ".L-flex-C",
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.2,
  },
}

const Scroll = props => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(props.container),
      ...scrolloptions.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      props.callback(func.direction)
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [props.callback])

  return null
}

export default Scroll
