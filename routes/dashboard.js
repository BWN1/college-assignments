const roomModel = require("../models/room");
const path = require("path");
const multer = require("multer");
const express = require("express");
let router = express.Router();

const storage = multer.diskStorage({
    destination: "./static/public/room_photos/",
    filename: function(req, file, cb) {
        cb(null, Date.now() + '--' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if (!/(.png|.jpg|.jpeg)$/i.test(path.extname(file.originalname))) {
            errMessage = "Invalid file type";
            return cb(null, false);
        }
        else cb(null, true);
    }
});

//Error message when creating/editing a room
let errMessage = null;

//Dashboard get
router.get("/", authenticated, function(req, res){
    let title = 'Dashboard - Airbnb';
    let style = 'dashboard';
    let user = req.session.user;

    if (user.role === "admin") {
        roomModel.getAllRooms((rooms) => {
            res.render('adminDashboard', {
                title: title,
                style: style,
                script: "roomValidate",
                user: user,
                rooms: rooms
            });
        });
    }
    else {
        res.render('dashboard', {
            title: title,
            style: style,
            user: user
        });
    }    
});

//Dashboard post
router.post("/", upload.single('image'), function(req,res){
    roomModel.createRoom(req.body, req.file);
    res.redirect("/dashboard");
});

//Create room get
router.get("/create-room", authorized, function(req,res) {
    res.render("createRoom", {
        title: "Create A Room - Airbnb",
        style: "dashboard",
        script: "roomValidate",
        message: errMessage
    });
    errMessage = null;
});

//Create room post
router.post("/create-room", authorized, upload.single('image'), function(req,res) {
    if (errMessage) res.redirect("/dashboard/create-room");
    else {
        roomModel.createRoom(req.body, req.file);
        res.redirect("/dashboard");
    }
});

//User is authenticated middleware
function authenticated (req, res, next) {
    if (req.session.authenticated) next();
    else res.redirect('/login');
}

//User is authorized middleware
function authorized (req, res, next) {
    if (req.session.user.role === "admin") next();
    else res.redirect('/login');
}

//Valid file uploaded
function validFile(multerUpload) {
    return (req, res, next) => {

    }
}

module.exports = router;