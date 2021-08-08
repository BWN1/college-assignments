function validateRoom(form) {
    const inputs = form.elements;

    for (let i = 0; i < inputs.length; i++) {
        //Check for blanks on blur
        inputs[i].addEventListener('blur', (event) => {
            if (inputs[i].value === "")
                inputs[i].style.border = '2px solid red';
            else inputs[i].setAttribute('style', '');
        });
    }

    //Remove non number from price input
    inputs.price.addEventListener('input', (event) => {
        if (inputs.price.value.match(/[^\d+$\.]/)) {
            inputs.price.value = inputs.price.value.substr(0, inputs.price.value.length - 1);
        }
    });
}

window.onload = () => {
    const form = document.querySelector('form');
    const inputs = form.elements;

    //Validate input
    validateRoom(form);

    //Check for blanks and prevent submission
    form.onsubmit = (event) => {
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value === '') {
                inputs[i].style.border = '2px solid red';
                event.preventDefault();
            }
        }
    }
}