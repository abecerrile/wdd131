let currentYear = new Date().getFullYear();

let lastModifiedDate = document.lastModified;

document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City \n\n Last modified: ${lastModifiedDate}`;
