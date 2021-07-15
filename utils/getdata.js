let data = require('../public/data.json');

// const abcd = fetch('https://github.com/tusharpandey13/sitedata/raw/master/data.json')
//   .then(async result => {
//     data = await result.json();
//   })
//   .catch(err => {
//     console.log(err);
//   });

const experience = data['experience'];
const projects = data['projects'];
const aboutme = data['aboutme'];
const links = data['links'];

export { experience, projects, aboutme, links, data };
