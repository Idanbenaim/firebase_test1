const firebaseConfig = {
  apiKey: "AIzaSyC2VB47ST_VnH9OgDEFyi5W-ejeIn0cr5Y",
  authDomain: "landing-page-test-283d8.firebaseapp.com",
  projectId: "landing-page-test-283d8",
  storageBucket: "landing-page-test-283d8.appspot.com",
  messagingSenderId: "501118264119",
  appId: "1:501118264119:web:f2980a3e4d6dae917b30b2",
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


