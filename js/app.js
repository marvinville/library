let title = document.getElementById('book-title');
let author = document.getElementById('book-author');
let pages = document.getElementById('book-pages');
let status = document.getElementById('book-status');
var tableBody = document.querySelector('#tbody');

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

// Retrieve data from Firebase
var ref = firebase.database().ref('Book');

ref.on("child_added", function(snapshot) {
  snapshot.forEach(function(child) {
    // displays the keys and values 
    console.log(child.key + ': ' + child.val());

    // var childData = child.key;
    var bookTitle = child.val().title; // prints undefined
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = bookTitle;
    tr.appendChild(td);
    tableBody.appendChild(tr);
  });
});


// Book Inputs reference
let bookInput = firebase.database().ref('Book').push();

let addBook = () => {
    bookInput.set({
        title: title.value,
        author: author.value,
        pages: pages.value,
        status: status.value
    });
}

btnSubmit.addEventListener('click', () => {
    addBook();
});

// Shows entry form
btnShowForm.addEventListener('click', () => {
    newBookForm.style.visibility = 'visible';
    // setTimeout(title.focus, 400)
})

// Closes entry form
btnCloseForm.addEventListener('click', () => {
    newBookForm.style.visibility = 'hidden';
})