// Open Info modal
const openModalInfo = document.querySelector('#eu-map-info-container');

function infoModal() {
    // Flag
    let countryflag = document.querySelector("#eu-info-data-flag");
    countryflag.innerHTML = '<img src="img/' + datosPais.flag + '.svg"/>';
    // country
    let h5Pais = document.querySelector("#eu-info-data-country");
    h5Pais.innerHTML = datosPais.country;
    // Organization
    let h6Organization = document.querySelector("#eu-info-data-organization");
    h6Organization.innerHTML = datosPais.organization;
    // Address
    let orgAddress = document.querySelector("#eu-info-data-address");
    orgAddress.innerHTML = datosPais.address;
    // Phone
    let orgPhone = document.querySelector("#eu-info-data-Phone");
    orgPhone.innerHTML = datosPais.phone;
    // Contact Person
    let orgContact = document.querySelector("#eu-info-data-Contact");
    orgContact.innerHTML = datosPais.contactPerson;
    // Email
    let orgEmail = document.querySelector("#eu-info-data-Email");
    orgEmail.innerHTML = datosPais.email;

    openModalInfo.setAttribute('style', 'display: flex');
}

// Close Info modal
const closeModalInfo = document.querySelector('#eu-map-info-container');
const clickButtonClose = document.querySelector('.eu-map-info-close')
clickButtonClose.onclick = () => {
    closeModalInfo.setAttribute('style', 'display: none');
}

// Countries

let datosPais = pins[0];

// 0. Australia
const openAustralia = document.querySelector('#pinAustralia')
openAustralia.onclick = () => {
    datosPais = pins[0];
    infoModal();
}
// 1. Spain
const openSpain = document.querySelector('#pinSpain')
openSpain.onclick = () => {
    datosPais = pins[1];
    infoModal();
}
// 2. France
const openFrance = document.querySelector('#pinFrance')
openFrance.onclick = () => {
    datosPais = pins[2];
    infoModal();
}

// 3. Germany
const openGermany = document.querySelector('#pinGermany')
openGermany.onclick = () => {
    datosPais = pins[3];
    infoModal();
}
// 4. USA
const openUsa = document.querySelector('#pinUsa')
openUsa.onclick = () => {
    datosPais = pins[4];
    infoModal();
}
// 5. China
const openChina = document.querySelector('#pinChina')
openChina.onclick = () => {
    datosPais = pins[5];
    infoModal();
}
// 6. Mexico
const openMexico = document.querySelector('#pinMexico')
openMexico.onclick = () => {
    datosPais = pins[6];
    infoModal();
}
// 7. Brasil
const openBrasil = document.querySelector('#pinBrasil')
openBrasil.onclick = () => {
    datosPais = pins[7];
    infoModal();
}
// 8. Chile
const openChile = document.querySelector('#pinChile')
openChile.onclick = () => {
    datosPais = pins[8];
    infoModal();
}
// 9. Argentina
const openArgentina = document.querySelector('#pinArgentina')
openArgentina.onclick = () => {
    datosPais = pins[9];
    infoModal();
}
// 10. Egypt
const openEgypt = document.querySelector('#pinEgypt')
openEgypt.onclick = () => {
    datosPais = pins[10];
    infoModal();
}
// 11. SouthKorea
const openSouthKorea = document.querySelector('#pinSouthKorea')
openSouthKorea.onclick = () => {
    datosPais = pins[11];
    infoModal();
}
// 12. Japan
const openJapan = document.querySelector('#pinJapan')
openJapan.onclick = () => {
    datosPais = pins[12];
    infoModal();
}
// 13. Filipinas
const openFilipinas = document.querySelector('#pinFilipinas')
openFilipinas.onclick = () => {
    datosPais = pins[13];
    infoModal();
}
// 14. Vietnam
const openVietnam = document.querySelector('#pinVietnam')
openVietnam.onclick = () => {
    datosPais = pins[14];
    infoModal();
}
// 15. Thailand
const openThailand = document.querySelector('#pinThailand')
openThailand.onclick = () => {
    datosPais = pins[15];
    infoModal();
}
// 16. Malasia
const openMalasia = document.querySelector('#pinMalasia')
openMalasia.onclick = () => {
    datosPais = pins[16];
    infoModal();
}
// 17. India
const openIndia = document.querySelector('#pinIndia')
openIndia.onclick = () => {
    datosPais = pins[17];
    infoModal();
}
// 18. Taiwan
const openTaiwan = document.querySelector('#pinTaiwan')
openTaiwan.onclick = () => {
    datosPais = pins[18];
    infoModal();
}
// 19. SouthAfrica
const openSouthAfrica = document.querySelector('#pinSouthAfrica')
openSouthAfrica.onclick = () => {
    datosPais = pins[19];
    infoModal();
}




