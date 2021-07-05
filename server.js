//const validate = require('./static/js/validate');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { nextTick } = require('process');
const app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(express.static('static'));

app.get("/", function(req,res){
    res.render('index', {
        title: 'Airbnb - Come Home',
        style: 'home',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        }
    });
});

app.get("/listings", function(req,res){
    res.render('listings', {
        title: 'Room Listings - Airbnb',
        style: 'listings',
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

var errMessage = null;
app.get("/login", function(req,res){
    res.render('login', {
        title: 'Login - Airbnb',
        style: 'login',
        script: 'loginValidate',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        },
        message: errMessage
    });
    errMessage = null;
});

app.get("/register", function(req,res){
    res.render('register', {
        title: 'Register - Airbnb',
        style: 'register',
        script: 'registerValidate',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        },
        message: errMessage
    });
    errMessage = null;
});

var regFormData = null;
app.get("/dashboard", function(req, res){
    res.render('dashboard', {
        title: 'Dashboard - Airbnb',
        style: 'dashboard',
        user: regFormData
    });
});

app.post("/login-submit", function(req, res){
    if (req.body.email === '' || req.body.password === '') {
        errMessage = 'Invalid email or password';
        res.redirect('/login');
    }
    else {
        res.redirect('/dashboard');
    }  
});

app.post("/register-submit", function(req, res){
    let dateString = `${req.body.month}/${req.body.day}/${req.body.year}`
    let currDate = new Date();
    regFormData = req.body;

    if (req.body.fname === '' || req.body.lname === ''||
        req.body.email === '' || req.body.password === '' ||
        req.body.day === '' || req.body.month === '' || req.body.year === '') {
            errMessage = 'Required field is missing';
            res.redirect('/register');
        }
    else if (!req.body.email.match(/[a-zA-z]+[\@][a-zA-z]+[\.][a-zA-z]+$/)) {
        errMessage = 'Invalid email';
        res.redirect('/register');
    }
    else if (!req.body.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{6,15}$/)) {
        errMessage = 'Invalid password';
        res.redirect('/register');
    }
    else if (isNaN(Date.parse(dateString))) {
        errMessage = 'Invalid birthday';
        res.redirect('/register');
    }
    else if ((currDate.getFullYear() - req.body.year) < 18) {
        errMessage = 'You must be 18 or older to sign up';
        res.redirect('/register');
    }
    else {
        res.redirect('/dashboard');
    }
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(HTTP_PORT);