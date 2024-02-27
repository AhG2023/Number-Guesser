//SELECTORS...
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

//FUNCTIONS..
function play(){
  const guess = document.getElementById("guess").value;
  if(guess < 1 || guess > 100){
    alert("Please Enter number between 1 and 100");
  }
  else{
    guessed_nums.push(guess);
    no_of_guesses += 1;
    
    if(guess < answer){
      msg3.textContent = "Your guess is too low.";
      msg1.textContent ="No. of Guesses:" + no_of_guesses;
      msg2.textContent = "Guessed numbers are: "+ guessed_nums;
    }
    else if(guess > answer){
      msg3.textContent = "Your guess is too high.";
      msg1.textContent ="No. of Guesses:" + no_of_guesses;
      msg2.textContent = "Guessed numbers are: "+ guessed_nums;
    }
    else{
      msg3.textContent = "Yooohoooo, You Win!! ";
      msg1.textContent ="The Number was:" + answer;
      msg2.textContent = "You guessed it in "+ no_of_guesses + " guesses.";
      document.getElementById("guess-btn").disabled = true;
      document.getElementById("guess-btn").style.background = "gray";
      
    }
  }
}