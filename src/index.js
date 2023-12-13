// index.js
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VB47ST_VnH9OgDEFyi5W-ejeIn0cr5Y",
  authDomain: "landing-page-test-283d8.firebaseapp.com",
  projectId: "landing-page-test-283d8",
  storageBucket: "landing-page-test-283d8.appspot.com",
  messagingSenderId: "501118264119",
  appId: "1:501118264119:web:f2980a3e4d6dae917b30b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase();

// Your Firebase initialization code here
function writeUserData(phone, name, email, message) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(phone, name, email, message);
  const db = getDatabase();

    set(ref(db, "users/" + phone), {
        custName: name,
        custEmail: email,
        custMessage: message,
    });
}

// function submitForm() {
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Call the writeUserData function with form values
//     writeUserData(phone, name, email, message);
// }


// writeUserData("2324556", "Nilli", "Nilli@yopmail.com", "ByeBye");

// function writeUserData(phone, name, email, message) {
//   const db = getDatabase();

//   set(ref(db, "users/" + phone), {
//     custName: name,
//     custEmail: email,
//     // custPhone: phone,
//     custMessage: message,
//   });
// }


//////////////////Template////////////////
// const db = getDatabase();

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();

//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
// }

// writeUserData("1", "1234566789", "joebishop@yopmail.com", "Hello World");

/////////////////////////////////////////////

// function writeUserData(name, phone, email, message) {
//     //   const db = getDatabase();
//     console.log(writeUserData);
//   const newCustomerRef = push(ref(db, "custInfo")); // Generate a new unique key for the customer

//   set(newCustomerRef, {
//     custName: name,
//     custEmail: email,
//     custPhone: phone,
//     custMessage: message,
//     // regDate: serverTimestamp(),
//   });
// }

// Listen for form submission
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get form values
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     // Call the function to write data to Firebase
//       writeUserData(name, phone, email, message);
//     //   console.log(writeUserData);

//     // Optionally, you can add logic here to show a success message or redirect the user to a thank you page
//   });

