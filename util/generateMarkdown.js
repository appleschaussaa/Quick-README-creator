// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {

// }

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
const generateMarkdown = async (title, description, GitHub, email, license, installation, test, info, contributing ) => {
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents

  ## Licenses
  ${license}

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
