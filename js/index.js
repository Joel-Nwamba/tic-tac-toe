const Gameboard = (() => {
    const gameboard = ["", "", "", "", "", "", "", "", ""];
    const playerInformation = (name, marker) => {
        return {name, marker}
    }
    const playerOne = playerInformation("player-1", "X");
    const playerTwo = playerInformation("player-2", "O");
    let currentPlayer = playerOne.marker
    let playerTurn = playerTwo.marker
    // grab current board
    const boards = document.querySelectorAll(".cell");
    const winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i =0; i < winningCondition.length; i++) {
        let winCombo = winningCondition[i];
        let isWin = true;
        for(let j= 0; j < winCombo.length; j++) {
            let cellInfo = winCombo[j];
            if(gameboard[cellInfo] !== playerTurn) {
                isWin = false;
            }
        }
        if(isWin) {
            return winCombo;
        }
    }
    boards.forEach((board) => {
        board.addEventListener("click", () => {
            if(board.textContent === "") {
                board.textContent = currentPlayer;
                if(currentPlayer === playerOne.marker) {
                    currentPlayer = playerTwo.marker
                } else if(currentPlayer === playerTwo.marker) {
                    currentPlayer = playerOne.marker
                }
            }
            // if(board.textContent !== "") {
            //     preventDefault()
            // }
        })
    })
})();