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
    const getCountryAndNeighbor = new XMLHttpRequest();
    getCountryAndNeighbor.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    getCountryAndNeighbor.send();

    getCountryAndNeighbor.addEventListener('load', function() {
        //  this refers to request
        // console.log(this.responseText);
        //  convert to JSON
        const [data] = JSON.parse(this.responseText);
        // console.log(data);
        // const { name, nativeName, population } = data;
        // console.log(name, nativeName, population);
    })
}

testFunction('serbia')


//  Callback Hell
/* Is when one request call another request
//          Example

setTimeout(() => {
    console.log(`1 sec`);
    setTimeout(() => {
        console.log(`2 sec`);
    }, 1000);
    setTimeout(() => {
        console.log(`3 sec`);
    }, 1000);
    setTimeout(() => {
        console.log(`4 sec`);
    }, 1000);
}, 1000);

*/


// Promises and the Fetch API
//  Promise are object used as placeholder for future results of asynchronous operations
const promiseFetch = fetch(`https://restcountries.eu/rest/v2/name/serbia`);
// console.log(promiseFetch);

// const getCountry = (country) => {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then((response) => {
//         // console.log(response);
//         //  then we call json method witch is available on fetch method
//         return response.json();

//         //  IMPORTANT
//         // then we must return and call another callback function 
//     }).then((data) => {
//         const [dataObj] = data;
//         // console.log(dataObj.name, dataObj.region);
//     })

// };


//  SHORT VERSION
// const getCountry = (country) => {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => response.json()).then((data) => {
//         const [dataObj] = data;
//         console.log(dataObj);
//         console.log(dataObj.name, dataObj.region);
//     })
// };


//  CHAIN PROMISES
const getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => response.json()).then(data => {
        const [dataObj] = data;
        // console.log(dataObj);
        // console.log(dataObj.name, dataObj.region);
        console.log(dataObj);


        //  CHAIN HERE
        // const neighbor = dataObj.borders[0];
        const neighbor = 'bosnia';
        console.log(neighbor);
        //  FETCH SECOND COUNTRY NEIGHBOR
        return fetch(`https://restcountries.eu/rest/v2/name/${neighbor}`).then(neighborResponse => neighborResponse.json()).then(dataNeighbor => {
            return console.log(dataNeighbor);
        })
    })
};

// getCountry('serbia');



// Jokes
const findJokes = (city) => {
        fetch(`https://www.breakingbadapi.com/api/characters?name=${city}`).then(response => response.json()).then(data => {
            const [objData] = data;
            console.log(objData);
        });
    }
    // findJokes('saul');




//API for random Kanye West quotes
const joke = () => {
    fetch(`https://api.kanye.rest`).then(response => response.json()).then(data => console.log(data.quote))
}

// joke();


// beer
const beerItem = (beerName) => {
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`).then(response => response.json()).then(data => {
            // const filterArr = data.filter(beer => beer.name === `${beerName}`);
            console.log(data);
        });
    }
    // beerItem('punk');
    // beerItem('Fake Lager')


//  Space events!!!
const space = (spaceEvent) => {
    fetch(`https://ll.thespacedevs.com/2.0.0/event/?search=${spaceEvent}`).then(response => response.json()).then(data => {
        console.log(data);
    });
}

// space('dragon')