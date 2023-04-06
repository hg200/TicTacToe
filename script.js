"use strict";

const player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }
    return { getSign }
};

/*****/
const gameBoard = (() => {
        const board = ["", "", "", "", "", "", "", "", ""];

        const getBoard = (index) => {
            if (index > board.length) return;
            return board[index];
        }

        const setBoard = (index, sign) => {
            if (index > board.length) return;
            board[index] = sign;
        }

        const reset = () => {
            for (let i = 0; i < board.length; i++) {
                board[i] = "";
            }
        }

        return { getBoard, setBoard, reset };
    }

)();

/*****/
const displayController = (() => {
        const messageElement = document.querySelector(".message");
        const cells = Array.from(document.querySelectorAll(".cell"));
        const reset = document.querySelector(".restart-btn");

        cells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
                if (e.target.textContent !== "" || gameController.gameOver()) return;
                gameController.play(parseInt(e.target.dataset.index));
                updateBoard();
            });
        });

        reset.addEventListener("click", (e) => {

            gameBoard.reset();
            gameController.reset();
            updateBoard();
            setMessage("player X's turn..");
        });

        const setMessage = (message) => {
            messageElement.textContent = message;
        }

        const updateBoard = () => {
            for (let i = 0; i < cells.length; i++) {
                cells[i].textContent = gameBoard.getBoard(i);
            }
        }



        return { setMessage };
    }

)();



/*****/
const gameController = (() => {
        const playerX = player("X");
        const playerO = player("O");
        let round = 1;
        let gameIsOver = false;

        const play = (index) => {
            gameBoard.setBoard(index, getCurrentPlayer())

            if (checkWinner()) {
                displayController.setMessage(
                    `Player ${getCurrentPlayer()} is the winner!`
                );
                gameIsOver = true;
                return;
            }

            if (round === 9) {
                displayController.setMessage(
                    "it's a Draw!"
                );
                gameIsOver = true;
                return;
            }

            round++;
            displayController.setMessage(
                `player ${getCurrentPlayer()}'s turn..`
            );
        }

        const checkWinner = () => {
            let cubesArray = [];
            for (let i = 0; i < 9; i++) {
                cubesArray[i] = gameBoard.getBoard(i);
            }
            let horizontal =
                (cubesArray[0] != "" && cubesArray[0] == cubesArray[1] && cubesArray[0] == cubesArray[2]) ||
                (cubesArray[3] != "" && cubesArray[3] == cubesArray[4] && cubesArray[3] == cubesArray[5]) ||
                (cubesArray[6] != "" && cubesArray[6] == cubesArray[7] && cubesArray[6] == cubesArray[8]);

            let vertical =
                (cubesArray[0] != "" && cubesArray[0] == cubesArray[3] && cubesArray[0] == cubesArray[6]) ||
                (cubesArray[1] != "" && cubesArray[1] == cubesArray[4] && cubesArray[1] == cubesArray[7]) ||
                (cubesArray[2] != "" && cubesArray[2] == cubesArray[5] && cubesArray[2] == cubesArray[8]);

            let diagonals =
                (cubesArray[0] != "" && cubesArray[0] == cubesArray[4] && cubesArray[0] == cubesArray[8]) ||
                (cubesArray[2] != "" && cubesArray[2] == cubesArray[4] && cubesArray[2] == cubesArray[6]);

            if (horizontal || vertical || diagonals) {
                return true;
            }
            return 0;
        }

        const getCurrentPlayer = () => {
            return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
        };

        const reset = () => {
            round = 1;
            gameIsOver = false;
        }

        const gameOver = () => {

            return gameIsOver;
        }


        return { play, reset, gameOver };
    }

)();