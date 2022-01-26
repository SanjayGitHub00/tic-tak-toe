// Helping functions
import {GAME} from "./variable.js";

// Use to set select user on start game menu
export function Profile() {
    GAME.selectProfile.forEach(img => {
        img.addEventListener('click', e => {
            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectProfile);
            document.querySelector(`[data-id='${target}']`).classList.add('selected');

            // Swap value when user select second img
            if (target == 'x2' || target == 'y2') {
                GAME.X_CLASS = 'x2';
                GAME.Y_CLASS = 'y2';
            }

            //    Set turns
            GAME.turns = target == 'y' || target == 'y2' ? true : false;
        })
    })
}


function removeImgSelection(img) {
    [].forEach.call(img, function (el) {
        el.classList.remove('selected');
    })
}

// Function is use to setHoverEffect to the cell
export function setHoverEffect() {
    GAME.boardElement.classList.remove(GAME.Y_CLASS);
    GAME.boardElement.classList.remove(GAME.X_CLASS);
    if (GAME.turns) {
        GAME.boardElement.classList.add(GAME.Y_CLASS);
    } else {
        GAME.boardElement.classList.add(GAME.X_CLASS);
    }
}

// This function is helps in add current user into the cell
export function markCell(cell, currentClass) {
    cell.classList.add(currentClass);
}

// Use this function for swap the user
export function swapTurns(turn) {
    return turn = !turn;
}

// End Game Function
export function endGame(draw, winEl, drawEl) {
    if (!draw) {
        winEl.classList.add('show');
    } else {
        drawEl.classList.add('show');
    }
}

// Use to check the draw result
export function isDraw(flag) {
    if (flag.length) {
        return;
    } else {
       return [...GAME.blockElement].every(cell => {
            return cell.classList.contains(GAME.X_CLASS)||cell.classList.contains(GAME.Y_CLASS)
        });
    }
}