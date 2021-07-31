//Express
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
var HTTP_PORT = process.env.PORT || 8080;

//Dotenv environment variables
require('dotenv').config();

//Mongoose & Database
const mongoose = require("mongoose");
const MongoDBSession = require("connect-mongodb-session")(session);
const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

//Nodemailer
const nodemailer = require('nodemailer');
const { ExpressHandlebars } = require('express-handlebars');
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
let db = mongoose.createConnection(
    process.env.DBCONNECTION, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }
);

//Store sessions
const store = new MongoDBSession({
    uri: process.env.DBCONNECTION,
    collection: "sessions"
})

//Add user schema to MongoDB
let userSchema = new Schema({
    "fname": {
        type: String,
        required: true
    },
    "lname": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        unique: true,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "birthday": {
        type: String,
        required: true
    },
    "role": {
        type: String,
        required: true
    }
});

let User = db.model("users", userSchema);

//Set up engine and static folder
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
app.use(express.static('static'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Expire after 1 Day
    },
    store: store
}));
app.use(function(req, res, next) {
    res.locals.session = req.session.authenticated;
    next();
});

//User is authenticated middleware
function authenticated (req, res, next) {
    if (req.session.authenticated) next();
    else res.redirect('/login');
}

//Login and registration validation
let errMessage = null;
function loginValidate(req, res, next) {
    let { email, password } = req.body;

    if (email === '' || password === '') {
        errMessage = 'Invalid email or password';
        res.redirect('/login');
    }
    else {
        next();
    }
}
function registerValidate(req, res, next) {
    let { fname, lname, email, password, day, month, year } = req.body;
    let currDate = new Date();
    let birthday = `${month}/${day}/${year}`;

    //Empty field
    if (fname === '' || lname === '' || email === '' || password === '' ||
        day === '' || month === '' || year === '') {
            errMessage = 'Required field is missing';
        res.redirect('/register');
    }
    //Inavlid email
    else if (!email.match(/[a-zA-z0-9]+[\@][a-zA-z]+[\.][a-zA-z]+$/)) {
        errMessage = 'Invalid email';
        res.redirect('/register');
    }
    //Invalid password
    else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{6,15}$/)) {
        errMessage = 'Invalid password';
        res.redirect('/register');
    }
    //Invalid birthday
    else if (isNaN(Date.parse(birthday))) {
        errMessage = 'Invalid birthday';
        res.redirect('/register');
    }
    //Under 18
    else if ((currDate.getFullYear() - year) < 18) {
        errMessage = 'You must be 18 or older to sign up';
        res.redirect('/register');
    }
    //Valid form
    else {
        //Check if email is in use
        User.findOne({ email: email }).exec()
        .then((user) => {
            //User exists
            if (user) {
                errMessage = 'Account already exists';
                res.redirect('/register');
            }
            else next();
        });
    }
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

//Login get
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

//Login post
app.post("/login", loginValidate, function(req, res){
    //Ambiguous for security
    errMessage = "Invalid email or password";
    let { email, password } = req.body;

    User.findOne({ email: email }).exec()
    .then((user)=> {
        if (!user) res.redirect('/login');
        else {
            bcrypt.compare(password, user.password, (err, match) => {
                if (!match) res.redirect('/login');
                else {
                    req.session.authenticated = true;
                    req.session.user = {
                        name: `${user.fname} ${user.lname}`,
                        email: user.email,
                        role: user.role
                    };
                    res.redirect('/dashboard');
                }
            });
        }
    });
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

//Register post
app.post("/register", registerValidate, function(req, res){
    let { fname, lname, email, password, day, month, year } = req.body;
    let birthday = `${month}/${day}/${year}`;

    //Create new user and hash password
    bcrypt.hash(password, 10, (err, hash) => {
        let user = new User ({
            fname: fname,
            lname: lname,
            email: email,
            password: hash,
            birthday: new Date(birthday),
            role: "user" //Regular user will be created upon registration
        });
    
        //Add new user to database
        user.save((err) => {
            if (err) console.log(`There was an error saving the user ${err}`);
            else console.log("User was saved");
        });
    });

    //Authenticate and redirect them to the dashboard
    req.session.authenticated = true;
    req.session.user = {
        name: `${fname} ${lname}`,
        email: email,
        role: "user" //Default registration role is user
    };
    res.redirect('/dashboard');

    // //Send new user an email welcoming them
    // mail.sendMail({
    //     from: '"Airbnb" <bneumannairbnb@gmail.com>',
    //     to: email,
    //     subject: "Welcome to Airbnb!",
    //     html: `<h1>Hey ${fname}! Welcome to Airbnb!</h1> 
    //         <h2>This is an email to confirm that you are registered!</h2>`
    // });
});

//User dashboard page
app.get("/dashboard", authenticated, function(req, res){
    //get authorization
    res.render('dashboard', {
        title: 'Dashboard - Airbnb',
        style: 'dashboard',
        session: req.session,
        user: req.session.user
    });
});

//Logout
app.get("/logout", function(req, res) {
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