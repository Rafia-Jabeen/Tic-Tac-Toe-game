let winningMsgContainer = document.querySelector(".msg-container");
let winningMsg = document.getElementById("winner");
let restartBtn = document.getElementById("restart-btn");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");

let turnO = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winningMsgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count ++;
        if(turnO){
            box.innerText = "O";
            box.style.color = "#472d30";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#e26d5c";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});


const checkWinner = () => {
    for (let pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }else if(count===9){
                drawCondition();
            }
        }
    }
};

const showWinner = (winner) => {
    winningMsg.innerText = `Congratulations! Winner is Player ${winner}`;
    winningMsgContainer.classList.remove("hide");
    disableBoxes();
};

const drawCondition = () => {
    count=0;
    winningMsg.innerText = "Match Draw! No one is Winner:(";
    winningMsgContainer.classList.remove("hide");
    disableBoxes();
};
