// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge() {
//   while (license != "None")
//     if (license = "MIT") {
//       badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)"
//     }
//     if (license = "ApACHE 2.0") {
//       badges = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/Apache-2.0)"
//     }
//     if (license = "GPL 3.0") {
//       badges = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/license/gpl-3.0)"
//     }
//     if (license= "BSD") {
//       badges = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/license/BSD-3-Clause)"
//     }
//     if (license = "ISC") {
//       badges = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/ISC)"
//     }
//     if (license = "None") {
//       badges = ""
//     }
//     return renderLicenseBadge;
// };

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, license, GitHub, email, installation, test, info, contributing}) => {
  function renderLicenseBadge() {
    // const badge = ""
    while (license = true)
      if (license.response = "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)"
      }
      if (license.response = "ApACHE 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/Apache-2.0)"
      }
      if (license.response = "GPL 3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/license/gpl-3.0)"
      }
      if (licens.response = "BSD") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/license/BSD-3-Clause)"
      }
      if (license.response = "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/ISC)"
      }
      if (license.response = "None") {
        return ""
      }
  };

  return `
  # ${title}

  ## Table of Contents
  * [Description](#description)
  * [Licenses](#licenses)
  * [Contacts](#contacts)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Contribution](#contributing)
  * [Tests](#tests)

  ## Description
  ${description}

  ## Licenses & Badges
  ${license}
  ${renderLicenseBadge()}

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
