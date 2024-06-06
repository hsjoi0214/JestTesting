let game = {
    currentGame: [],
    score: 0,
    choices: ["button1","button2","button3","button4"],
    playerMoves: [],

};

function newGame() {
    game.score=0;
    game.playerMoves=[]
    game.currentGame=[]
}

function showScore() {
    document.getElementById("score").innerText=game.score
}


module.exports = { game, newGame, showScore };