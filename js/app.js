const entryTitle = document.getElementById('book-title');

const btnShowForm = document.getElementById('btnAdd');
const btnCloseForm = document.getElementById('cancelButton');
const newBookForm = document.getElementById('entryForm');
const formContainer = document.querySelector('.addForm-container');
const main = document.querySelector('.container');

const openForm = e => {
    newBookForm.style.visibility = 'visible';
    main.classList.add('blur');
}

const closeForm = e => {
    newBookForm.style.visibility = 'hidden';
    main.classList.remove('blur');
}

btnShowForm.addEventListener('click', () => {
    openForm();
    setTimeout(entryTitle.focus(), 400)
})

btnCloseForm.addEventListener('click', () => {
    closeForm();
})

// Check validity of fields
document.onready = function () {
    document.querySelectorAll("input[required]").forEach(function (e) {
       e.required = true;
    });
  };