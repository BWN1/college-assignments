const roomModel = require("../models/room");
const path = require("path");
const multer = require("multer");
const express = require("express");
let router = express.Router();

//Multer storage
const storage = multer.diskStorage({
    destination: "./static/public/room_photos/",
    filename: function(req, file, cb) {
        cb(null, Date.now() + '--' + file.originalname);
    }
});

//Multer
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if (!/(.png|.jpg|.jpeg)$/i.test(path.extname(file.originalname))) {
            message = "Invalid file type";
            messageType = "invalid";
            return cb(null, false);
        }
        else cb(null, true);
    }
});

//Error/success message when creating/editing a room
let message = null;
let messageType = null;

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
                script: "editRoom",
                user: user,
                rooms: rooms,
                message: message,
                messageType: messageType
            });

            message = null;
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
router.get("/create-room", authenticated, authorized, function(req,res) {
    res.render("createRoom", {
        title: "Create A Room - Airbnb",
        style: "dashboard",
        script: "createRoom",
        message: message,
        messageType: messageType
    });
    message = null;
});

//Create room post
router.post("/create-room", authenticated, authorized, upload.single('image'), function(req,res) {
    if (message) res.redirect("/dashboard/create-room");
    else {
        roomModel.createRoom(req.body, req.file);
        res.redirect("/dashboard");
    }
});

//Edit room
router.post("/edit-room", authenticated, authorized, upload.single('image'), function(req,res) {
    if (message) res.redirect("/dashboard");
    else {
        roomModel.updateRoom(req.body, req.file, () => {
            message = "Successfully updated room!";
            messageType = "success";
            res.redirect("/dashboard");
        });
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
    else res.redirect('/dashboard');
}

module.exports = router;