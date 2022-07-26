/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let multimedias;

async function getMultiMedias() {
	// méthode fecth sans async et await
	return fetch('./assets/data/photographers.json')
		.then(response => response.json())
		.then(response2 => {
			return response2;
		});
}

const serviceStart = async () => {
	multimedias = await getMultiMedias();
	init();
}; 
serviceStart();


