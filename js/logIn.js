var userEmailInput = document.getElementById('enterYourEmail');
var userPassInput = document.getElementById('enterYourPass');
var logIn = document.getElementById('logInBtn');
var wrongEmail = document.getElementById('wrongEmail')



infoList = [];
if (localStorage.getItem('startt') === null) {
    infoList = [];
} else {
    infoList = JSON.parse(localStorage.getItem('startt'));
    console.log(infoList);
}

function logInBtn() {
    if (checkLogin() === true) {
        window.location.href = "welcome.html";
    } else {
        wrongEmail.classList.remove("d-none")
    }
}

function checkLogin() {
    for (var i = 0; i < infoList.length; i++) {
        if (infoList[i].userEmail == userEmailInput.value && infoList[i].userPassword == userPassInput.value) {
            localStorage.setItem("userName", infoList[i].userName)
            return true
        }
    }
    return false
}



















/*userEmailInput.addEventListener("input" , EmailValidation)
function EmailValidation(){
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
}*/