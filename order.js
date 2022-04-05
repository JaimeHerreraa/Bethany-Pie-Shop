'use strict';

window.addEventListener('DOMContentLoaded', function(e) {

    const order = localStorage.getItem('order');
    if (order) {
        const pieOrder = JSON.parse(order);
        const pie = document.querySelector('.pie');

        const title = pie.querySelector('.title');
        const price = pie.querySelector('.price');
        const desc = pie.querySelector('.desc');

        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc;

        const img = pie.querySelector('img');
        img.setAttribute("src", `./images/${pieOrder.id}.png`);
        img.setAttribute("alt", pieOrder.title);

    }

    let locationData = document.querySelector('#location');

    let location = {
        latitude: 'unknown',
        longitude: 'unknown'
    }

    window.navigator.geolocation.getCurrentPosition(
        function (position) {
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
        },
        function (error) {
            location.latitude = 'unknown';
            location.longitude = 'unknown'
        });

    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function (e) {

        const userData = {
            firstName: document.querySelector('#first-name').value,
            lastName: document.querySelector('#last-name').value,
            address: document.querySelector('#address').value,
            state: document.querySelector('#state').value,
            postalCode: document.querySelector('#postal-code').value,
            comments: document.querySelector('#comments').value,
            geolocation: `latitude: ${location.latitude} longitude: ${location.longitude}`
        }

        localStorage.setItem('user', JSON.stringify(userData));
    })
})