// Header page photographer
function headerPhotographer(photographer){
    const headerPhotographer = document.getElementById('header-photographer');
    headerPhotographer.innerHTML = 
        `<div id="header-photographer_identite">
            <h1 class="titre-header">${photographer[0].name}</h1>
            <h2 class="ville-pays_header">${photographer[0].city + ", " + photographer[0].country}</h2>
            <p class="proverbe-header">${photographer[0].tagline}</p>
        </div>`
        return(headerPhotographer);
};
    
function headerContact(photographer){
    const headerContact = document.getElementById('header-contact');
    headerContact.innerHTML = 
        `<h2>Contactez-moi ${photographer[0].name}</h2>
         <img src="assets/images/close.svg" id="carrousel-close-contact" onclick="closeModal()"/>`
        return(headerContact);
};
