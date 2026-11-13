//NOTE TO MR. C: We were having issues with our remote repo so we made a new one but Outlook decided it didn't like anybody tonight so James couldn't get on it :(
//So THIS is the final, complete version, submitted by Lewis
//James did all the HTML and CSS, I did all the JavaScript, but I copypasted the HTML and CSS from the original
//So yes it looks like I did amd created and pushed everything but no, James did his half :)

let topLeft = document.getElementById("top-left");
let topCenter = document.getElementById("top-center");
let topRight = document.getElementById("top-right");
let centerLeft = document.getElementById("center-left");
let centerCenter = document.getElementById("center-center");
let centerRight = document.getElementById("center-right");
let bottomLeft = document.getElementById("bottom-left");
let bottomCenter = document.getElementById("bottom-center");
let bottomRight = document.getElementById("bottom-right");

//NOTE: PLAYER 1 IS ALWAYS X AND PLAYER 2 IS ALWAYS O
let p1Score = 0;
let p2Score = 0;
let turn = 1;
let moves = 0;
let gameOver = false;

clearBoard();
topLeft.onclick = function () { play(topLeft); };
topCenter.onclick = function () { play(topCenter); };
topRight.onclick = function () { play(topRight); };
centerLeft.onclick = function () { play(centerLeft); };
centerCenter.onclick = function () { play(centerCenter); };
centerRight.onclick = function () { play(centerRight); };
bottomLeft.onclick = function () { play(bottomLeft); };
bottomCenter.onclick = function () { play(bottomCenter); };
bottomRight.onclick = function () { play(bottomRight); };

function play(cell) {
    let p = cell.querySelector("p");
    if (gameOver) {
        clearBoard();
        return;
    }
    if (p.innerText != "") {
        return;
    }
    if (turn == 1) {
        p.innerText = "X";
    } else {
        p.innerText = "O";
    }
    moves = moves + 1;

    if (checkWin()) {
        gameOver = true;
        if (turn == 1) {
            p1Score = p1Score + 1;
            document.getElementById("player1").innerText = p1Score;
            alert("Player 1 is the WINNER");
        } else {
            p2Score = p2Score + 1;
            document.getElementById("player2").innerText = p2Score;
            alert("Player 2 is the WINNER (luigi the best always)");
        }
        return;
    }

    if (moves == 9) {
        gameOver = true;
        alert("tie!");
        return;
    }
    turn = 3 - turn;
}

function checkWin() {
    let a = topLeft.innerText;
    let b = topCenter.innerText;
    let c = topRight.innerText;
    let d = centerLeft.innerText;
    let e = centerCenter.innerText;
    let f = centerRight.innerText;
    let g = bottomLeft.innerText;
    let h = bottomCenter.innerText;
    let i = bottomRight.innerText;

    //probably shouldve labeled these lmao sorry
    if (a != "" && a == b && b == c) {
        return true;
    }
    if (d != "" && d == e && e == f) {
        return true;
    }
    if (g != "" && g == h && h == i) {
        return true;
    }
    if (a != "" && a == d && d == g) {
        return true;
    }
    if (b != "" && b == e && e == h) {
        return true;
    }
    if (c != "" && c == f && f == i) {
        return true;
    }
    if (a != "" && a == e && e == i) {
        return true;
    }
    if (c != "" && c == e && e == g) {
        return true;
    }
    return false;
}

function clearBoard() {
    topLeft.querySelector("p").innerText = "";
    topCenter.querySelector("p").innerText = "";
    topRight.querySelector("p").innerText = "";
    centerLeft.querySelector("p").innerText = "";
    centerCenter.querySelector("p").innerText = "";
    centerRight.querySelector("p").innerText = "";
    bottomLeft.querySelector("p").innerText = "";
    bottomCenter.querySelector("p").innerText = "";
    bottomRight.querySelector("p").innerText = "";

    turn = 1;
    moves = 0;
    gameOver = false;
}

//JAMES I ADDED A RESET BUTTON TO THE HTML TOO JUST SO YOU KNOW BECAUSE ITS ON THE RUBRIC
function resetScore() {
    p1Score = 0;
    p2Score = 0;
    document.getElementById("player1").innerText = 0;
    document.getElementById("player2").innerText = 0;
    message.innerText = "";
    clearBoard();
}
document.getElementById("resetScore").onclick = resetScore;