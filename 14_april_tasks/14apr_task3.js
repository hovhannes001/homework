const readline = require("readline");

const rl = readline.createInterface({
    input: process .stdin,
    output: process.stdout
  });
  for (i = 1; i <= 20; i++) {
      console.log(i);
  }

function askquestion(query){
  return new Promise((resolve,reject) => {
    rl.question(query,(input) => resolve(input));
  });
}

async function game(){
  let number = null;
  number = Math.floor(Math.random() * 100);
  let guess = null;
  let count = 0;
  while(guess !== number){
    guess = await askquestion("Guess the number: ");
    guess = +guess;
    if(isNaN(guess)){
      continue; 
    }
    else if(guess > number) {
      console.log("Too high");
    }
    else if(guess < number) {
      console.log("Too Low");
    }
    else{
      console.log(`Congratulations: you guessed the number: ${number}  from ${count} try`);
      process.exit();
    }
    count++;
  }
}

game();