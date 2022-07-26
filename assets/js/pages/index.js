/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function init() {
	const photographersSection = document.querySelector('.photographer_section');
	multimedias.photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

