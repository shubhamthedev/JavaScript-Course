class Weather {
    constructor(city, state) {
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }
    //Fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const resData = await response.json();
        return resData.current_observation;
    }
    //change location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}