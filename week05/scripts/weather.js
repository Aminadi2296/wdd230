
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=49.75&lon=6.64&appid={32171cbcbe38b2508e70617ad7d984a6}'

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults (data);
      // console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displayResults (data) {
currentTemp.innerHTML = `${data.main.temp}&deg;F`;
const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
let desc = data.weather[0].description;
weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = `${desc}`;
}