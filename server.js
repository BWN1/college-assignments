const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static('static'));

app.get("/", function(req,res){
    res.render('index', {
        title: 'Airbnb - Come Home',
        style: 'home.css',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        }
    });
});

app.get("/listings", function(req,res){
    res.render('listings', {
        title: 'Room Listings - Airbnb',
        style: 'listings.css',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        },
        room: [
            {
                image: 'images/rooms/room1.jpg',
                type: 'Apartment',
                location: 'Toronto',
                title: 'Downtown Toronto Apartment - FREE WIFI',
                price: 130,
                rating: 4.67,
                numRatings: 121
            },
            {
                image: 'images/rooms/room2.jpg',
                type: 'House',
                location: 'Toronto',
                title: 'Downtown Toronto 2 Story House',
                price: 340,
                rating: 4.71,
                numRatings: 98
            },
            {
                image: 'images/rooms/room3.jpg',
                type: 'Apartment',
                location: 'Edmonton',
                title: 'Apartment with City Skyline View',
                price: 190,
                rating: 4.56,
                numRatings: 154
            },
            {
                image: 'images/rooms/room4.jpg',
                type: 'Apartment',
                location: 'Vancouver',
                title: 'Vancouver Apartment (close to public transport)',
                price: 270,
                rating: 4.81,
                numRatings: 59
            },
            {
                image: 'images/rooms/room5.jpg',
                type: 'House',
                location: 'Montreal',
                title: 'Downtown Montreal House with Balcony',
                price: 200,
                rating: 4.76,
                numRatings: 192
            },
            {
                image: 'images/rooms/room6.jpg',
                type: 'House',
                location: 'Vancouver',
                title: '2 Story House On The Outskirts Of Vancouver',
                price: 320,
                rating: 4.92,
                numRatings: 21
            }
        ]
    });
});

app.get("/login", function(req,res){
    res.render('login', {
        title: 'Login - Airbnb',
        style: 'login.css',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        }
    });
});

app.get("/register", function(req,res){
    res.render('register', {
        title: 'Register - Airbnb',
        style: 'register.css',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        }
    });
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(HTTP_PORT);