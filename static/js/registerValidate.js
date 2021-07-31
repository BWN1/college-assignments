function blankFields(elem) {
    if (elem.value == "") {
        elem.style.border = '2px solid red';
    }
    else {
        elem.setAttribute('style', '');
    }
}

function validInput(elem, valid) {
    if (!valid) {
        elem.style.border = '2px solid red';
    }
    else {
        elem.setAttribute('style', '');
    }
}

function inputIsNonNumeric(elem) {
    if (elem.value.match(/[^\d+$]/)) {
        elem.value = elem.value.substr(0, elem.value.length - 1);
    }
}

function registerValidate(form) {
    const inputs = form.elements;
    const emailRegEx = /[a-zA-z0-9]+[\@][a-zA-z]+[\.][a-zA-z]+$/;

    //Check for blank fields
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', (event) => {
            blankFields(inputs[i]);
        });
    }

    //User email & password
    inputs.email.addEventListener('blur', (event) => {
        let warning = document.querySelector('#register-email-warning');
        if (!event.target.value.match(emailRegEx)) {
            validInput(event.target, false);
            warning.innerHTML = "Please enter a valid email";
            warning.classList.remove('toggle-hide');
        }
        else {
            validInput(event.target, true);
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
        }
    });

    let valid = false;
    inputs.password.addEventListener('input', (event) => {
        let elem = event.target;
        let passLength = document.querySelector('#password-length');
        let passLowercase = document.querySelector('#password-lowercase');
        let passUppercase = document.querySelector('#password-uppercase');
        let passNumber = document.querySelector('#password-number');
        let passSpecialChar = document.querySelector('#password-special-characters');

        //Is blank
        if (elem.value == "") {
            elem.style.border = '2px solid red';
        }
        else {
            elem.setAttribute('style', '');
        }

        //Password length
        if (elem.value.length >= 6 && elem.value.length <= 15) {
            valid = true;
            passLength.children[0].setAttribute('src', 'images/icons/valid.svg');
            passLength.children[1].classList.remove('constraint-invalid');
        }
        else {
            valid = false;
            passLength.children[0].setAttribute('src', 'images/icons/invalid.svg');
            passLength.children[1].classList.add('constraint-invalid');
        }
        
        //Contains lowercase
        if (elem.value.match(/[a-z]+/g)) {
            valid = true;
            passLowercase.children[0].setAttribute('src', 'images/icons/valid.svg');
            passLowercase.children[1].classList.remove('constraint-invalid');
        }
        else {
            valid = false;
            passLowercase.children[0].setAttribute('src', 'images/icons/invalid.svg');
            passLowercase.children[1].classList.add('constraint-invalid');
        }

        //Contains uppercase
        if (elem.value.match(/[A-Z]+/g)) {
            valid = true;
            passUppercase.children[0].setAttribute('src', 'images/icons/valid.svg');
            passUppercase.children[1].classList.remove('constraint-invalid');
        }
        else {
            valid = false;
            passUppercase.children[0].setAttribute('src', 'images/icons/invalid.svg');
            passUppercase.children[1].classList.add('constraint-invalid');
        }

        //Contains number
        if (elem.value.match(/[\d]+/g)) {
            valid = true;
            passNumber.children[0].setAttribute('src', 'images/icons/valid.svg');
            passNumber.children[1].classList.remove('constraint-invalid');
        }
        else {
            valid = false;
            passNumber.children[0].setAttribute('src', 'images/icons/invalid.svg');
            passNumber.children[1].classList.add('constraint-invalid');
        }

        //Has special character
        if (elem.value.match(/[!@#$%^&*(),.?":{}|<>]+/g)) {
            valid = true;
            passSpecialChar.children[0].setAttribute('src', 'images/icons/valid.svg');
            passSpecialChar.children[1].classList.remove('constraint-invalid');
        }
        else {
            valid = false;
            passSpecialChar.children[0].setAttribute('src', 'images/icons/invalid.svg');
            passSpecialChar.children[1].classList.add('constraint-invalid');
        }

        
    });

    inputs.password.addEventListener('blur', (event) => {
        validInput(event.target, valid);
    });

    //User birthday
    //Input event listener
    inputs.day.addEventListener('input', (event) => {
        let elem = event.target;

        inputIsNonNumeric(elem);
        if (!elem.value.match(/[0123]/)) {
            elem.value = '';
        }
        else if (elem.value > 31) {
            elem.value = elem.value.substr(0, 1);
        }
    });

    inputs.month.addEventListener('input', (event) => {
        let elem = event.target;

        inputIsNonNumeric(elem);
        if (!elem.value.match(/[01]/)) {
            elem.value = '';
        }
        else if (elem.value > 12) {
            elem.value = elem.value.substr(0, 1);
        }
    });

    inputs.year.addEventListener('input', (event) => {
        let elem = event.target;
        let currDate = new Date();

        inputIsNonNumeric(elem);
        if (elem.value > currDate.getFullYear()) {
            elem.value = elem.value;
        }
    });

    //Blur event listener
    let monthLengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    inputs.day.addEventListener('blur', (event) => {
        let elem = event.target;
        let day = parseInt(inputs.day.value);
        let month = parseInt(inputs.month.value);
        let warning = document.querySelector('#register-birthday-warning');

        if (isNaN(day)) {
            validInput(elem, false);
            warning.innerHTML = "Please enter a valid date";
            warning.classList.remove('toggle-hide');
        }
        
        if (day > monthLengths[month - 1] || day <= 0) {
            validInput(elem, false);
            validInput(inputs.month, false);
            warning.innerHTML = "Please enter a valid date";
            warning.classList.remove('toggle-hide');
        }
        else {
            validInput(elem, true);
            validInput(inputs.month, true);
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
        }
    });

    inputs.month.addEventListener('blur', (event) => {
        let elem = event.target;
        let day = parseInt(inputs.day.value);
        let month = parseInt(inputs.month.value);
        let warning = document.querySelector('#register-birthday-warning');

        if (isNaN(month)) {
            validInput(elem, false);
            warning.innerHTML = "Please enter a valid date";
            warning.classList.remove('toggle-hide');
        }
        
        if (day > monthLengths[month - 1] || day <= 0) {
            validInput(elem, false);
            validInput(inputs.day, false);
            warning.innerHTML = "Please enter a valid date";
            warning.classList.remove('toggle-hide');
        }
        else {
            validInput(elem, true);
            validInput(inputs.day, true);
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
        }
    });

    inputs.year.addEventListener('blur', function(event) {
        let warning = document.querySelector('#register-birthday-warning');
        let currDate = new Date();
        let year = parseInt(inputs.year.value);

        if (!event.target.value.match(/[\d]{4}/)) {
            validInput(event.target, false);
            warning.innerHTML = "Please enter a valid date";
            warning.classList.remove('toggle-hide');
        }
        else if (year < currDate.getFullYear() - 120 || year > currDate.getFullYear()) {
            validInput(event.target, false);
            warning.innerHTML = "Please enter a valid birthday";
            warning.classList.remove('toggle-hide');
        }
        else {
            validInput(event.target, true);
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
        }
    });
}

window.onload = function() {
    const form = document.querySelector('.form-card form');
    const inputs = form.elements;
    registerValidate(form);

    form.onsubmit = function(event) {
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === '') {
                inputs[i].style.border = '2px solid red';
                event.preventDefault();
            }
        }
    }
}