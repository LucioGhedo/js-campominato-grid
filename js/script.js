// CHIEDO DIFFICOLTA'
let difficultyLevel = parseInt(prompt('Scegli la difficoltà; 1, 2 o 3'));
let gameMaxRange = 0;
// array vuoto per i numeri bomba
let bombs = [];
// in base alla difficoltà genero le bombe
if (difficultyLevel === 1) {
    gameMaxRange = 100;
    bombs = generateBombs(16, 1, 100)
} else if (difficultyLevel === 2) {
    gameMaxRange = 81;
    bombs = generateBombs(16, 1, gameMaxRange)
} else if (difficultyLevel === 3) {
    gameMaxRange = 49;
    bombs = generateBombs(16, 1, gameMaxRange)
}
// calcolo num massimo tentativi dell'utente per vincere la partita
let maxAtt = gameMaxRange - 16

// creo una variabile che ferma il gioco in caso di sconfitta o vittoria
let gamesContinue = true;
// creo array vuoto per i numeri dell utente
let userScore = [];

// QUANDO IL GIOCO VA AVANTI
while(gamesContinue === true) {
    // chiedo num all utente
    const userNum = parseInt(prompt('Dammi un numero'));
    // se il numero dell'utente è una bomba
    if(bombs.includes(userNum)) {
        // stop game
        gamesContinue = false;
        alert('hai perso')
    // se il numero utente non è una bomba
    } else if (!bombs.includes(userNum)) {
            //pusho nei numeri azzeccati
        if(!userScore.includes(userNum)) {
            userScore.push(userNum)
        // altrimenti se è un numero che ha già usato
        } else {
            alert('non puoi inserire più volte lo stesso numero')
        }
    }
    // controllo se l'utente ha vinto la partita
    if (userScore.length === maxAtt) {
        gamesContinue = false;
        alert('hai vinto')
    }
}

// output risultato
console.log('il tuo punteggio è:', userScore.length)


// FUNZIONI

// genera un array di 16 bombe tutte diverse
// return: array con numeri random tutti diversi con lunghezza numOfElem
// rangeMin, rangeMax sono il range degli elementi
function generateBombs(numOfElem, rangeMin, rangeMax) {
    let randomNumArray = [];
    while(randomNumArray.length < numOfElem) {
        const randomNum = getRndInteger(rangeMin, rangeMax)
        if(!randomNumArray.includes(randomNum)) {
            randomNumArray.push(randomNum)
        }
    }
    return randomNumArray
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
}
