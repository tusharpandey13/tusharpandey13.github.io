import React from "react"
import { Link } from "gatsby"
import MainLayout from "../components/MainLayout"

const IndexPage = () => {
  return (
    <MainLayout pathIndex={`0`}>
      <div style={{ background: `black` }}>
        <Link to={`blog`}>{`Blog`}</Link>
      </div>
    </MainLayout>
  )
}

export default IndexPage
