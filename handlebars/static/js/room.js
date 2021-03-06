const bookingTotal = document.querySelector('.booking-total-section-wrapper');
const accommodationTotalPrice = document.querySelector('.accommodation-total .accommodation-total-price');
const feesTotalPrice = document.querySelector('.fees-total .fees-total-price');
const bookingPrice = document.querySelector('.booking-price');

function calcDiff(checkInStr, checkOutStr) {
    let checkInDate = new Date(checkInStr);
    let checkOutDate = new Date(checkOutStr);

    //Calculate the difference between the two dates
    if (checkInStr && checkOutStr) {
        let oneDay = 24 * 60 * 60 * 1000; 
        let diffDays = Math.round(Math.abs((checkInDate.getTime() - checkOutDate.getTime()) / (oneDay)));
        return diffDays;
    }
    else return null;
}

function updateTotals(numDays) {
    let accommodationTotal = numDays * bookingPrice.innerHTML;
    const checkOutWarning = document.querySelector('#checkout-warning');
    checkOutWarning.innerHTML = "Booking must be at least 1 day";

    if (numDays) {
        accommodationTotalPrice.innerHTML = accommodationTotal;
        feesTotalPrice.innerHTML = accommodationTotal;
        bookingTotal.classList.remove('toggle-hide');
    }
    else {
        bookingTotal.classList.add('toggle-hide');

        //Booking must be at least one day
        if (numDays === 0) checkOutWarning.classList.remove('toggle-hide');
        else checkOutWarning.classList.add('toggle-hide');
    }
}

window.onload = () => {
    const CHECK_IN = 0, CHECK_OUT = 1;
    const form = document.querySelector('.book-room-form form');
    const inputs = form.elements;
    let bookedDates = [];
    let diffDays;
    const checkInWarning = document.querySelector('#checkin-warning');
    const checkOutWarning = document.querySelector('#checkout-warning');
    checkInWarning.innerHTML = "Check in date cannot be after the checkout date";
    checkOutWarning.innerHTML = "Check out date cannot be before the check in date";

    //Check for blanks on blur
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', (event) => {
            if (inputs[i].value != "") {
                inputs[i].style.border = '';
            }
        });
    }

    //Guest cannot select check in date after checkout date
    inputs[CHECK_IN].addEventListener('input', (event) => {
        if (inputs[CHECK_IN].value > inputs[CHECK_OUT].value && inputs[CHECK_OUT].value != "") {
            inputs[CHECK_IN].value = "";
            bookedDates[CHECK_IN] = null;
            checkInWarning.classList.remove('toggle-hide');
        }
        else {
            bookedDates[CHECK_IN] = inputs[CHECK_IN].value;
            checkInWarning.classList.add('toggle-hide');
        }
    });

    //Checkout date cannot be before checkin date
    inputs[CHECK_OUT].addEventListener('input', (event) => {
        if (inputs[CHECK_OUT].value < inputs[CHECK_IN].value  && inputs[CHECK_IN].value != "") {
            inputs[CHECK_OUT].value = "";
            bookedDates[CHECK_OUT] = null;
            checkOutWarning.classList.remove('toggle-hide');
        }
        else {
            bookedDates[CHECK_OUT] = inputs[CHECK_OUT].value;
            checkOutWarning.classList.add('toggle-hide');
        }
    });

    //Calculate the difference between dates
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', (event) => {
            diffDays = calcDiff(bookedDates[CHECK_IN], bookedDates[CHECK_OUT])
            updateTotals(diffDays);
        });
    }

    form.onsubmit = (event) => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                inputs[i].style.border = '2px solid red';
                event.preventDefault();
            }
        }

        //Room must be booked for at least one day
        if (diffDays === 0) event.preventDefault();
        else {
            //Fields to form submission to be mailed server side
            //Num days
            let numDaysInput = document.createElement('input');
            numDaysInput.type = 'hidden';
            numDaysInput.name = 'numDays';
            numDaysInput.value = diffDays;
            form.appendChild(numDaysInput);

            //Total
            let totalInput = document.createElement('input');
            totalInput.type = 'hidden';
            totalInput.name = 'total';
            totalInput.value = feesTotalPrice.innerHTML;
            form.appendChild(totalInput);

            //Title
            let titleInput = document.createElement('input');
            titleInput.type = 'hidden';
            titleInput.name = 'title';
            titleInput.value = document.querySelector('.room-title').innerHTML;
            form.appendChild(titleInput);
        }
    };
};