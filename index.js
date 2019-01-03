const fetch = require('node-fetch');

const repoOwner = process.argv[2];
const repoName = process.argv[3];

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/stats/contributors`)
  .then(res => res.json())
  .then(body => console.log(body))
  .catch(err => console.log(err));
