var mainGame = document.getElementById('mainGame');
var atomContainer = document.getElementById('atomContainer');
var thisScore;
var newPosY1 = -180;
var newPosY2 = 180;
var newPosY3 = 540;
var newPosY4 = -540;

let posY = [newPosY1, newPosY2, newPosY3, newPosY4];

let mainPosY = 0;
let currentScore = 0;


createNewAtom(1);
createNewAtom(2);
createNewAtom(3);
createNewAtom(4);


mainGame.addEventListener("click", tapScreen);
mainGame.addEventListener("touchend", tapScreen);

function tapScreen() {
    mainPosY = mainPosY + 350;
    atomContainer.style.transform = `translate(0px, ${mainPosY}px)`;

    currentScore++;

    thisScore.innerHTML = `${currentScore}`;
};


function createNewAtom(atomPosition) {

    let atomNum = atomPosition;

    // Creates New Atom
        var newAtom = document.createElement('div');
        newAtom.setAttribute('class', 'atom');
        newAtom.setAttribute('id', `atom${atomNum}`);

        let oneAtomX = (120)*(-1)**(+atomPosition);
        let oneAtomY = (posY[atomPosition - 1]);

        newAtom.style.transform = `translate(${oneAtomX}px, ${oneAtomY}px)`;

        atomContainer.appendChild(newAtom);

        let thisAtom = document.getElementById(`atom${atomNum}`);

    // Creates Valence Ring Shell
        var newValenceRingShell = document.createElement('div');
        newValenceRingShell.setAttribute('class', 'valence-shell');
        newValenceRingShell.setAttribute('id', `valenceRingShell${atomNum}`);

        thisAtom.appendChild(newValenceRingShell);

        let thisValenceRingShell = document.getElementById(`valenceRingShell${atomNum}`);

    // Creates Valence Ring
        var newValenceRing = document.createElement('div');
        newValenceRing.setAttribute('class', 'valence-ring');
        newValenceRing.setAttribute('id', `valenceRing${atomNum}`);

        thisValenceRingShell.appendChild(newValenceRing);

    // Creates Valence Shell
        var newValence = document.createElement('div');
        newValence.setAttribute('class', 'valence-shell');
        newValence.setAttribute('id', `valence${atomNum}`);

        thisAtom.appendChild(newValence);

        let thisValence = document.getElementById(`valence${atomNum}`);

    // Creates Nucleus Shell
        var newNucleus = document.createElement('div');
        newNucleus.setAttribute('class', 'nucleus');
        newNucleus.setAttribute('id', `nucleus${atomNum}`);

        thisAtom.appendChild(newNucleus);

        let thisNucleus = document.getElementById(`nucleus${atomNum}`);

    // Creates Electrons and spaces them apart
    let numOfElectrons = 5;

    for (let i = 0; i < numOfElectrons; i++) {

        var newElectron = document.createElement('div');
        newElectron.setAttribute('class', `electron color${atomNum}`);

        let oneElectronX = 160*Math.cos((i)*(360/(numOfElectrons))*0.0174533) + 135;
        let oneElectronY = 160*Math.sin((i)*(360/(numOfElectrons))*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

        thisValence.appendChild(newElectron);
    }

    // Creates nucleus
    let numOfNucleus = 4;

    for (let i = 0; i < numOfNucleus; i++) {

        var newElectron = document.createElement('div');
        newElectron.setAttribute('class', `nucleus-inner color${atomNum}`);

        let oneElectronX = 20*Math.cos((i-1)*(360/numOfNucleus)*0.0174533) + 135;
        let oneElectronY = 20*Math.sin((i-1)*(360/numOfNucleus)*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px) scale(1.5)`;

        thisNucleus.appendChild(newElectron);
    }

    // Spins Electrons
        let id = null;
        let pos = 0;

        id = setInterval(frame, 15);

        function frame() {
            pos++;
            thisValence.style.transform = `rotate(-${pos}deg)`;
            thisNucleus.style.transform = `rotate(${pos/2}deg)`;
        };

    // Create Blur Container
    var newBlurContainer = document.createElement('div');
    newBlurContainer.setAttribute('id', 'blurContainer');

    mainGame.appendChild(newBlurContainer);

    let thisBlurContainer = document.getElementById('blurContainer');

    // Creates Blur Filter
    var newBlurFilter = document.createElement('div');
    newBlurFilter.setAttribute('class', 'blur-filter');

    thisBlurContainer.appendChild(newBlurFilter);

    // Creates Blur Filter 2
    var newBlurFilter2 = document.createElement('div');
    newBlurFilter2.setAttribute('class', 'blur-filter-2');

    thisBlurContainer.appendChild(newBlurFilter2);

    // Creates Score
    var newScore = document.createElement('div');
    newScore.setAttribute('id', 'score');

    mainGame.appendChild(newScore);

    thisScore = document.getElementById('score');
    thisScore.innerHTML = `${currentScore}`;
};
