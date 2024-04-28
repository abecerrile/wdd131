const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City \n\n Last modified: ${lastModifiedDate}`;
