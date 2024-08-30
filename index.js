var signupSideButton = document.getElementById('signupSideButton');
var sideTitle = document.getElementById('sideTitle');
var sideCard1 = document.getElementById('cardSide1');
var sideCard2 = document.getElementById('cardSide2');
var sideCard3 = document.getElementById('cardSide3');
var cardNucleus = document.getElementById('cardNucleus');
var sideCardInner = document.getElementById('sidecardinner');
var cardContainer = document.querySelector('.card-container');
var sideCardInner = document.querySelector('.side-card-inner');
var inputElectrons = document.getElementById('inputElectrons');

signupSideButton.addEventListener("click", switchSides);

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && inputElectrons.value !== '') {
        switchSides();
    }
});


function switchSides() {

    let numOfElectrons = document.getElementById('inputElectrons').value;
    numOfElectrons = +numOfElectrons;
    console.log(numOfElectrons);

    // let numOfElectronsIndex = numOfElectrons + 1;
    // console.log(numOfElectronsIndex);

    if (numOfElectrons > 36) {
        document.getElementById('inputElectrons').value = '';
        document.getElementById('inputElectrons').placeholder = "Only up to 36!"
        return;
    } else {

    // Creates Electrons and spaces them apart
    for (let i = 0; i < numOfElectrons; i++) {

        // var newElectron = document.createElement('div');
        // newElectron.setAttribute('class', 'side-card-inner');

        // let oneElectronX;
        // let oneElectronY;

        if (i < 2) {
            var newElectron = document.createElement('div');
            newElectron.setAttribute('class', 'side-card-inner');

            let oneElectronX = 80*Math.cos((i)*(360/2)*0.0174533) + 135;
            let oneElectronY = 80*Math.sin((i)*(360/2)*0.0174533) + 135;

            newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

            console.log(newElectron)

            sideCard1.appendChild(newElectron);
        } else if (i < 8) {
            var newElectron = document.createElement('div');
            newElectron.setAttribute('class', 'side-card-inner');

            let oneElectronX = 160*Math.cos((i)*(360/(numOfElectrons-2))*0.0174533) + 135;
            let oneElectronY = 160*Math.sin((i)*(360/(numOfElectrons-2))*0.0174533) + 135;

            newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

            console.log(newElectron)

            sideCard2.appendChild(newElectron);
        } else {
            var newElectron = document.createElement('div');
            newElectron.setAttribute('class', 'side-card-inner');

            let oneElectronX = 200*Math.cos((i)*(360/(numOfElectrons-8))*0.0174533) + 135;
            let oneElectronY = 200*Math.sin((i)*(360/(numOfElectrons-8))*0.0174533) + 135;

            newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

            console.log(newElectron)

            sideCard3.appendChild(newElectron);
        }

        // let oneElectronX = 160*Math.cos((i)*(360/numOfElectrons)*0.0174533) + 135;
        // let oneElectronY = 160*Math.sin((i)*(360/numOfElectrons)*0.0174533) + 135;

        // newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

        // console.log(newElectron)

        // sideCard.appendChild(newElectron);
    }

    let numOfNucleus = numOfElectrons/2;

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
            sideCard1.style.transform = `rotate(${pos}deg)`;
            sideCard2.style.transform = `rotate(-${pos}deg)`;
            sideCard3.style.transform = `rotate(${pos}deg)`;
            cardNucleus.style.transform = `rotate(-${pos/2}deg)`;
        };

    };
};
