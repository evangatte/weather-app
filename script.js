const city = $('#city');
const clouds = $('#clouds')
const temperature = $('#temperature');
const realFeel = $('#real-feel');
const humidity = $('#humidity');
const wind = $('#wind');
const submitButton = $('#submit-button');
const inputBar = $('#input-bar');
const unitsButton = $('#units-button')
const unitText = $('#unit-text')
inputBar.value = 'Paris';
let units;






alternateUnits();

function alternateUnits() {
    unitsButton.click(() => {
        if (unitText.text() == 'F') {
            unitText.text('C')
        } else {
            unitText.text('F')
        }
        submitButton.trigger('click')
    })  
}






loadWeather('paris')

async function getWeather() {
    if (unitText.text() === 'F') {
        units = 'imperial';
    } else {
        units = '';
    }
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputBar.val()}&appid=0305ee94777d74864f050e119f7de47a&units=${units}`, {mode: 'cors'})
    const returnedWeather = await response.json();
    city.text(returnedWeather.name);
     clouds.text(returnedWeather.weather[0].description);
     temperature.text(returnedWeather.main.temp);
     realFeel.text(returnedWeather.main.feels_like);
     humidity.text(returnedWeather.main.humidity);
     wind.text(returnedWeather.wind.speed);
    
}

submitButton.on('click', () => {
    getWeather()
    .catch(() => {
        alert('Enter a valid city.')
    })

})



async function loadWeather() {

    units = unitText.text()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBar.value}&appid=0305ee94777d74864f050e119f7de47a&units=imperial`, {mode: 'cors'})
    const returnedWeather = await response.json();
    city.text(returnedWeather.name);
     clouds.text(returnedWeather.weather[0].description);
     temperature.text(returnedWeather.main.temp);
     realFeel.text(returnedWeather.main.feels_like);
     humidity.text(returnedWeather.main.humidity);
     wind.text(returnedWeather.wind.speed);
}






