// Filtres
function filtres(medias){
    const optionsFiltres = document.getElementById('pet-select');
    
    `${medias.map(function (media){
        optionsFiltres.innerHTML = 
        `<option value="${media.likes}" class="premier">Popularité</option>
        <option value="${media.date}" class="deuxieme">Date</option>
        <option value="${media.title}" class="troisieme">Titre</option>`
    }).join('')}
    `

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
    return(optionsFiltres);
};



    // Par popularité : quand je CLIQUE sur l'option popularité, AFFICHER les images de LA PLUS LIKé à la MOINS LIKé.
    // Par titre : quand je CLIQUE sur l'option titre, AFFICHER les images par ORDRE ALPHABETIQUE.
    // Par date : quand je CLIQUE sur l'option date, AFFICHER les images de la plus RECENTE à la plus ANCIENNE.


    // let numbers = ["20", "1", "4"];
    // // let likeAttribute = like.getAttribute('value');
    //     numbers.sort();
    //     console.log(numbers);
       
    
    // let string = ["salut", "sonia", "haha"];
    // // let likeAttribute = like.getAttribute('value');
    //     string.sort();
    //     console.log(string);





    
        // let likeFiltre = Array.from(document.querySelectorAll('option'));

        // likeFiltre.map(like => {
        //     let likeAttribute = like.getAttribute('value');
    
        //     like.addEventListener('click', function(){
        //         if(likeAttribute === "79"){
        //             console.log("la condition est remplie");
        //         }else(console.log("PROBLEME"));
        //     })
        // });








        // let likeFiltre = ["23", "9", "76"];

        // let map = likeFiltre.map(like => {
    
        //     return like
        // })
        // map.sort();
        // console.log(map);

        let likeFiltre = Array.from(document.querySelectorAll('option'));
        console.log(likeFiltre);
    
        let map = likeFiltre.map(like => {
            let likeAttribute = like.getAttribute('value');
            console.log(like);
    
                like.addEventListener("click", function(e){
                    console.log(e);
                    console.log(this);
                    if(likeAttribute === "b"){
                        console.log("condition ok")
                    }else(console.log("problème"))
                })
            return likeAttribute
        })
        map.sort();

