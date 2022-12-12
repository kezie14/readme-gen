function renderLicenseBadge(license) {
    if(license !== "None"){
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

    }
    return "";
}

function renderLicenseLink(license) {
    if(license !== "None"){
        return `\n*[License](#license)\n`
    }
    return "";
}

function renderLicenseSection(license) {
    if(license !== "None"){
        return `##license
        This project is licensed under ${
            license
        }
        license
        `
    }
    return "";
}

function generateMarkdown(data) {
    return `
    ${renderLicenseBadge(data.license)}
    ##github
    ${data.github}
    
    ${renderLicenseLink(data.license)}



    ${renderLicenseSection(data.license)}
    
    `
}

module.exports = generateMarkdown;