/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Resets Game: 
function reset() {
    const list = document.getElementById('phrase');
    const hearts = document.querySelectorAll('ol img');
    const WrongButtons = document.querySelectorAll('.wrong');
    const RightButtons = document.querySelectorAll('.chosen');
    while (list.hasChildNodes()) { // Loop to remove previous phrase list
        list.removeChild(list.firstChild);
    };
    for (let i = 0; i < hearts.length; i++) { // Loop to reset lives/hearts
        hearts[i].src = 'images/liveHeart.png';
    };
    for (let i = 0; i < WrongButtons.length; i++) { // Loop to reset wrong buttons
        WrongButtons[i].className = 'key';
    };
    for (let i = 0; i < RightButtons.length; i++) { // Loop to reset chosen buttons
        RightButtons[i].disabled = false;
        RightButtons[i].className = 'key';
    };

};


class Game {
    constructor() {
    this.missed = 0
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    };
createPhrases() {
const phrases = [
    new Phrase('Christmas'),
    new Phrase('Thanksgiving'),
    new Phrase('Presents'),
    new Phrase('Turkey'),
    new Phrase('Easter')
];
    return phrases;
};
getRandomPhrase() {
            const randPhrase = this.phrases [Math.floor(Math.random() * this.phrases.length)];
            return randPhrase
    };
    startGame(){
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

handleInteraction(button) {
button.className = "disabled";
if (game.activePhrase.checkLetter(button.innerHTML) === true) { // If the button selected is the same as letter in phrase    
    game.activePhrase.showMatchedLetter(button.innerHTML);
    this.checkForWin(); // Checks if letter is correctly guessed 
    if (this.checkForWin() === true) { // Game finishes if this is true
        this.gameOver(true);
    };
} else {
    button.className = 'wrong';
    game.removeLife();
}
};
checkForWin(){
    const hidden = document.querySelectorAll('.hide').length;
    if (hidden === 0){
        return true;
    }   else return false;
}
removeLife(){
    const heart = document.querySelectorAll('ol img');
    heart[this.missed].setAttribute('src', 'images/lostHeart.png');
    this.missed++;
    if (this.missed === 5)
    this.gameOver(false);
    }
gameOver(youWin){
    const overlay = document.getElementById("overlay")
    const gameOver = document.getElementById("game-over-message");
    $('#overlay').show();
    if (youWin === true) {
        overlay.className = "win";
        gameOver.innerHTML ="You Win";
    }   else{
            overlay.className = "lose";
            gameOver.innerHTML = "Sorry you Lost";
    }
     $('#overlay').show();
     reset();

}
   
}
