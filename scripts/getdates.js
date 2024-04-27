document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();

    document.querySelector('footer p:first-child').textContent = "© " + currentYear + " Alberto Becerril | Mexico City";
  
    var lastModifiedDate = document.lastModified;
    
    document.querySelector('footer p:nth-child(2)').textContent = "Last modified: " + lastModifiedDate;
});
