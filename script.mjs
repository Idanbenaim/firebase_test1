// script.js
import { initializeApp } from "firebase/app";
import {getDatabase,ref,set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiPqFUz91eYxiNIC4uWuN54GF_FrceFcg",
  authDomain: "landing-page-w-contactus-admin.firebaseapp.com",
  projectId: "landing-page-w-contactus-admin",
  storageBucket: "landing-page-w-contactus-admin.appspot.com",
  messagingSenderId: "541256368930",
  appId: "1:541256368930:web:8251d843f359439fc71b7b",
  databaseURL:
    "https://landing-page-w-contactus-admin-default-rtdb.europe-west1.firebasedatabase.app",
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