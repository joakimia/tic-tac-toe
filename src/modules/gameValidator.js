import { PLAYER_ONE, PLAYER_TWO } from './playerManager';

const SUCCESS_COUNT = 3;
const TOTAL_BOARD_MOVES = 9;
export const NO_WINNER = 'No winner';

const winningPatterns = {
    one: ['1A', '2A', '3A'],
    two: ['1B', '2B', '3B'],
    three: ['1C', '2C', '3C'],
    four: ['1A', '1B', '1C'],
    five: ['2A', '2B', '2C'],
    six: ['3A', '3B', '3C'],
    seven: ['1A', '2B', '3C'],
    eight: ['3A', '2B', '1C'],
};

export const checkGameStatus = (currentMoves, totalMovesCount) => {
    if (totalMovesCount === TOTAL_BOARD_MOVES) {
        return NO_WINNER;
    }

    let playerOneMoves = [];
    let playerTwoMoves = [];

    Object.entries(currentMoves).forEach((playerMove) => {
        if (playerMove.includes("X")) {
            playerOneMoves.push(playerMove[0]);
        }
        if (playerMove.includes("O")) {
            playerTwoMoves.push(playerMove[0]);
        }   
    });

    const haveWon = arr =>
        arr.length >= SUCCESS_COUNT && validateMoves(arr);

    if (haveWon(playerOneMoves)) {
        return PLAYER_ONE;
    } else if (haveWon(playerTwoMoves)) {
        return PLAYER_TWO;
    } else {
        return null;
    }
};

const validateMoves = (playerMoves) => {
    let threeInARowCount = 0;

    Object.values(winningPatterns).forEach((possibility) => {
        threeInARowCount =
            threeInARowCount === SUCCESS_COUNT
                ? threeInARowCount
                : haveThreeInARow(possibility, playerMoves);
    });

    return threeInARowCount === SUCCESS_COUNT;
};

const haveThreeInARow = (option, arr) => {
    let count = 0;

    arr.forEach((move, i) => {
        if(count !== SUCCESS_COUNT && option.includes(move)) {
            count++;
        }
    })
    return count;
}