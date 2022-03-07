let roomId = null;

window.onload = () => {
    const roomListings = document.querySelector('.room-listings');
    const rooms = roomListings.childNodes;
    const editRoomPanel = document.querySelector('.edit-room');
    const form = document.querySelector('.edit-room form');
    const formInputs = form.elements;
    const closeForm = document.querySelector('.edit-room-head img');

    //Close edit form
    closeForm.addEventListener('click', () => {
        editRoomPanel.classList.add('toggle-hide');
        roomListings.style.gridTemplateColumns = "1fr 1fr 1fr";
    })

    //Click event listener for each room
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].addEventListener("click", () => {
            const request = new Request(`/room/${rooms[i].id}`, { method: 'POST' });

            fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((room) => {
                roomId = room._id;
                editRoomPanel.classList.remove('toggle-hide');
                roomListings.style.gridTemplateColumns = "1fr 1fr";
                formInputs.title.value = room.title;
                formInputs.price.value = room.price;
                formInputs.description.value = room.description;
                formInputs.location.value = room.location.toLowerCase();
            })
            .catch((err) => {
                console.log(err);
            });
        });
    }

    form.onsubmit = (event) => {
        //Check for blanks
        // -1 because the same image does not need to be uploaded
        console.log(formInputs)
        for (let i = 0; i < formInputs.length - 2; i++) {
            if (formInputs[i].value === '') {
                formInputs[i].style.border = '2px solid red';
                event.preventDefault();
            }
        }

        //Add id of room to post
        let idInput = document.createElement('input');
        idInput.type = 'hidden';
        idInput.name = 'id';
        idInput.value = roomId;
        form.appendChild(idInput);
    };
};