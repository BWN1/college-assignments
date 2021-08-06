//Express
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
var HTTP_PORT = process.env.PORT || 8080;

//Dotenv environment variables
require('dotenv').config();

//Room model
const roomModel = require("./models/room");

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
let dashboard = require("./routes/dashboard");
app.use('/login', userLogin);
app.use('/register', userRegister);
app.use('/dashboard', dashboard);

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
    roomModel.getAllRooms((rooms) => {
        res.render('listings', {
            title: 'Room Listings - Airbnb',
            style: 'listings',
            promo: {
                description: 'SUMMER SALE: Get 10% off with code',
                code: 'SUMMER10'
            },
            room: rooms
        });
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