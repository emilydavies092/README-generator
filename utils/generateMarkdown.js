// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
UNC README Homework #9
[README Generator]( )
![GitHub License]()
### Table of Contents:
* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
### Description: 
${data.description}
### Installation: 
To install neccessary dependencies, please run the following command:
\`\`\`
${data.install}
\`\`\`
### Usage: 
${data.usage}
### License: 
This project is licensed under the ${data.license} license 
### Contributing: 
${data.contributing}
### Tests: 
To run tests, please run the following command:
\`\`\`
${data.tests}
\`\`\`
### Questions: 
If you have any issues about the repo, please contact me via email at ${data.email}
You can find more of my work at ${data.username}
### Credits: 
npm inquirer
`;
}

module.exports = generateMarkdown;