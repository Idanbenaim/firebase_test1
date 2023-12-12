// index.js
// const { initializeApp } = require("firebase/app");
const { ref, set } = require("firebase/database");

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBiPqFUz91eYxiNIC4uWuN54GF_FrceFcg",
//   authDomain: "landing-page-w-contactus-admin.firebaseapp.com",
//   projectId: "landing-page-w-contactus-admin",
//   storageBucket: "landing-page-w-contactus-admin.appspot.com",
//   messagingSenderId: "541256368930",
//   appId: "1:541256368930:web:8251d843f359439fc71b7b",
//   databaseURL:
//     "https://landing-page-w-contactus-admin-default-rtdb.europe-west1.firebasedatabase.app",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();

// Your Firebase initialization code here
function writeUserData(phone, name, email, message) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(phone, name, email, message);
  const db = getDatabase();
  // initializeFirebase();

  set(ref(db, "users/" + phone), {
    custName: name,
    custEmail: email,
    custMessage: message,
  });
}
