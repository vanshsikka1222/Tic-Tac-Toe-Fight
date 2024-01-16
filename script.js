//Selecting Boxes
let boxes = document.querySelectorAll(".box");
//Selecting Reset Button
let resetbtn = document.querySelector("#resetbtn");
//Selecting New Game Button
let newbtn = document.querySelector("#newbtn");
//Selecting Message Box 
let msgbox = document.querySelector(".msgbox");
//Selecting message para
let msg = document.querySelector("#msg");

//Alternate turns of 2 players (Player O) and Player X)
let turnO = true;

//Storing all the Winning Patterns (2D grid)
const arr = [
    //Horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //Vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //Diagonal
    [0,4,8],
    [2,4,6]
]

//Adding Event Listener "onclick" on all Boxes
boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            //Payer 0 turn
            box.classList.add("naruto");
            box.innerText = "O";
            turnO = false;
        }
        else {
            // Player X turn
            box.classList.add("itachi");
            box.innerText = "X";
            turnO = true;
        }
        //To avoid mutiple clicking of 1 single Box
        box.disabled = true;
        check();
    })
})

//To check winner Patterns on every entry
//Creating function
const check = () => {
    for(let pattern of arr) {
        //Printing Winning Patterns
        //...console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        //Getting all 3 box values of each winning pattern
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        //Conditions of WIN
        //1. All 3 positions of winning pattern should contain some value
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            //2. All 3 values sholud be SAME
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

//Creating Function to disable all boxes
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

//Creating Function to enable all boxes
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        //Removing all entries from all boxes
        box.innerText = "";
        box.classList.remove("itachi", "naruto");
    }
}

//Creating Function that Shows Winner
const showWinner = (winner) => {
    if(winner === "X") {
        msg.innerText = `Winner is Itachi Uchiha`;
    }
    else {
        msg.innerText = `Winner is Naruto Uzumaki`;
    }
    msgbox.classList.remove("hide");
    //Disable all Boxes
    disableBoxes();
}

// NEW Game & RESET Game Button functionality
const resetAllGame = () => {
    //Starting from turn of Player O
    turnO = true;
    //Enabling all boxes
    enableBoxes();
    //Hide msgbox
    msgbox.classList.add("hide");
}

newbtn.addEventListener("click", resetAllGame);
resetbtn.addEventListener("click", resetAllGame);
