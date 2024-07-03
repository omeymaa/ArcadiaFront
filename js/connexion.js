//Vérification des champs
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
        validationLogin.style.backgroundColor = '';
        validationLogin.style.color = '';
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

//
// Connexion/Déconnexion
validationLogin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Appeler l'API pour verifier les credentials en BDD
    if(inputEmail.value == "test@mail.Fr" && inputPassword.value == "Azerty69!") {
        alert("Vous êtes connecté");
        
        // Récuperer le token
        const token = "mljdsoifemiofmejfezoijmozgjgjremkspâ^zflkdshdi";

        // Placer le token ci-dessus en cookies

        window.location.replace("/");
    } else {
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
        validationLogin.classList.add("is-invalid");

    }
}