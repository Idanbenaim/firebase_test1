// script.js
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set} from "firebase/database";

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
function writeUserData(phone, name, email, message) {
  initializeFirebase();

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(phone, name, email, message);

  set(ref(db, "users/" + phone), {
    custName: name,
    custEmail: email,
    custMessage: message,
  });
}

// const app = initializeApp(firebaseConfig);
// const db = getDatabase();

// // Your Firebase initialization code here

// function writeUserData(phone, name, email, message) {

//   set(ref(db, "users/" + phone), {
//     custName: name,
//     custEmail: email,
//     custMessage: message,
//   });
// }

writeUserData("32354457", "noa2", "noa2@yopmail.com", "uniq2");


// function submitForm() {
//   const name = document.getElementById("name").value;
//   const phone = document.getElementById("phone").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   // Call the writeUserData function with form values
//   writeUserData(phone, name, email, message);
// }

// "type": "module"