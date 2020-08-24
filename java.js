let form = document.getElementsByTagName("form")[0];
let statsUsername = document.querySelector(".statusMessage.username")
let statspassword = document.querySelector(".statusMessage.password")

form.addEventListener("submit", function(event){
    event.preventDefault();

    let status = true;

    statsUsername.innerText = "";

    if (form.username.value == "") {
        statsUsername.innerText = "du skal udfylde username";
        status = false;
    }
    
    
    statspassword.innerText = "";
    
    if (form.password.value == "") {
        statspassword.innerText = "du skal udfylde password";
        status = false;
    }

    if (status == false) {
        return
    }

    fetch("login.php")
});