const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x400/albuquerque-temple-lds-820684-wallpaper.jpg"
    },

    {
        templeName: "San Diego California Temple",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },

    {
        templeName: "Los Amgeles California Temple",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",   
        area: 1906,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
  ];

  const templeContainer = document.getElementById("temple-grid");

temples.forEach((temple) => {
  const templeCard = document.createElement("div");
  templeCard.classList.add("temple-card");

  const templeImage = document.createElement("img");
  templeImage.src = temple.imageUrl;
  templeImage.alt = temple.templeName;
  templeImage.loading = "lazy";
  templeCard.appendChild(templeImage);

  const templeName = document.createElement("h2");
  templeName.textContent = temple.templeName;
  templeCard.appendChild(templeName);

  const templeLocation = document.createElement("p");
  templeLocation.textContent = "Location: " + temple.location;
  templeCard.appendChild(templeLocation);

  const templeDedicated = document.createElement("p");
  templeDedicated.textContent = "Dedicated: " + temple.dedicated;
  templeCard.appendChild(templeDedicated);

  const templeArea = document.createElement("p");
  templeArea.textContent = "Area: " + temple.area + " square feet";
  templeCard.appendChild(templeArea);

  templeContainer.appendChild(templeCard);
});

document.addEventListener('DOMContentLoaded', () => {
    let currentYear = new Date().getFullYear();
    let lastModifiedDate = document.lastModified;

    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City <br><br> Last modified: ${lastModifiedDate}`;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});