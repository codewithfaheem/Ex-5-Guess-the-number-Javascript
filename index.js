// ********* Guess the Number **********
// genrate randome number (1 - 100)
// get input from user and compare with guessed number (<,=,>)
// terminate if its matched and give socre (100 - number of guesses)
let randNum, userInput = [], score;
randNum = Math.floor(Math.random() * 99) + 1; // getting the random number from 1 to 100

let i = 0, a;
do { // comparing the numbers
  a = prompt("Pleae input number to Guess:")
  a = parseInt(a);
  userInput.push(a);
  if (userInput[i] < randNum) console.log("Your guess is ***less*** than the Number", '\n')
  else if (userInput[i] > randNum) console.log("Your guess is ***greater*** than the Number", '\n')
  else console.log("****Congratulations..****", '\n')
  i++;
}
while (a != randNum)
score = 100 - userInput.length; // caculating the score
console.log('\n', "Your score is: ", score, '\n')