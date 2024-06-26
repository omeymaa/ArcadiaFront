import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/le-parc", "Le parc", "/pages/le-parc.html"),
    new Route("/les-animaux", "Les animaux", "/pages/les-animaux.html"),
        new Route("/la-savane", "La Savane", "/pages/savane.html"),
        new Route("/la-jungle", "La Jungle", "/pages/jungle.html"),
        new Route("/le-marais", "Le Marais", "/pages/marais.html"),
        new Route("/animal", "Nom animal", "/pages/animal.html"),
    new Route("/infos-pratiques", "Infos pratiques", "/pages/infos-pratiques.html"),
    new Route("/activites", "Activités", "/pages/activites.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";