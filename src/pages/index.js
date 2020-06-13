import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  // console.log({ data })
  return (
    <Layout title={`Home`} pathIndex={`0`}>
      <div>
        <Link to={`blog`}>{`Blog`}</Link>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query HomePageQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//             tags
//             excerpt
//           }
//         }
//       }
//     }
//   }
//  `

export default IndexPage
