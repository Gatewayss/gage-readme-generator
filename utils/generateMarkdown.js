// renders chosen license badge 
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    default: return '';
  }
}

// renders the chosen license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)'
      break;
    case 'BSD':
      return '[BSD](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Apache':
      return '[Apache](https://opensource.org/licenses/Apache-2.0)'
      break
    default: return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license } = data
  const badge = renderLicenseBadge(license)
  const licenseLink = renderLicenseLink(license)
  return `
  # ${data.title}

  ${badge}

  # Table of Contents
  1. [application description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#test)
  7. [Questions](#questions)

  # Description
  ## ${data.description}

  # Installation
  ## ${data.installation}

  # License 
  ## ${licenseLink}

  # Usage
  ## ${data.usage}
  
  # Contributing 
  ## ${data.contributors}

  # Tests
  ## ${data.test}

  # Questions 
  ## ${data.github}
  ## "https://github.com/${data.github}"
  ## ${data.email}
`;
}

module.exports = generateMarkdown;
