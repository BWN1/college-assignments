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

module.exports.mailUser = function(email, fname) {
    //Send new user an email welcoming them
    mail.sendMail({
        from: `"Airbnb" <${process.env.EMAILUSER}>`,
        to: email,
        subject: "Welcome to Airbnb!",
        html: `<h1>Hey ${fname}! Welcome to Airbnb!</h1> 
            <h2>This is an email to confirm that you are registered!</h2>`
    });
}