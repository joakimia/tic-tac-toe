const SUCCESS_COUNT = 3;

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

export const checkGameStatus = (currentMoves) => {
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

    const haveWon = arr => arr.length >= SUCCESS_COUNT && validateMoves(arr);

    if (haveWon(playerOneMoves)) {
        return 'X';
    } else if (haveWon(playerTwoMoves)) {
        return 'O';
    } else {
        return null;
    }
};

const validateMoves = (playerMoves) => {
    let rowCount = 0;

    Object.values(winningPatterns).forEach((possibility) => {
        rowCount = rowCount === 3 ? rowCount : haveThreeInARow(possibility, playerMoves);
    });

    return rowCount === SUCCESS_COUNT;
};

const haveThreeInARow = (option, arr) => {
    let count = 0;
    let index;
    arr.forEach((move, i) => {
        if(count !== 3) {
            if (option.includes(move)) {
                count++;
                if (count === 3 && !index) {
                    index = i;
                }
            }
        }
    })
    return count;
}