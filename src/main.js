const core = require('@actions/core'); // TODO:  Run `npm install @actions/core` to get latest version
// const github = require('@actions/github');  // TODO:  run an npm install for this if using

// When used, this requiredArgOptions will cause the action to error if a value has not been provided.
const requiredArgOptions = {
  required: true,
  trimWhitespace: true
};

/*
Getting different inputs
  - Use the different functions to get different input types
  - Use the required option as the second argument to these functions rather than manually checking arguments
Inputs Examples:
  const myBoolInput = core.getBooleanInput('is-required');                // Getting boolean input
  const myMultilineInput = core.getMultilineInput('is-required');         // Getting multiline input
  const myStringInput = core.getInput('optional-string');                 // Getting string input (optional)
  const myRequiredInput = core.getInput('required', requiredArgOptions);  // Getting string input (required)


When using octokit:
  - When making get requests for lists of items, use the paginate function
  - When expecting a response, the action.then().catch() pattern is preferred over try/catch
Octokit Examples:
  const token = core.getInput('github-token', requiredArgOptions);
  const octokit = github.getOctokit(token);
  await octokit
    .paginate(octokit.rest.issues.listComments, {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: github.context.payload.pull_request.number
    })
    .then(comments => {
      console.log(`There are ${comments.length} comments`);
    })
    .catch(error => {
      core.info(`Failed to list PR comments. Error code: ${error.message}.`);
    });
*/

async function run() {
  // TODO:  Implement the action
}

run();
