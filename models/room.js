const fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let roomSchema = new Schema ({
    "title": {
        "type": String,
        "required": true
    },
    "price": {
        "type": Number,
        "required": true
    },
    "description": {
        "type": String,
        "required": true
    },
    "location": {
        "type": String,
        "required": true
    },
    "image": {
        "type": String,
        "required": true
    }
});

let Room = mongoose.model("rooms", roomSchema);

//Create room
function createRoom(data, image) {
    let { title, price, description, location } = data;
    location = location.substr(0, location.length - 4); //4 chars to remove comma and state of city

    let room = new Room ({
        title: title,
        price: price,
        description: description,
        location: location,
        image: `./public/room_photos/${image.filename}`
    });

    room.save((err) => {
        if (err) console.log(err);
    });
}

//Update room
function updateRoom(data, image, callback) {
    let { id, title, price, description, location } = data;

    if (!image) {
        Room.findByIdAndUpdate(id, {
            "title": title,
            "price": price,
            "description": description,
            "location": location
        }, (err, room) => {
            if (err) console.log(err);
            callback();
        });
    }
    else {
        Room.findByIdAndUpdate(id, {
            "title": title,
            "price": price,
            "description": description,
            "location": location,
            "image": `./public/room_photos/${image.filename}`
        }, (err, room) => {
            if (err) console.log(err);
            callback(room);
        });
    }
}

//Get all rooms
function getAllRooms(callback) {
    Room.find({}).lean()
    .exec(function(err, rooms) {
        if (err) console.log(err)
        callback(rooms);
    });
}

//Find specific room
function findRoom(id, callback) {
    Room.findById(id).lean()
    .exec(function(err, room) {
        if (err) console.log(err)
        callback(room);
    });
}

module.exports = {
    createRoom,
    updateRoom,
    getAllRooms,
    findRoom
};