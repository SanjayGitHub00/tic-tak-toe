// Variables

export let GAME={
    X_CLASS:'x', // x for girls
    Y_CLASS:'y', // y for boy
    selectProfile:document.querySelectorAll('.img .id'),
    turns:undefined,
    blockElement:document.querySelectorAll('[data-cell]'),
    boardElement:document.getElementById('board'),
    startBtn:document.getElementById('startBtn'),
    startGame:document.querySelector('.start-game'),
    winner:null,
    winEl:document.querySelector('.winner-msg'),
    drawEl:document.querySelector('.draw-msg'),
    winnerImg:document.querySelector('.winner-msg .winner'),
    restartBtn:document.getElementById('restartBtn'),
    drawBtn:document.getElementById('drawBtn'),

}