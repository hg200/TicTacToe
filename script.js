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
            if (index > board.length()) return;
            return board[index];
        }

        const setBoard = (index, sign) => {
            if (index > board.length()) return;
            board[index] = sign;
        }

        const reset = () => {
            for (let i = 0; i < board.length(); i++) {
                board[i] = "";
            }
        }

        return { getBoard, setBoard, reset };
    }

)();

/*****/
const displayController = (() => {
        const message = document.querySelector(".message");
        const cells = Array.from(document.querySelectorAll(".cell"));
        const resetBtn = document.querySelector(".restart-btn");

        cells.forEach((cell) => {
            cell.addEventListener("click", gameController.play);
        });

        resetBtn.addEventListener("click", reset());



        const test = () => {
            console.log(cells);
        };

        return { test };
    }

)();
displayController.test()


/*****/
const gameController = (() => {
        const player1 = player("X");
        const player2 = player("O");
        const round = 1;

        const play = (e) => {
            if (e.target.textContent !== "") return
            e.target.textContent = `${getCurrentPlayer.getSign()}`
            round++;

        }

        const getCurrentPlayer = () => {
            return round % 2 == 1 ? player1 : player2;
        }


        return { play };
    }

)();