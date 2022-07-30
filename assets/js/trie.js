// Commentaires pour retirer les erreurs à ignorer dans eslint
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Création du filtre
function createDropDown(){
	return document.getElementById('filtres').innerHTML = 
        `<ul role="button" aria-haspopup="listbox" aria-expanded id="select" class="test">
          <li role="listbox" class="selected">
            <option aria-activedescendant="" aria-selected="" aria-labelledby="" onclick="trie('popularite')" id="popularite">Popularité</option>
            <img id="arrow-filtre" src="assets/images/down-arrow.png" alt="icone menu filtres">
          </li>
          <li class="selected">
            <hr>
            <option aria-activedescendant aria-selected aria-labelledby onclick="trie('date')" id="date">Date</option>
          </li>
          <li class="selected">
            <hr>
            <option aria-activedescendant aria-selected aria-labelledby onclick="trie('titre')" id="titre">Titre</option>
          </li>
         </ul>
        `;
}

// Au clique, faire apparaître et disparaître le menu filtre
function toggleDropDown(conteneurFiltre){
	// Paramètre de la fonction: le contenant du filtre qui est un <button>
	const eltsSelect = Array.from(document.querySelectorAll('.selected'));
	// On ne récupère que les 2 premiers éléments
	eltsSelect.splice(0,1);
	const arrowFiltre = document.getElementById('arrow-filtre');

	// S'il contient la class 'active'
	if(conteneurFiltre.classList.contains('active')){
		// On parcours le tableau de li filtrés et on les met en display none
		eltsSelect.map(li => li.style.display = 'none');
		conteneurFiltre.classList.remove('active');
		arrowFiltre.style.transform = 'rotate(0deg)';
	}else{
		// On parcours le tableau de li filtrés et on les met en display block
		eltsSelect.map(li => li.style.display = 'block');
		conteneurFiltre.classList.add('active');
		arrowFiltre.style.transform = 'rotate(180deg)';
	}
}

// Tries du filtre
function trie(conteneurOption){
	// Paramètre de la fonction: contenu d'<option>
	// Garder et mettre en majuscule la première lettre de conteneurOption
	const toUpperCaseConteneurOption = conteneurOption.charAt(0).toUpperCase();
	document.getElementById('popularite').textContent = toUpperCaseConteneurOption + conteneurOption.slice(1);

	switch(conteneurOption){
	// Dans le cas où l'option popularité est selectionée:
	case 'popularite' : 
		// Trie des likes du plus grand au plus petit nombre
		allMedias.sort(function(a, b) {
			const titleA = a.likes, titleB = b.likes;
			return titleB - titleA;
		}); 
		// On sort du switch si la condition est remplie
		break;

	// Dans le cas où l'option date est selectionée:
	case 'date' : 
		// Trie des date du plus ancien au plus récent
		allMedias.sort(function(a, b) {
			const titleA = a.date, titleB = b.date;
			if (titleA < titleB) {
				return -1;
			} else if (titleA == titleB) {
				return 0;
			} else {
				return 1;
			}
		});
		break;

	// Dans le cas où l'option titre est selectionée:
	case 'titre' : 
		// Trie des titres par ordre alphabétique une fois qu'ils ont été mis en minuscule
		allMedias.sort(function(a, b) {
			const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
		break; 
   
	}
	createCardGallery(allMedias);
}