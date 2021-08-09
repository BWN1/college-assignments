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

function welcomeMailUser (email, fname) {
    //Send new user an email welcoming them
    mail.sendMail({
        from: `"Airbnb" <${process.env.EMAILUSER}>`,
        to: email,
        subject: "Welcome to Airbnb!",
        html: `<h1>Hey ${fname}! Welcome to Airbnb!</h1> 
            <h2>This is an email to confirm that you are registered!</h2>`
    });
}

function roomBookedMailUser (email, fname, roomDetails) {
    let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    let checkInDate = new Date(roomDetails.checkIn);
    let checkOutDate = new Date(roomDetails.checkOut);

    mail.sendMail({
        from: `"Airbnb" <${process.env.EMAILUSER}>`,
        to: email,
        subject: "Booked room on Airbnb",
        html: `<h1>Hey ${fname}! You have successfully booked a room!</h1> 
            <p>You booked the <strong>${roomDetails.title}</strong> room 
            between the period of ${checkInDate.toLocaleDateString("en-CA", dateOptions)} and ${checkOutDate.toLocaleDateString("en-CA", dateOptions)}. 
            Your total is $${roomDetails.total}</p>`
    });
}

module.exports = {
    welcomeMailUser,
    roomBookedMailUser
}