//Express
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
var HTTP_PORT = process.env.PORT || 8080;

//Dotenv environment variables
require('dotenv').config();

//Models
const userModel = require("./models/user");
const roomModel = require("./models/room");

//Mongoose
const mongoose = require("mongoose");
mongoose.connect(
    process.env.DBCONNECTION, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
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

//User is authorized middleware
function authorized (req, res, next) {
    if (req.session.user.role === "admin") next();
    else res.redirect('/dashboard');
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
    let render = (rooms) => {
        res.render('listings', {
            title: 'Room Listings - Airbnb',
            style: 'listings',
            promo: {
                description: 'SUMMER SALE: Get 10% off with code',
                code: 'SUMMER10'
            },
            rooms: rooms
        });
    };

    //Check for location query
    if (req.query.location) {
        roomModel.findRoomsByLocation(req.query.location, (roomsFound) => {
            render(roomsFound);
        });
    }
    else {
        roomModel.getAllRooms((roomsFound) => {
            render(roomsFound);
        });
    }
});

//Room details get
app.get("/room/:id", function(req, res) {
    roomModel.findRoom(req.params.id, (room) => {
        res.render('room', {
            title: `${room.title} - Airbnb`,
            style: 'room',
            script: 'room',
            promo: {
                description: 'SUMMER SALE: Get 10% off with code',
                code: 'SUMMER10'
            },
            room: room
        });
    });
});

//Find room
app.post("/room/:id", authorized, function(req, res) {
    roomModel.findRoom(req.params.id, (room) => {
        res.send(room);
    });
});

//Book room
app.post("/book-room/:id", authenticated, function(req, res) {
    //Validate input
    if (req.body.checkIn === "" || req.body.checkOut === "") {
        res.redirect(`/room/${req.params.id}`);
    }
    else {
        userModel.addRoomBooking(req.session.user, req.params.id, req.body);
        res.redirect('/dashboard');
    }
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