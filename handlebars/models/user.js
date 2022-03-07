//Mail user
const { welcomeMailUser, roomBookedMailUser } = require("../static/js/mailUser");

//Room model
const roomModel = require("./room");

//Database
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

//Create User Schema
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
    },
    "roomsBooked": [{
        "roomId": {
            type: String,
            required: true
        },
        "checkInDate": {
            type: String,
            required: true
        },
        "checkOutDate": {
            type: String,
            required: true
        },
        "total": {
            type: String,
            required: true
        }
    }]
});

let User = mongoose.model("users", userSchema);

//Check if email is in use
function userExists(email, callback) {
    User.findOne({ email: email }).exec()
    .then((user) => {
        callback(user);
    });
}

function createUser(data) {
    let { fname, lname, email, password, day, month, year } = data;
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
            else welcomeMailUser(email, fname);
        });
    });
}

function authenticateUser(email, password, callback) {
    User.findOne({ email: email }).exec()
    .then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) callback(user);
                else callback();
            });
        }
        else callback();
    });
}

function addRoomBooking(user, roomId, data) {
    let { checkIn, checkOut, total } = data;
    let room = {
        roomId,
        checkInDate: checkIn,
        checkOutDate: checkOut,
        total
    };

    User.findOne({"email": user.email})
    .exec((err, user) => {
        if (err) console.log(err);
        user.roomsBooked.push(room);
        user.save((err) => {
            if (err) console.log(err);
            else roomBookedMailUser(user.email, user.fname, data);
        });

    });
}

function getBookedRooms(email, callback) {
    User.findOne({"email": email}).lean()
    .exec((err, user) => {
        if (err) console.log(err);
        //Get room ids to search for
        let roomIds = [];
        if (user.roomsBooked) {
            user.roomsBooked.forEach((room) => {
                roomIds.push(room.roomId);
            });
            callback(roomIds, user.roomsBooked);
        }
        else callback(null, null);
    });
}

module.exports = {
    userExists,
    createUser,
    authenticateUser,
    addRoomBooking,
    getBookedRooms
};