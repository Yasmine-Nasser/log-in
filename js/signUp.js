var userNameInput = document.getElementById("enterYourName")
var userEmailInput = document.getElementById('enterYourEmail');
var userPassInput = document.getElementById('enterYourPass');
var signUpBtn = document.getElementById('signIn');

var usersArray;
if (localStorage.getItem('startt') === null) {
    usersArray = []
} else {
    usersArray = JSON.parse(localStorage.getItem('startt'));
}
function pressToSignUp() {
    if(userNameValidation() == true && userEmailValidation() == true && userPassValidation() == true) { 
        var user = {
            userName : userNameInput.value,
            userEmail: userEmailInput.value,
            userPassword: userPassInput.value,
        }
        window.location.href ="login.html";
        usersArray.push(user);
        localStorage.setItem('startt', JSON.stringify(usersArray))
        console.log(usersArray);
    }
}

userNameInput.addEventListener("input", userNameValidation)
function userNameValidation() {
    var userNameRegex = /^[a-zA-Z]{4,}$/
    if (userNameRegex.test(userNameInput.value) == true) {
        userNameInput.classList.add("is-valid")
        userNameInput.classList.remove("is-invalid")
        return true

    } else {
        userNameInput.classList.add("is-invalid")
        userNameInput.classList.remove("is-valid")
        return false
    }
}

userEmailInput.addEventListener("input" , userEmailValidation)
function userEmailValidation(){
    var userEmailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/
    if (userEmailRegex.test(userEmailInput.value) == true) {
        userEmailInput.classList.add("is-valid")
        userEmailInput.classList.remove("is-invalid")
        return true
    } else{
        userEmailInput.classList.add("is-invalid")
        userEmailInput.classList.remove("is-valid")
        return false
    }
}

userPassInput.addEventListener("input" ,  userPassValidation)
function userPassValidation(){
    var userPassRegex = /^[a-zA-Z]{4,}$/
    if (userPassRegex.test(userPassInput.value) == true) {
        userPassInput.classList.add("is-valid")
        userPassInput.classList.remove("is-invalid")
        return true
    } else{
        userPassInput.classList.add("is-invalid")
        userPassInput.classList.remove("is-valid")
        return false
    }
}