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
    const modal = document.getElementById("contact_modal");
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Afficher la valeur dans la console
    if(prenom == "" || nom == "" || email == "" || message == ""){
        alert("Merci de remplir tous les champs du formulaire");
    }else{
        console.log("Prénom:" + prenom + " Nom:" + nom + " Email:" + email + " Message:" + message);
        modal.style.display = "none";
        document.forms[0].reset()
    }
}

