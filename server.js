//Express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
var HTTP_PORT = process.env.PORT || 8080;

//Dotenv environment variables
require('dotenv').config();

//Mongoose & Database
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

//Nodemailer
const nodemailer = require('nodemailer');
const mail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS
    }
});

//Connect to MongoDB
let db = mongoose.createConnection(process.env.DBCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

//Add user schema to MongoDB
var userSchema = new Schema({
    "fname": String,
    "lname": String,
    "email": {
        type: String,
        unique: true
    },
    "password": String,
    "birthday": Date
});

var User = db.model("users", userSchema);

//Set up engine and static folder
app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(express.static('static'));

//Error message for user login/register
var errMessage = null;

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

//Login page
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

//Register page
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

//User dashboard page
app.get("/dashboard", function(req, res){
    res.render('dashboard', {
        title: 'Dashboard - Airbnb',
        style: 'dashboard'
    });
});

//Login validation
app.post("/login-submit", function(req, res){
    if (req.body.email === '' || req.body.password === '') {
        errMessage = 'Invalid email or password';
        res.redirect('/login');
    }
    else {
        res.redirect('/dashboard');
    }  
});

//Register validation
app.post("/register-submit", function(req, res){
    let dateString = `${req.body.month}/${req.body.day}/${req.body.year}`
    let currDate = new Date();

    //There is an empty field
    if (req.body.fname === '' || req.body.lname === ''||
        req.body.email === '' || req.body.password === '' ||
        req.body.day === '' || req.body.month === '' || req.body.year === '') {
            errMessage = 'Required field is missing';
            res.redirect('/register');
    }
    //Inavlid email
    else if (!req.body.email.match(/[a-zA-z]+[\@][a-zA-z]+[\.][a-zA-z]+$/)) {
        errMessage = 'Invalid email';
        res.redirect('/register');
    }
    //Invalid password
    else if (!req.body.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{6,15}$/)) {
        errMessage = 'Invalid password';
        res.redirect('/register');
    }
    //Invalid birthday
    else if (isNaN(Date.parse(dateString))) {
        errMessage = 'Invalid birthday';
        res.redirect('/register');
    }
    //Under 18
    else if ((currDate.getFullYear() - req.body.year) < 18) {
        errMessage = 'You must be 18 or older to sign up';
        res.redirect('/register');
    }
    else {
        //Check if email is in use
        User.findOne({ email: req.body.email }).exec()
        .then((user) => {
            if (user) {
                errMessage = 'Account already exists';
                res.redirect('/register');
            }
            else {
                //Create new user and hash password
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    let user = new User ({
                        fname: req.body.fname,
                        lname: req.body.lname,
                        email: req.body.email,
                        password: hash,
                        birthday: new Date(dateString)
                    });

                    //Add new user to database
                    user.save((err) => {
                        if (err) console.log(`There was an error saving the user ${err}`);
                        else console.log("User was saved");
                    });
                });

                //Redirect them to the dashboard
                res.redirect('/dashboard');

                //Send new user an email welcoming them
                mail.sendMail({
                    from: '"Airbnb" <bneumannairbnb@gmail.com>',
                    to: req.body.email,
                    subject: "Welcome to Airbnb!",
                    html: `<h1>Hey ${req.body.fname}! Welcome to Airbnb!</h1> 
                        <h2>This is an email to confirm that you are registered!</h2>`
                });
            }
        });
    }
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(HTTP_PORT);