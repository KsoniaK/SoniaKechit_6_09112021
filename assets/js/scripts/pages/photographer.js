let url = new URLSearchParams(window.location.search)
let idUrl = url.get("id");

async function getMedia() {
    // méthode fecth sans async et await
    return fetch("./assets/data/photographers.json")
    .then(response => response.json())
    .then(response2 => {
        // console.log(response2);
        return response2;
    });
}

async function displayDataMedia(medias, photographer) {
    const mediaSection = document.querySelector(".media_profil");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
        // mediaSection.innerHTML = mediaCardDOM;
    });
};

async function initMedia() {
    const { medias, photographers } = await getMedia();

    let allMedias = medias.filter(medi => Number(idUrl) === medi.photographerId)
    let photographer = photographers.filter(photograph => Number(idUrl) === photograph.id)

    // Version moins "comprimée"
    // let tableau = media.filter(medi =>{
    //     if(Number(idUrl) === medi.photographerId){
    //         return medi
    //     }
    // })
    
     displayDataMedia(allMedias, photographer);
};
initMedia();

// -------------------------------------------------------------
// Exemples:

// Map:
//  let tableFruits = ['papate', 'comombre', 'kiwi'];

//  tableFruits.map(fruit => console.log(fruit))

//     let res = photographers.map(photographe => {
//         if (Number(idUrl) === photographe.id) {
//          reuslt = photographe;  
//         }
//     } )
// console.log(res);

// --------------------------------------------------------------

// let elevesMatiere = {
//     name: 'sarah',
//     maths: [12,8,17,6],
//     français: [12,8,17,6]
// }


// function sommeNotesMatiere(params) {
//     const all = params.maths.concat(params.français);
//     let somme = 0;

//     for( let i = 0; i < all.length ; i++){
//         somme = somme + all[i];
//     }

//      calculeMoyenne(somme, 2);

//    // console.log(presentationMoyenne(elevesMatiere.name , calculeMoyenne(somme, 2)));
    

// }
// sommeNotesMatiere(elevesMatiere)



// function calculeMoyenne(sommeNotes, nbrMatiere) {
//     let moyenne =  sommeNotes / nbrMatiere;
//     // console.log(presentationMoyenne(elevesMatiere.name ,moyenne));
// }




// function presentationMoyenne(name , moyenne) {
//     return `${name} à une moyenne de ${moyenne}`;
// }


// ----------------------------------------------------
// EXERCICES

// let eleves = [
//     {
//         name: "soso",
//         age: 31
//     },
//     {
//         name: "sarah",
//         age: 26
//     }
// ];
// // console.log(eleves);
// eleves.forEach(eleve => {
//     // console.log(eleve.name);
// })


// let multimedia = [
//     {
//         "id": 8520927,
//         "photographerId": 82,
//         "title": "Fashion Urban Jungle",
//         "image": "Fashion_Urban_Jungle.jpg",
//         "likes": 11,
//         "date": "2011-11-06",
//         "price": 55
//       },
//       {
//         "id": 2534342,
//         "photographerId": 243,
//         "title": "Seaside Wedding",
//         "image": "Event_SeasideWedding.jpg",
//         "likes": 25,
//         "date": "2019-06-21",
//         "price": 45
//     },
//     {
//         "id": 65235234,
//         "photographerId": 243,
//         "title": "Boulder Wedding",
//         "image": "Event_PintoWedding.jpg",
//         "likes": 52,
//         "date": "2019-06-25",
//         "price": 45
//     },
//     {
//         "id": 23523434,
//         "photographerId": 243,
//         "title": "Benevides Wedding",
//         "image": "Event_BenevidesWedding.jpg",
//         "likes": 77,
//         "date": "2019-06-28",
//         "price": 45
//     },
//     {
//         "id": 5234343,
//         "photographerId": 243,
//         "video": "Animals_Wild_Horses_in_the_mountains.mp4",
//         "likes": 142,
//         "date": "2019-08-23",
//         "price": 60
//       },
//     {
//         "id": 95234343,
//         "photographerId": 243,
//         "title": "Rainbow Bird",
//         "image": "Animals_Rainbow.jpg",
//         "likes": 59,
//         "date": "2019-07-02",
//         "price": 60
//     },

//     {
//         "id": 52343416,
//         "photographerId": 195,
//         "title": "Japanese Tower, Kyoto",
//         "image": "Travel_Tower.jpg",
//         "likes": 25,
//         "date": "2019-04-03",
//         "price": 60
//     },
//     {
//         "id": 2523434,
//         "photographerId": 195,
//         "title": "Senset on Canals, Venice",
//         "image": "Travel_SunsetonCanals.jpg",
//         "likes": 53,
//         "date": "2019-05-06",
//         "price": 60
//     },
//     {
//         "id": 95293534,
//         "photographerId": 195,
//         "title": "Mountain and Lake",
//         "image": "Travel_OpenMountain.jpg",
//         "likes": 33,
//         "date": "2019-05-12",
//         "price": 60
//     },
//     {
//         "id": 356234343,
//         "photographerId": 195,
//         "title": "City Bike and Stair, Paris",
//         "image": "Travel_Bike_and_Stair.jpg",
//         "likes": 53,
//         "date": "2019-06-20",
//         "price": 60
//     },
//     {
//         "id": 235234343,
//         "photographerId": 195,
//         "title": "Adventure Door, India",
//         "image": "Travel_Adventure_Door.jpg",
//         "likes": 63,
//         "date": "2019-06-26",
//         "price": 60
//     },
//     {
//         "id": 6234234343,
//         "photographerId": 195,
//         "title": "Contrast, St Petersburg",
//         "image": "Architecture_Contrast.jpg",
//         "likes": 52,
//         "date": "2019-06-30",
//         "price": 60
//     },
//     {
//         "id": 6525666253,
//         "photographerId": 195,
//         "title": "On a Hill, Tibet",
//         "image": "Architecture_On_a_hill.jpg",
//         "likes": 63,
//         "date": "2019-07-20",
//         "price": 60
//     },
//     {
//         "id": 98252523433,
//         "photographerId": 195,
//         "title": "Leaning Tower, Pisa",
//         "image": "Architecture_Dome.jpg",
//         "likes": 88,
//         "date": "2020-01-05",
//         "price": 60
//     },
//     {
//         "id": 9259398453,
//         "photographerId": 195,
//         "video": "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
//         "likes": 57,
//         "date": "2020-01-20",
//         "price": 65
//       },
//     {
//         "id": 3523523534,
//         "photographerId": 195,
//         "title": "Corner Building and Blue Sky",
//         "image": "Architecture_Corner_Room.jpg",
//         "likes": 54,
//         "date": "2020-05-05",
//         "price": 60
//     },
//     {
//         "id": 952343423,
//         "photographerId": 930,
//         "video": "Sport_Tricks_in_the_air.mp4",
//         "likes": 150,
//         "date": "2018-02-30",
//         "price": 70
//       },
// ]

// // console.log(multimedia[]);

// let fruits = ['pommes', 'fraise', 'kiwi', 'fraise'];
//un variable resultat est un tableau 
// let resulta;
//onsole.log(fruits[2]);
// console.log(fruits[1]);
// console.log(fruits);

// function recup (mareponse){
//     if(mareponse.length === 2){
//         console.log('felicitation sonia tu es exceptionnelle !!!');
//     }
//     else{
//         console.log('try again !!! la réponse contient : ', mareponse.length);
//     }
// }


// let resultat = [];
// for(let i = 0; i < fruits.length; i++){
//     if("fraise" === fruits[i]){
//         // console.log(fruits[i]);
//         resultat.push(fruits[i]);
//     }
// }
// recup(resultat)

// for(let index = 0 ; index < fruits.length; index++){
//     // console.log(fruits[index]);
//     if('fraise' === fruits[index]){
//         // console.log(fruits[index]);
//         let resulta = [];
//         resulta.push(fruits[index]);
//         resulta = fruits[index];
//     }
// };

// console.log(resulta);


// let numbers = [1,1,3,4,5,1];

// let resultat = [];
// for(let i = 0 ; i< numbers.length ; i++){
//     // console.log(numbers[i]);
//     if( numbers[i] === 1){
//         resultat.push(numbers[i]);
//     }
// }
// console.log(resultat);

 //destructuring  tableau
 //let tab = [ 'marc', 'sonia', 'paul'];
// const [,, b] = tab;
 //console.log(premier);
 //console.log(b);

// destructuring objet

// const user = {
//     prenom: 'sabrina',
//     age: 30,
// }
// const {prenom} = user;
// console.log(prenom);