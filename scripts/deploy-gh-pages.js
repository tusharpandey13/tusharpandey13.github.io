const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    //   repo: "https://github.com/tusharpandey13/portfolio.git",
    repo: "git@github.com:tusharpandey13/blog.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
