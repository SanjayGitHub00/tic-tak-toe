"use strict";
import {GAME} from './modules/variable.js';
import {endGame, isDraw, markCell, Profile, setHoverEffect, swapTurns} from "./modules/helpers.js";
import {checkWin, WIN_COMBINATIONS} from "./modules/win.js";

// Game Button
GAME.startBtn.addEventListener('click', startGame);
GAME.restartBtn.addEventListener('click', startGame);
GAME.drawBtn.addEventListener('click', startGame);

Profile();

// Start Game
function startGame() {
    setHoverEffect();
    // Iterate over cells & add Click Event
    GAME.blockElement.forEach(cell => {
        cell.classList.remove(GAME.X_CLASS);
        cell.classList.remove(GAME.Y_CLASS);
        cell.classList.remove('win');
        cell.removeEventListener('click',handleClick);
        cell.addEventListener('click', handleClick, {once: true});
    })
    GAME.startGame.classList.add('hide');

    GAME.winEl.classList.remove('show');
    GAME.drawEl.classList.remove('show');

    GAME.winnerImg.children.length > 1 ? GAME.winnerImg.removeChild(GAME.winner) : null;
}

//Handler on function of cell
function handleClick(e) {
    const cell = e.target;

    const currentClass = GAME.turns ? GAME.Y_CLASS : GAME.X_CLASS;

    markCell(cell, currentClass);
    // Check winner
    let flag = checkWin(currentClass, GAME.blockElement).filter((win, index) => {
        if (win) {
            //    add success color to the winner
            WIN_COMBINATIONS[index].map(i => {
                GAME.blockElement[i].classList.add('win');
            })
            //    Set the Winner
            GAME.winner = GAME.blockElement[WIN_COMBINATIONS[index][0]].cloneNode(true);

            return win !== false;
        }
    });

    if (flag.length) {
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);
    } else if (isDraw(flag)) {
        endGame(true, GAME.winEl, GAME.drawEl);
    }

    GAME.turns = swapTurns(GAME.turns);
    setHoverEffect();
}