//init the ui object
const ui = new UI();
//storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//get weather on DOM load 
document.addEventListener('DOMContentLoaded', getWeather);
//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    //set location in local storage
    storage.setLocationData(city, state);
    //get and display weather
    getWeather();
    //close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(res => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}