const core = require('@actions/core'); // TODO:  Run `npm install @actions/core` to get latest version
// const github = require('@actions/github');  // TODO:  run an npm install for this if using

// When used, this requiredArgOptions will cause the action to error if a value has not been provided.
const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

//const token = core.getInput('github-token', requiredArgOptions);
//const octokit = github.getOctokit(token);
