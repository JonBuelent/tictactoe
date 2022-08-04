let fields = [];
let gameOver = false;
let currentShape ='cross'
// von kreuz zu kreis ändern
function fillShape(id) {
    //bug weg machen. Erst Aufrufen, wenn keine Form eingefügt ist.
    if (!fields[id] && !gameOver) {
        if(currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactiv');
            document.getElementById('player-2').classList.add('player-inactiv');
        
    }   else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactiv');
            document.getElementById('player-2').classList.remove('player-inactiv');
    }

    fields [id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
    }
}
//Bei welchem Feld anzeigen Kreis oder X
function draw() {
    for(let i = 0; i < fields.length; i++){
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
    }

    for(let i = 0; i < fields.length; i++){
        if(fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('itsOver').classList.add('d-none');
    document.getElementById('restartButton').classList.add('d-none');

    document.getElementById('line-1').classList.add('d-none');
    document.getElementById('line-2').classList.add('d-none');
    document.getElementById('line-3').classList.add('d-none');
    document.getElementById('line-4').classList.add('d-none');
    document.getElementById('line-5').classList.add('d-none');
    document.getElementById('line-6').classList.add('d-none');
    document.getElementById('line-7').classList.add('d-none');
    document.getElementById('line-8').classList.add('d-none');
    
    // oder so  for(let i=1; i < 8; i++) {
    //          document.getElementById('line-' + i).classList.add('d-none');}

    for(let i = 0; i < 9; i++){
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function checkForWin() {
    let winner;
    //Reihe oben horizontal, die letzte Anfrage kontrolliert das kein undifinde vohanden ist. In diesem Fall && fields[0]
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner= fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    //Reihe mitte horizontal
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner= fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    //Reihe unten horizontal
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner= fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    //Reihe links vertikal
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner= fields[0];
        document.getElementById('line-4').style.transform = '';
    }
    //Reihe mitte vertikal
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner= fields[1];
        document.getElementById('line-5').style.transform = '';
    }
    //Reihe rechts vertikal
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner= fields[2];
        document.getElementById('line-6').style.transform = '';
    }
    //Reihe diagonal links oben rechts unten
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner= fields[0];
        document.getElementById('line-8').style.transform = 'scaleX(1) scaleY(1)';
    }
    //Reihe diagonal rechts oben links unten
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner= fields[2];
        document.getElementById('line-7').style.transform = 'scaleX(1) scaleY(1)';
    }

    if (winner) {
        console.log('GEWONNEN', winner);
        gameOver = true;
        setTimeout(function(){
            document.getElementById('itsOver').classList.remove('d-none');
        }, 1000 );

        setTimeout(function(){
            document.getElementById('restartButton').classList.remove('d-none');
        }, 2000 );

    }
}