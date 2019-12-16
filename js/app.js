let game;
const button_reset = document.getElementById('btn__reset');
button_reset.addEventListener('click', function(){
game = new Game();
game.startGame();

});
document.getElementById("qwerty").addEventListener("click", function(e){
    if (e.target.tagName != 'BUTTON'){
     return;
    };
    if (e.target.tagName ==='BUTTON'){
        game.handleInteraction(e.target)
        console.log(e.target)
    };
});

