var titleBook = document.getElementById('book-title');
// var author = document.getElementById('book-author');
// var pages = document.getElementById('book-pages');
// var status = document.getElementById('book-status');

var btnShowForm = document.getElementById('btnAdd');
var btnCloseForm = document.getElementById('cancelButton');
var btnSubmit = document.getElementById('submit');
var newBookForm = document.getElementById('entryForm');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADPTipmZZwOlPv4K3BxsAaWKNLBETeGvw",
    authDomain: "library-app-8a5e5.firebaseapp.com",
    databaseURL: "https://library-app-8a5e5.firebaseio.com",
    projectId: "library-app-8a5e5",
    storageBucket: "",
    messagingSenderId: "328450636923",
    appId: "1:328450636923:web:f1e51c2b44014e22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




// Shows entry form
btnShowForm.addEventListener('click', () => {
    newBookForm.style.visibility = 'visible';
    setTimeout(titleBook.focus(), 400)
})

// Closes entry form
btnCloseForm.addEventListener('click', () => {
    newBookForm.style.visibility = 'hidden';
})