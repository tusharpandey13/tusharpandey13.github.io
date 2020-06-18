import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"

const Footer = props => (
  <footer>
    <span className={[`reveal`, props.visible && `visible`].join(" ")}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        className={[`reveal`, props.visible && `visible`].join(" ")}
      >
        Gatsby
      </a>
    </span>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
