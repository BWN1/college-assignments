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
function updateRoom() {

}

//Get all rooms
function getAllRooms(callback) {
    Room.find({}).lean()
    .exec(function(err, rooms) {
        if (err) console.log(err)
        else callback(rooms);
    });
}

module.exports = {
    createRoom,
    updateRoom,
    getAllRooms
};