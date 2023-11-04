// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.title}
  
  ${data.discription}

  ## INSTRUCTIONS

  ${data.instructions}

  ## CONTRIBUTING GUIDELINES
  
  ${data.guidlines}

  ## TEST INSTRUCTIONS 

  ${data.test}
  
  Pull requests are welcome. For major changes, please open an issue first
  to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
  
  ## License
  ${data.license}

`
}

module.exports = generateMarkdown;
