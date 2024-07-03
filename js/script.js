//
// Gestion de la connexion
const tokenCookieName = "accesstoken";

function setToken(token){   // Placer le token en cookie
    setCookie(tokenCookieName, token, 7); // Connecté pendant 7 jours
}

function getToken(){
    return getCookie(tokenCookieName);
}

//
// Méthodes pour les cookies
function setCookie(name,value,days) {     // Placer un cookie

    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {     // Récuperer un cookie
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {       // Supprimer un cookie 
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//
// Savoir si on est connecté
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