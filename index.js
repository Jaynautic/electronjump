var signupSideButton = document.getElementById('signupSideButton');
var sideTitle = document.getElementById('sideTitle');
var sideCard = document.getElementById('cardSide');
var cardNucleus = document.getElementById('cardNucleus');
var sideCardInner = document.getElementById('sidecardinner');
var cardContainer = document.querySelector('.card-container');
var sideCardInner = document.querySelector('.side-card-inner');
var inputElectrons = document.getElementById('inputElectrons');


signupSideButton.addEventListener("click", switchSides);


function switchSides() {

    let numOfElectrons = document.getElementById('inputElectrons').value;

    // Creates Electrons and spaces them apart
    for (let i = 1; i < numOfElectrons + 1; i++) {

        var newElectron = document.createElement('div');
        newElectron.setAttribute('class', 'side-card-inner');

        let oneElectronX = 160*Math.cos((i-1)*(360/numOfElectrons)*0.0174533) + 135;
        let oneElectronY = 160*Math.sin((i-1)*(360/numOfElectrons)*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

        console.log(newElectron)

        sideCard.appendChild(newElectron);
    }

    let numOfNucleus = 4;

    // Creates nucleus
    for (let i = 0; i < numOfNucleus; i++) {

        var newElectron = document.createElement('div');
        newElectron.setAttribute('class', 'side-card-inner');

        let oneElectronX = 20*Math.cos((i-1)*(360/numOfNucleus)*0.0174533) + 135;
        let oneElectronY = 20*Math.sin((i-1)*(360/numOfNucleus)*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px) scale(1.5)`;

        console.log(newElectron)

        cardNucleus.appendChild(newElectron);
    }

    signupSideButton.style.visibility = 'hidden';
    inputElectrons.style.visibility = 'hidden';

    // Spins Electrons
    let id = null;
    let pos = 0;

    id = setInterval(frame, 10);

    function frame() {
        pos++;
        sideCard.style.transform = `rotate(${pos}deg)`;
        cardNucleus.style.transform = `rotate(-${pos/2}deg)`;
    };
};