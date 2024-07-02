//Implémenter le JS de ma page
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const validationLogin = document.getElementById("validationLogin");


inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const EmailOk = validateEmail(inputEmail);
    const PasswordOk = validatePassword(inputPassword);

    if (EmailOk && PasswordOk) {
        validationLogin.disabled = false;
    } else {
        validationLogin.disabled = true;
        validationLogin.style.backgroundColor = 'hsl(213, 23%, 92%)';
        validationLogin.style.color = 'hsl(214, 71%, 24%)';
    }
}

function validateEmail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}