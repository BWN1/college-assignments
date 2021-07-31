const userModel = require("../models/user");
const express = require("express");
let router = express.Router();

//Error message to be displayed
let errMessage = null;

//Login get
router.get("/", function(req,res){
    res.render('login', {
        title: 'Login - Airbnb',
        style: 'login',
        script: 'loginValidate',
        promo: {
            description: 'SUMMER SALE: Get 10% off with code',
            code: 'SUMMER10'
        },
        message: errMessage
    });
    errMessage = null;
});

//Login post
router.post("/", loginValidate, function(req, res){
    let { email, password } = req.body;

    userModel.authenticateUser(email, password, (result) => {
        if (!result) {
            errMessage = "Invalid email or password";
            res.redirect('/login');
        }
        else {
            req.session.authenticated = true;
            req.session.user = {
                name: `${result.fname} ${result.lname}`,
                email: result.email,
                role: result.role
            };
            res.redirect('/dashboard');
        }
    });
});

//Login validation
function loginValidate(req, res, next) {
    let { email, password } = req.body;

    if (email === '' || password === '') {
        errMessage = 'Invalid email or password';
        res.redirect('/login');
    }
    else next();
}

module.exports = router;