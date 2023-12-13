// index.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VB47ST_VnH9OgDEFyi5W-ejeIn0cr5Y",
  authDomain: "landing-page-test-283d8.firebaseapp.com",
  projectId: "landing-page-test-283d8",
  storageBucket: "landing-page-test-283d8.appspot.com",
  messagingSenderId: "501118264119",
  appId: "1:501118264119:web:f2980a3e4d6dae917b30b2",
  databaseURL: "https://landing-page-test-283d8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Your Firebase initialization code here
function writeUserData(phone, name, email, message) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log(phone, name, email, message);
  // initializeFirebase();

  set(ref(db, "users/" + phone), {
    custName: name,
    custEmail: email,
    custMessage: message,
  });
}

function submitForm() {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // firebase.database().ref("users/").child(phone, name, email, message).update({
  //   custName: name,
  //   custEmail: email,
  //   custMessage: message,
  // });

  // Call the writeUserData function
  // writeUserData(phone, name, email, message);

  // Optional: Reset the form
  document.getElementById("contactForm").reset();
}
  
writeUserData("888888", "shiri", "Zyli@yopmail.com", "Hello3");
