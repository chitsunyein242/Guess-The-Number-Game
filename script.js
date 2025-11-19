let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let guessBtn = document.querySelector("#guessBtn");
let restartBtn = document.querySelector("#restartBtn");
let div = document.getElementById("container");
let chance = 10;
let guessed_number = [];
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer)

msg2.textContent += chance;

guessBtn.addEventListener("click",play);
restartBtn.addEventListener("click",restart)

function play(){
    let guess_num = Number(document.querySelector("#guess_num").value);
    if(guess_num < 1 || guess_num > 50){
        alert("Please enter number between 1 to 50");
    }
    else{
        if(guess_num > answer){
            div.classList.add("wrong")
            msg1.textContent = "Your number is too high";
            chance --;
        }
        else if(guess_num < answer){
            div.classList.add("wrong")
            msg1.textContent = "Your number is too low";
            chance --;
        }
        else{
             div.classList.add("correct")
            msg1.textContent = "Congulation! You won this game.";
            chance--;
        }
        msg2.textContent = "Number of chance to guess: " +chance;
        guessed_number.push(guess_num)
        msg3.textContent = "Guessed numbers are: " +guessed_number;
        document.querySelector("#guess_num").value = "";


        if(chance <= 0){
            guessBtn.disabled = true;
            alert("Your chance is empty. Please restart the game");
        }
    }
}
function restart(){
    guessBtn.disabled = false;
    answer = Math.floor(Math.random() * 50) + 1;
    console.log(answer)
    document.querySelector("#guess_num").value = "";
    div.classList.remove("wrong")
    div.classList.remove("correct")
    msg1.textContent = "Your game is successfully restart";
    chance = 10;
    msg2.textContent = "Number of chance to guess: " + chance;
    guessed_number = [];
    msg3.textContent = "Guessed numbers are: " +guessed_number;
}

