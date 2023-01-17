const Gameboard = (() => {
    const newGame = document.querySelector("new-btn");
    const restartGame = document.querySelector(".restart-game");
    const cell = document.querySelectorAll(".cell")
    cell.forEach(cells => {
        cells.addEventListener("click", handleClickCell)
    })
    let gameActive = true;
    const playerCircle = document.querySelector(".player-circle")
    const boards = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const playerInformation = (name, marker, turn) => {
        return {name, marker, turn}
    }
    const player1 = playerInformation("player1", "x", true);
    const player2 = playerInformation("player2", "o", false );

    const currentPlayer = player1.marker;

    function handleClickCell(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target

        const cellClickedIndex = parseInt(
            clickedCell.getAttribute('data-cell-index')
          );
          if(boards[cellClickedIndex] != " " || !gameActive) {
            return true;
          }
    }
})();