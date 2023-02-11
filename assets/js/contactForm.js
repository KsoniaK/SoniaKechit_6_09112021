// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const btnClose = document.getElementById('contact_modal');
const modal = document.getElementById('contact_modal');
const header = document.getElementById('header-photographe');
const main = document.getElementById('main');

// Ouverture formulaire contact
function displayModal() {
	modal.style.display = 'block';
	modal.removeAttribute = ('aria-hidden');
	modal.setAttribute = ('aria-hidden', 'false');
	header.setAttribute = ('aria-hidden', 'true');
	main.setAttribute = ('aria-hidden', 'true');
	// prenom.focus();
	// btnClose.focus();
	modal.focus();
}

// Fermeture formulaire contact
function closeModal() {
	btnClose.style.display = 'none';
}

// On affiche dans la console les données renseignées par l'utilisateur à la soumission du formulaire
function getValue() {
	// Sélectionner l'élément input et récupérer sa valeur
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
		modal.removeAttribute = ('aria-hidden');
		modal.setAttribute = ('aria-hidden', 'true');
		header.setAttribute = ('aria-hidden', 'false');
		main.setAttribute = ('aria-hidden', 'false');
		// Vider formulaire
		document.forms[0].reset();
	}
}