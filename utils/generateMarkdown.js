// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  console.log("i got it ");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license } = data
  const badge = renderLicenseBadge(license)
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
  ## ${data.license}

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
