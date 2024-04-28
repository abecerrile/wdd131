// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the footer's first paragraph with the current year
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City`;

// Update the footer's second paragraph with the last modified date
document.querySelector('footer p:nth-of-type(2)').innerHTML = `Last modified: ${lastModifiedDate}`;
