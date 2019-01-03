const fetch = require('node-fetch');
const analysis = require('./analysis');

const repoOwner = process.argv[2];
const repoName = process.argv[3];

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/stats/contributors`)
  .then(res => res.json())
  .then(body => console.log(analysis(body)))
  .catch(err => console.log(err));
