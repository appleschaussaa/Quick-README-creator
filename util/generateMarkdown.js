// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badges = ""
    if (license = "MIT") {
      badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license = "ApACHE 2.0") {
      badges = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license = "GPL 3.0") {
      badges = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license = "BSD") {
      badges = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if (license = "ISC") {
      badges = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    } else if (license = "None") {
      badges = ""
    }
    return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
// // there has to be a way to combine the link and section into one function
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, GitHub, email, license, installation, test, info, contributing}) => {
  let badges = renderLicenseBadge
  
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents

  ## Licenses & Badges
  ${license}
  ${badges}

  ## Contacts
  ${GitHub}
  ${email}

  ## Installation
  ${installation}

  ## Testing
  ${test}

  ## Information
  ${info}

  ## Contributing
  ${contributing}
`;
};

module.exports = generateMarkdown;
