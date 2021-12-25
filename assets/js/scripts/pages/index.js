    async function getPhotographers() {
        // méthode fecth sans async et await
        // let result;
       return fetch("./assets/data/photographers.json")
        .then(response => response.json())
        .then(response2 => {
            return response2;
        });
    }

   async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };
    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    init();
// let me = {
//     prenom: 'sososo',
//     gateauPreferer: 'alll, tous si cest sucrer',
//     hobbie: 'javascript'
// }

// let getphotos = {
//     photographers: 'sososo',
//     media: 'javascript'
// }

// const { photographers  } = getphotos;
// console.log(photographers);
// let { gateauPreferer , hobbie } = me;
// console.log(gateauPreferer, hobbie);


//  let moi = ['soso', 'sonia', 'Wouaaa', 'elle est amazing'];
//  const monPrenom  =  moi[0];
//  const [,,, sonia] = moi;
  //0console.log(moi[1]);
  //console.log(sonia);
//     const months = ['Jan', 'March', 'April', 'June'];
  
//     function moyenne(a, b){
//        let c = a+b;
//         let moyen = c/2;
//         return moyen;
//         // console.log(c);
//         // console.log(moyen);
//         }
//     // console.log(moyenne(10,10));
//     // months.forEach(function parcourirTable(mois){
//     //     return console.table(mois);
//     // });
    
//     // callback appeler automatiquement pas besoin de nom 
//     let test  = months.forEach(function(mois){
//         // return console.table(mois);
//     });
// // a la place du mot function => 
//     months.forEach((mois) => {
//         // return console.log(mois);
//     });
// // quand tu as un seul param pas besoin de parenthese
//     months.forEach(mois => {
//         // return console.log(mois);
//     });  
// // sil il ya une seul instruction on met sur une ligne
//     // months.forEach(mois => { return console.log(mois);});

//     // quant une seul instrition pas besoin du return  
//     // months.forEach(mois => {console.log(mois);});
    
//     // quand il y a  une seul ligne pas besoin d'accollade
//     // months.forEach(mois => console.log(mois));
    
    
//     months.forEach(mois => {
//         // console.log(mois)
//     });  

//    // map filter reduce
