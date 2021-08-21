function saveData(){
var name = document.getElementById("name");
var roll= document.getElementById("roll");

var key = firebase.database().ref("student").push().key;
student ={
    name : name.value,
    roll : roll.value,
    key : key
}
firebase.database().ref("student/" + key).set(student)
console.log(student)
}
 

function signup(){
    let email = document.getElementById("email")
    let pass = document.getElementById("password")
   
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    window.location = "login.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });
}


function login(){
    let lemail = document.getElementById("login-email")
    let lpass = document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(lemail.value, lpass.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("successfully login")
    console.log(user);
    window.location= "index.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

}

function signout(){
    firebase.auth().signOut().then(() => {
        window.location = "login.html"
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}