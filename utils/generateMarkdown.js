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

// renders the license description 
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return '<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: </p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE</p>'
      break;
    case 'BSD':
      return '<p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p> <ol><li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</li></br><li> Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li></br><li> Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</li></ol><p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>'
      break;
    case 'Apache':
      return '<p>"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.</p><p>"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.</p><p>"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.</p><p>"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.</p><p>"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.</p>'
      break;
    default: return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license } = data
  const badge = renderLicenseBadge(license)
  const licenseLink = renderLicenseLink(license)
  const licenseSection = renderLicenseSection(license)
  return `
  # ${data.title}

  ${badge}

  # Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Usage](#usage)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License 
  ${licenseLink}
  ${licenseSection}

  ## Usage
  ${data.usage}
  
  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions 
  Github username: ${data.github}
  [link to Github profile](https://github.com/${data.github})
  to contact me reach me by email: ${data.email}
`;
}

module.exports = generateMarkdown;
