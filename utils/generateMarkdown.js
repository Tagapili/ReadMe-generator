// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return `\n* [license](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    
    return `## license
    
        licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Instructions](#instructions)
  * [Contribution_Guidelines](#guidelines)
  * [Test_Instructions](#test)


  ## Instructions

  ${data.instructions}

  ## Contribution Guidelines
  
  ${data.guidelines}

  ## Links for Deployment

  ${data.deployment}

  ## Test_Instructions 

  ${data.test}
  
  Pull requests are welcome. For major changes, please open an issue first
  to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
`
}

module.exports = generateMarkdown;
