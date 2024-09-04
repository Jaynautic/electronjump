var mainGame = document.getElementById('mainGame');
var newPosY1 = -140;
var newPosY2 = 140;

let posY = [newPosY1, newPosY2];


let ranNum1 = 1;
let ranNum2 = 2;
createNewAtom(ranNum1);
createNewAtom(ranNum2);

window.addEventListener("click", () => {

    for (let i = 0; i < 2; i++) {
        let posX = (-1)**(i+1) * 120;
        posY[i] = posY[i] + 350;
        let atom1 = document.getElementById(`atom${i+1}`);
        atom1.style.transform = `translate(${posX}px, ${posY[i]}px)`;
        console.log(atom1)
    }

});


function createNewAtom(atomPosition) {

    let atomNum = atomPosition;

    // Creates New Atom
        var newAtom = document.createElement('div');
        newAtom.setAttribute('class', 'atom-container');
        newAtom.setAttribute('id', `atom${atomNum}`);

        let oneAtomX = (120)*(-1)**(+atomPosition);
        let oneAtomY = (140)*(-1)**(+atomPosition);

        newAtom.style.transform = `translate(${oneAtomX}px, ${oneAtomY}px)`;

        mainGame.appendChild(newAtom);

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
        newElectron.setAttribute('class', 'valence-shell-inner');

        let oneElectronX = 160*Math.cos((i)*(360/(numOfElectrons))*0.0174533) + 135;
        let oneElectronY = 160*Math.sin((i)*(360/(numOfElectrons))*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px)`;

        thisValence.appendChild(newElectron);
    }

    // Creates nucleus
    let numOfNucleus = 4;

    for (let i = 0; i < numOfNucleus; i++) {

        var newElectron = document.createElement('div');
        newElectron.setAttribute('class', 'nucleus-inner');

        let oneElectronX = 20*Math.cos((i-1)*(360/numOfNucleus)*0.0174533) + 135;
        let oneElectronY = 20*Math.sin((i-1)*(360/numOfNucleus)*0.0174533) + 135;

        newElectron.style.transform = `translate(${oneElectronX}px, ${oneElectronY}px) scale(1.5)`;

        thisNucleus.appendChild(newElectron);
    }

    // Spins Electrons
        let id = null;
        let pos = 0;

        id = setInterval(frame, 10);

        function frame() {
            pos++;
            thisValence.style.transform = `rotate(-${pos}deg)`;
            thisNucleus.style.transform = `rotate(${pos/2}deg)`;
        };

};
