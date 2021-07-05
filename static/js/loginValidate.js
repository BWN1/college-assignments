function validateForm(form) {
    let valid = false;
    const inputs = form.elements;

    inputs.email.addEventListener('blur', (event) => {
        let warning = document.querySelector('#login-email-warning');
        if (event.target.value == '') {
            warning.innerHTML = "Please enter your email";
            warning.classList.remove('toggle-hide');
            valid = false;
        }
        else {
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
            valid = true;
        }
    });

    inputs.password.addEventListener('blur', (event) => {
        let warning = document.querySelector('#login-password-warning');
        if (event.target.value == '') {
            warning.innerHTML = "Please enter your password";
            warning.classList.remove('toggle-hide');
            valid = false;
        }
        else {
            warning.innerHTML = "";
            warning.classList.add('toggle-hide');
            valid = true;
        }
    });

    return valid;
}

window.onload = function() {
    const form = document.querySelector('.form-card form');
    validateForm(form);
}