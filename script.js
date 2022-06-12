let turn = document.getElementById("turn");
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;
const statusDisplay = document.querySelector('.game--status');

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = "Player " + b1.innerHTML + " is the Winner";
    turn.style.fontSize = "30px";
    statusDisplay.innerHTML = `Player ${b1.innerHTML} Wins`;
}

function getWinner() {

    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let box7 = document.getElementById("box7");
    let box8 = document.getElementById("box8");
    let box9 = document.getElementById("box9");

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        selectWinnerBoxes(box1, box2, box3);
    }
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        selectWinnerBoxes(box4, box5, box6);
    }
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box7, box8, box9);
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box1, box4, box7);
    }
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        selectWinnerBoxes(box2, box5, box8);
    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box3, box6, box9);
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        selectWinnerBoxes(box1, box5, box9);
    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        selectWinnerBoxes(box3, box5, box7);
    } 
    else if ((box1.innerHTML == 'X' || box1.innerHTML == 'O') && (box2.innerHTML == 'X' || box2.innerHTML == 'O') && (box3.innerHTML == 'X' || box3.innerHTML == 'O') 
          && (box4.innerHTML == 'X' || box4.innerHTML == 'O') && (box5.innerHTML == 'X' || box5.innerHTML == 'O') && (box6.innerHTML == 'X' || box6.innerHTML == 'O') 
          && (box7.innerHTML == 'X' || box7.innerHTML == 'O') && (box8.innerHTML == 'X' || box8.innerHTML == 'O') && (box9.innerHTML == 'X' || box9.innerHTML == 'O')) {
        statusDisplay.innerHTML = `Game is Tie`;
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
                this.innerHTML = "X";
                turn.innerHTML = "Player O Turn Now";
                getWinner();
                X_or_O += 1;
            } else {
                this.innerHTML = "O";
                turn.innerHTML = "Player X Turn Now";
                getWinner();
                X_or_O += 1;
            }
        }
    };
}

document.getElementById('replay').addEventListener('click', replay);

function replay() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Tic-Tac-Toe";
        turn.style.fontSize = "30px";
        statusDisplay.innerHTML = '';
    }
}