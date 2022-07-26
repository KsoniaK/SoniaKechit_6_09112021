/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Filtres
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

// au clique, faire apparaître et disparaître le menu filtre
function toggleDropDown(conteneurFiltre){
	const eltsSelect = Array.from(document.querySelectorAll('.selected'));
	eltsSelect.splice(0,1);

	const arrowFiltre = document.getElementById('arrow-filtre');

	if(conteneurFiltre.classList.contains('active')){
		eltsSelect.map(li => li.style.display = 'none');
		conteneurFiltre.classList.remove('active');
		arrowFiltre.style.transform = 'rotate(0deg)';
	}else{
		eltsSelect.map(li => li.style.display = 'block');
		conteneurFiltre.classList.add('active');
		arrowFiltre.style.transform = 'rotate(180deg)';
	}
}

function salut(){
	const optionFiltre = document.getElementById('popularite').textContent;
	// console.log(optionFiltre);
	optionFiltre.value = 'date';
	console.log('date');
}

// fonction filtres
function trie(conteneurFiltre){
	document.getElementById('popularite').textContent = conteneurFiltre;

	switch(conteneurFiltre){
	case 'popularite' : 
		allMedias.sort(function(a, b) {
			const titleA = a.likes, titleB = b.likes;
			return titleB - titleA;
		});
		// console.table(allMedias);
           
		break;
	case 'date' : 
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
		// console.table(allMedias);

		break;
	case 'titre' : 
		allMedias.sort(function(a, b) {
			const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
		// console.table(allMedias);
		break; 
   
	}
	createCardGallery(allMedias);
}