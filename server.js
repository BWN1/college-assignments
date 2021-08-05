//Express
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
var HTTP_PORT = process.env.PORT || 8080;

//Dotenv environment variables
require('dotenv').config();

//Mongoose
const mongoose = require("mongoose");
mongoose.connect(
    process.env.DBCONNECTION, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
);

//Sessions
const MongoDBSession = require("connect-mongodb-session")(session);
const store = new MongoDBSession({
    uri: process.env.DBCONNECTION,
    collection: "sessions"
})
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Expire after 1 Day
    },
    store: store
}));

//Create local session variable for hbs views
app.use(function(req, res, next) {
    res.locals.session = req.session.authenticated;
    next();
});

//Set up render engine
app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({ 
    extname: '.hbs',
    helpers: {
        roleIs: function(arg1, arg2, options) {
            if (arg1 === arg2) return options.fn(this);
            return options.inverse(this);
        }
    }
}));
app.set('view engine', '.hbs');

//Static
app.use(express.static('static'));

//Routes
let userLogin = require("./routes/userLogin");
let userRegister = require("./routes/userRegister");
app.use('/login', userLogin);
app.use('/register', userRegister);

//User is authenticated middleware
function authenticated (req, res, next) {
    if (req.session.authenticated) next();
    else res.redirect('/login');
}

//Main page
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

//Listings page
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

//User dashboard page
app.get("/dashboard", authenticated, function(req, res){
    res.render('dashboard', {
        title: 'Dashboard - Airbnb',
        style: 'dashboard',
        session: req.session,
        user: req.session.user
    });
});

//Logout
app.get("/logout", authenticated, function(req, res) {
    req.session.destroy(function (err) {
        if (err) console.log(err);
        res.clearCookie('connect.sid');
        errMessage = null;
        res.redirect("/");
    });
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(HTTP_PORT);