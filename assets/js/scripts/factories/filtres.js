// Filtres
// Au clique, faire apparaître et disparaître le menu filtre
function openFiltre(containerFiltre){
    const eltsSelect = Array.from(document.querySelectorAll('.selected'));
    eltsSelect.splice(0,1);
    const arrowFiltre = document.getElementById('arrow-filtre');
    const popularite = document.getElementById('popularite');

    if(containerFiltre.classList.contains('active')){
        eltsSelect.map(li => li.style.display = "none");
        containerFiltre.classList.remove('active');
        arrowFiltre.style.transform = 'rotate(0deg)';
    }else{
        eltsSelect.map(li => li.style.display = "block");
        containerFiltre.classList.add('active');
        arrowFiltre.style.transform = 'rotate(180deg)';
    };
};

function dropDown(containerFiltre){
    if(containerFiltre.classList.contains('active')){
        openFiltre(containerFiltre);
    }else{
        openFiltre(containerFiltre);
    };
};

function filtre(critereFiltre){
    const popularite = document.getElementById('popularite');
    // const titre = document.getElementById('titre');
    const allArticle = document.querySelectorAll('.media');
    // console.log(allArticle);
    switch(critereFiltre){
        case 'popularite' : 
        if(document.querySelector('.filtre').classList.contains('active')){
            console.log('filtre popularité');
        }
            break;
        case 'titre' : 

            break;
        case 'date' : 
            console.log('filtre date');
}
// Par popularité : quand je CLIQUE sur la balise li ayant l'ID 'popularité', AFFICHER les images de LA PLUS LIKé à la MOINS LIKé.

        const likes = Array.from(document.querySelectorAll('.jaime-photo'));
        const likesTries = likes.map(like => Number(like.textContent));
        likesTries.sort((a , b) => b - a);
        // console.log(likesTries);
        // console.log(e.type);

// Par titre : quand je CLIQUE sur la balise li ayant l'ID 'titre', AFFICHER les images par ORDRE ALPHABETIQUE.
        const titresPhoto = Array.from(document.querySelectorAll('.titre-photo'));
        const titreTrie = titresPhoto.map(titre => titre.textContent);
        titreTrie.sort();
        // console.log(titreTrie);
};


// Par date : quand je CLIQUE sur la balise li ayant l'ID 'date', AFFICHER les images de la plus RECENTE à la plus ANCIENNE.
function dateFiltre(dates) {
    // console.log(dates);
    const date = document.getElementById('date');
        date.addEventListener('click', e =>{
            // console.log(dates);
    });
};






























// Exercices
    // let numbers = ["20", "1", "4"];
    // // let likeAttribute = like.getAttribute('value');
    //     numbers.sort();
    //     console.log(numbers);
       
    
    // let string = ["salut", "sonia", "haha"];
    // // let likeAttribute = like.getAttribute('value');
    //     string.sort();
    //     console.log(string);

            // let likeFiltre = ["23", "9", "76"];

        // let map = likeFiltre.map(like => {
    
        //     return like
        // })
        // map.sort();
        // console.log(map);


// Test
        // let likeFiltre = Array.from(document.querySelectorAll('option'));
        // // let premier = 

        // let map = likeFiltre.map(like => {
        //     let likeAttribute = like.getAttribute('value');
        //     // console.log(likeAttribute);

        //         like.addEventListener("click", function(){
        //             if(likeAttribute === "79"){
        //                 console.log("la condition est remplie");
        //             }else(console.log("PROBLEME"));
        //         })
        //     return likeAttribute
        // })
        // map.sort();
        // console.log(map);



        // let likeFiltre = Array.from(document.querySelectorAll('option'));

        // likeFiltre.map(like => {
        //     let likeAttribute = like.getAttribute('value');
    
        //     like.addEventListener('click', function(){
        //         if(likeAttribute === "79"){
        //             console.log("la condition est remplie");
        //         }else(console.log("PROBLEME"));
        //     })
        // });


        // let likeFiltre = Array.from(document.querySelectorAll('option'));
        // // console.log(likeFiltre);
    
        // let map = likeFiltre.map(like => {
        //     let likeAttribute = like.getAttribute('value');
        //     console.log(like);
    
        //         like.addEventListener("click", function(e){
        //             console.log(e);
        //             console.log(this);
        //             if(likeAttribute === "b"){
        //                 console.log("condition ok")
        //             }else(console.log("problème"))
        //         })
        //     return likeAttribute
        // })
        // map.sort();

