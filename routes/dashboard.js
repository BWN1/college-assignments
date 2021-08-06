const roomModel = require("../models/room");
const multer = require("multer");
const express = require("express");
let router = express.Router();

const storage = multer.diskStorage({
    destination: "./static/public/room_photos/",
    filename: function(req, file, cb) {
        cb(null, Date.now() + '--' + file.originalname);
    }
});

const upload = multer({storage: storage});

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

//User is authenticated middleware
function authenticated (req, res, next) {
    if (req.session.authenticated) next();
    else res.redirect('/login');
}

module.exports = router;