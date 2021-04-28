'use strict';

//  Asynchronous JavaScript, AJAX and APIs

/*
Ajax is Asynchronous JavaScript and XML: Alow us to communicate with remote web servers in asynchronous way.
With Ajax call we can request data from web server dynamical
navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    const { longitude, latitude } = coords;
    // console.log(longitude, latitude);
}
*/


// First AJAX Call: XMLHttpRequest

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/name/serbia');
// request.send();
// request.addEventListener('load', function() {
//     //  this refers to REQUEST
//     // console.log(this.responseText);
//     //  convert to JSON
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     // const { name, nativeName, population } = data;
//     // console.log(name, nativeName, population);
// })


//  EXAMPLE FOR BEER

const beer = new XMLHttpRequest();
beer.open('GET', 'https://api.openbrewerydb.org/breweries?by_city=san_diego');
beer.send();

beer.addEventListener('load', () => {
        const [data] = JSON.parse(beer.responseText);
        // console.log(data);
    })
    // /status/confirmed 
    // https://api.covid19api.com/total/country/south-africa 
const covid = new XMLHttpRequest();
covid.open('GET', 'https://api.covid19api.com/live/country/serbia/status/confirmed');
covid.send();
covid.addEventListener('load', () => {
    // console.log(covid);
    const [covidData] = JSON.parse(covid.responseText);
    // console.log(covidData);
})


//  Call from function

const testFunction = (country) => {
    // Callback Hell
    const getCountryAndNeighbor = new XMLHttpRequest();
    getCountryAndNeighbor.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    getCountryAndNeighbor.send();

    getCountryAndNeighbor.addEventListener('load', function() {
        //  this refers to request
        // console.log(this.responseText);
        //  convert to JSON
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        // const { name, nativeName, population } = data;
        // console.log(name, nativeName, population);
    })
}

testFunction('serbia')