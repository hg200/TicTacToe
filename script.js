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


        return {};
    }

)();

/*****/
const displayController = (() => {
        const message = document.querySelector(".message");
        const cells = Array.from(document.querySelectorAll(".cell"));
        const resetBtn = document.querySelector(".restart-btn");

        cells.forEach((cell) => {
            cell.addEventListener("click", play());
        });

        resetBtn.addEventListener("click", reset());

        const reset = () => {
            for (let i = 0; i < cells.length(); i++) {
                cells[i].textContent = "";
            }
        }

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

        const play = () => {

        }


        return {};
    }

)();