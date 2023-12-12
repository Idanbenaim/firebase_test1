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


// initialize firebase
firebaseConfig.initializeApp(firebaseConfig);

// reference database
let contactFormDB = firebase.database().ref("contactForm");

// listed to the contact form. on submit, call the submitForm method
document.getElementById("contactForm").addEventListener(submit, submitForm);

function submitForm(e) {
  e.preventDefault();

  let phone = getElementVal("phone");
  let name = getElementVal("name");
  let email = getElementVal("email");
  let message = getElementVal("message");

  console.log(phone, name, email, message);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


