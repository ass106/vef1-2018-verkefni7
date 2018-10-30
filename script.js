// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {

    alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
    do {
        play();
    } while (confirm('Spila annan?'))
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
    var a = new Date();3
    let time = 0;
    let playNr = 0;
    let statistics = 0;
    do { 
        let result = ask();
        var b = new Date();
        time = b - a;
        if (result == true) {
            statistics++;
            playNr++;
        } else if (result ==false) {
            playNr++;
        } else if (result === null) {
            return alert('Hætt í leik');
        }
    } while (playNr < GAMES_TO_PLAY) {
    }
    avgPer = statistics/(time/1000)
    alert('Þú svaraðir ' + statistics + ' af 10 dæmum rétt á ' + (time/1000).toFixed(4) + ' sekúndum.\nMeðalrétt svör á sekúndu eru ' + avgPer.toFixed(4));
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
    let question = randomNumber(1, 4);
    let nr1 = 0;
    let nr2 = 0;
    let nr1String = nr1.toString();
    let nr2String = nr2.toString();
  
    if (question == 1) {
        nr1 = randomNumber(1, 100);
        nr2 = randomNumber(1, 100);
        var answer = prompt(nr1 + " + " + nr2, 0);
        if (parseGuess(answer) === (nr1 + nr2)) {
        return true;
        } else if (parseGuess(answer) === null)  {
            return null;
        } else {
            return false;
        }
    } else if (question == 2) {
        nr1 = randomNumber(1, 100);
        nr2 = randomNumber(1, 100);
        let answer = prompt(nr1 + " - " + nr2, 0);
        if (parseGuess(answer) === (nr1 - nr2)) {
        return true;
        } else if (parseGuess(answer) === null)  {
            return null;
        } else {
            return false;
        }
    } else if (question == 3) {
        nr1 = randomNumber(1, 10);
        nr2 = randomNumber(1,10);
        let answer = prompt(nr1 + " * " + nr2, 0);
        if (parseGuess(answer) === (nr1 * nr2)) {
        return true;
        } else if (parseGuess(answer) === null)  {
            return null;
        } else {
            return false;
        }
    } else if (question == 4) {
        nr2 = randomNumber(2, 10);
        nr1 = nr2 * randomNumber(2,10);
        let answer = prompt(nr1 + " / " + nr2, 0);
        if (parseGuess(answer) === (nr1 / nr2)) {
        return true;
        } else if (parseGuess(answer) === null)  {
            return null;
        } else {
            return false;
        }
    }
}

/**
 * Tekur inn input sem streng og skilar þeirri tölu sem hægt er að ná þar úr.
 * Ef ekki er hægt að ná tölu úr input er null skilað.
 */
function parseGuess(input) {
    const parsed = parseInt(input, 10);
  
    if (isNaN(parsed)) {
      return null;
    }
    return parsed;
  }

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();