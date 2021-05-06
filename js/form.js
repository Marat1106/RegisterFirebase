  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCkmhNObcQfKc4JEBJXg0EE8JRg7SC3K8w",
    authDomain: "identificationsystemfirebase.firebaseapp.com",
    projectId: "identificationsystemfirebase",
    storageBucket: "identificationsystemfirebase.appspot.com",
    messagingSenderId: "297484725808",
    appId: "1:297484725808:web:2da662ce618baebc3f07f5",
    measurementId: "G-ES4XR6Q1M4"
  };
  firebase.initializeApp(firebaseConfig);

  
const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password =document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));

      alert("Signned Up");
  }

  function login(){
var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;



firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
window.alert("Error : " + errorMessage);


// ..
});
  }
  function signOut(){
    auth.signOut();
    alert("OK");
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;

    }else{
      alert("No active user ");
  }

  });