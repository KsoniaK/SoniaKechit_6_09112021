// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Ouverture formulaire contact
function displayModal() {
	document.getElementById('contact_modal').style.display = 'block';
}

// Fermeture formulaire contact
function closeModal() {
	document.getElementById('contact_modal').style.display = 'none';
}

// On affiche dans la console les données renseignées par l'utilisateur à la soumission du formulaire
function getValue() {
	// Sélectionner l'élément input et récupérer sa valeur
	const modal = document.getElementById('contact_modal');
	const prenom = document.getElementById('prenom').value;
	const nom = document.getElementById('nom').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

	// Afficher la valeur dans la console
	if(prenom == '' || nom == '' || email == '' || message == ''){
		alert('Merci de remplir tous les champs du formulaire');
	}else{
		console.log('Prénom:' + prenom + ' Nom:' + nom + ' Email:' + email + ' Message:' + message);
		modal.style.display = 'none';
		// Vider formulaire
		document.forms[0].reset();
	}
}

