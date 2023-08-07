let player1 = document.querySelector("#player1Dice");
let player2 = document.querySelector("#player2Dice");
let rollBtn = document.querySelector("#rollDice");
let message = document.querySelector(".message");

function randomDice(){
    let num = Math.floor(Math.random()*6);
    return num;
}
rollBtn.addEventListener("click", function(){
    let num1 = randomDice();
    let num2 = randomDice();
    player1.innerHTML = `<img src="pic/Alea_${num1}.png" alt="dice">`;
    player2.innerHTML = `<img src="pic/Alea_${num2}.png" alt="dice">`;
    if(num1 > num2)
    {
        message.textContent = "Player 1 wins!!";
    }
    else if( num1 == num2){
        message.textContent = "Game is tie!!";
    }
    else{
        message.textContent = "Player 2 wins!!";
    }
})