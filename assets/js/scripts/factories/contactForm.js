// ouverture / fermeture formulaire contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// on affiche dans la console les données renseignées par l'utilisateur à la soumission du formulaire
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // Afficher la valeur dans la console
    console.log("Prénom:" + prenom + " Nom:" + nom + " Email:" + email + " Message:" + message);
}

