document.querySelector("h1 button").addEventListener("click",gameFunc);
function gameFunc(){
  var array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

  var firstNum =(Math.random()*6);

  var secondNum =(Math.random()*6);
  firstNum = Math.floor(firstNum);

  secondNum = Math.floor(secondNum);

  document.querySelector(".dice .img1").setAttribute("src",array[firstNum]);

  document.querySelector(".dice .img2").setAttribute("src",array[secondNum]);

  if(firstNum > secondNum){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }

  else if(firstNum < secondNum){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  }

  else document.querySelector("h1").innerHTML = "Its a Draw!";
}
