const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City`;

document.querySelector('footer p:nth-of-type(2)').innerHTML = `Last modified: ${lastModifiedDate}`;
