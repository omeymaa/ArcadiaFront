const logoutBtn= document.getElementById("logout");
const tokenCookieName = "accesstoken";

logoutBtn.addEventListener("click", logout);

// Fonction de déconnexion
function logout() {
    eraseCookie(tokenCookieName);
    // Rediriger vers la page d'accueil ou une autre page après la déconnexion
    window.location.reload(); 
}

// Fonction pour définir le token dans le cookie
function setToken(token) {
    setCookie(tokenCookieName, token, 7); // Cookie valide pendant 7 jours
}

// Fonction pour récupérer le token depuis le cookie
function getToken() {
    return getCookie(tokenCookieName);
}

//
// Fonction pour définir un cookie
function setCookie(name,value,days) {    

    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Fonction pour récupérer la valeur d'un cookie 
function getCookie(name) {     
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Fonction pour supprimer un cookie
function eraseCookie(name) {      
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//
// Fonction pour vérifier si l'utilisateur est connecté
function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}

if(isConnected()) {
    alert("je suis connecté");
} else {
    alert("je ne suis pas connecté");

}