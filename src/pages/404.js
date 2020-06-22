import React from "react"

import BlogLayout from "../components/BlogLayout"
// import SEO from "../components/seo"

const NotFoundPage = () => (
  <BlogLayout title={`404`} path={`404`} fullheight={true}>
    {/* <SEO /> */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </BlogLayout>
)

export default NotFoundPage
