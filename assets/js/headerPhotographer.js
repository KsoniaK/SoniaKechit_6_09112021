// Header page photographer
function headerPhotographer(photographer){
    const headerPhotographer = document.getElementById('header-photographer');
    const headerContact = document.getElementById('header-contact');

    headerPhotographer.innerHTML = 
        `<div id="header-photographer_identite">
            <h1 class="titre-header">${photographer.name}</h1>
            <h2 class="ville-pays_header">${photographer.city + ", " + photographer.country}</h2>
            <p class="proverbe-header">${photographer.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <div>
            <img class="photo-header" src="/assets/images/photos/Photographers_ID_Photos/${photographer.portrait}" alt="${photographer.name}"/>
        </div>`
        
    headerContact.innerHTML = 
        `<h2>Contactez-moi <br> ${photographer.name}</h2>
         <img src="assets/images/close.svg" id="carrousel-close-contact" onclick="closeModal()" alt="${photographer.name}"/>`

        return(headerPhotographer, headerContact);
};



