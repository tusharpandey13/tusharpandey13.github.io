const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'out',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:tusharpandey13/portfolio-site.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);
