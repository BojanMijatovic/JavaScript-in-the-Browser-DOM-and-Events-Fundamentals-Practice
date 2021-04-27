'use strict';

/*
Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need.
*/


navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    const { longitude, latitude } = coords;
    // console.log(longitude, latitude);
    console.log(`https://www.google.com/maps/@${longitude},${latitude}`);

    const coordsArr = [longitude, latitude];

    const map = L.map('map').setView(coordsArr, 13);



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coordsArr).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    console.log(L);
}), () => console.log(`Error`);