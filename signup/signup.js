let emailRegex

function init() {
    emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
}




function signup() {
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("confirm-email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  console.log(email);
  console.log(confirmEmail);
  console.log(password);
  console.log(confirmPassword);
  if (email.match(emailRegex)) {
    console.log("email is valid");
    if(email === confirmEmail) {
        if(password.length > 0) {
            console.log("password is valid");
            if(password === confirmPassword) {
                login();
            }
        }
        else {
            console.log("password is not valid");
        }
    }
    else {
        console("email does not match")
    }
  } else {
    console.log("email is not valid");
  }
}
function login() {
    console.log("Account Created");
    location.replace("../login/login.html")
}


init();
signup();