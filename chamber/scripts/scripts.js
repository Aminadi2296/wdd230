// LAST MODIFIED 
document.getElementById("placeholder").innerHTML = new Date(document.lastModified);

let date = new Date();
let year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

// HAMBURGER MENU
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});


const visitsDisplay = document.querySelector(".visits");
if (visitsDisplay) {
// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
}




// DIRECTORY SECTION
async function getMembers() {
    const baseURL = window.location.hostname.includes("github") ? "https://aminadi2296.github.io/wdd230/" : "http://127.0.0.1:5500/";
    const url = `${baseURL}/chamber/data/members.json`;
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  async function directoryPage() {
    const container = document.querySelector(".directories-container");
    if (!container) return;
  
    const members = await getMembers();
    displayMembers(members, container);
  }
  
  
  const displayMembers = (members, container) => {
    members.forEach((member) => {
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h3');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
      let membership = document.createElement('p');
      let info = document.createElement('p');
  
  
      name.textContent = `${member.name}`;
      logo.setAttribute('src', `images/directory/${member.image}`);
      logo.setAttribute('alt', `Logo of ${name.textContent}.`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '350');
      logo.setAttribute('height', '400');
      address.textContent = `${member.address}`;
      phone.textContent = `${member.phone}`;
      website.textContent = `${member.website}`;
      membership.textContent = `${member.membership}`;
      info.textContent = `${member.info}`;
  
      // Append the section(card) with the created elements
      card.appendChild(name);
      card.appendChild(logo);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(membership);
      card.appendChild(info);
  
      container.appendChild(card);
    });
  }

  function changeView() {
    const toGrid = container.querySelector("#js-to-grid");
    const toList = container.querySelector("#js-to-list");

    [toGrid, toList].forEach(btn => btn.addEventListener("click", function () {
      if (this.dataset.view === container.dataset.view) return;
      container.dataset.view = this.dataset.view;
    }));
  }
  
  directoryPage();