var home = document.getElementById ('home');
var userName = document.getElementById ('userName');


userName.innerHTML = `Welcome ${localStorage.getItem("userName")}`

function logOut() {
    window.location.href = "signUp.html";
}

