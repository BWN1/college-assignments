const userModel = require("../models/user");
const express = require("express");
let router = express.Router();

//Error message to be displayed
let errMessage = null;

//Register get
router.get("/", function(req,res){
    res.render('register', {
        title: 'Register - Airbnb',
        style: 'register',
        script: 'registerValidate',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        },
        message: errMessage
    });
    errMessage = null;
});

//Register post
router.post("/", registerValidate, function(req, res){
    let { fname, lname, email } = req.body;

    userModel.userExists(email, (user) => {
        if (user) {
            errMessage = "Account already exists";
            res.redirect('/register');
        }
        else {
            userModel.createUser(req.body);
            req.session.authenticated = true;
            req.session.user = {
                name: `${fname} ${lname}`,
                email: email,
                role: "user" //default to user
            };
            res.redirect('/dashboard');
        }   
    });
});

//Registration validation
function registerValidate(req, res, next) {
    let { fname, lname, email, password, day, month, year } = req.body;
    let currDate = new Date();
    let birthday = `${month}/${day}/${year}`;

    //Empty field
    if (fname === '' || lname === '' || email === '' || password === '' ||
        day === '' || month === '' || year === '') {
        errMessage = 'Required field is missing';
        res.redirect('/register');
    }
    //Inavlid email
    else if (!email.match(/[a-zA-z0-9]+[\@][a-zA-z]+[\.][a-zA-z]+$/)) {
        errMessage = 'Invalid email';
        res.redirect('/register');
    }
    //Invalid password
    else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]{6,15}$/)) {
        errMessage = 'Invalid password';
        res.redirect('/register');
    }
    //Invalid birthday
    else if (isNaN(Date.parse(birthday))) {
        errMessage = 'Invalid birthday';
        res.redirect('/register');
    }
    //Under 18
    else if ((currDate.getFullYear() - year) < 18) {
        errMessage = 'You must be 18 or older to sign up';
        res.redirect('/register');
    }
    //Valid form
    else next();
}

module.exports = router;