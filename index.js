var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;
var userName=readlineSync.question("please enter your name? ")
console.log(chalk.green("welcome "+userName+" to the quiz"+" do you know aniket "))
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.red("you are wright"));
    score=score+1;
  }
  else{
    console.log(chalk.red("you are wrong"));
    score=score-1;
  }
console.log(chalk.blue("your score is "+score));
console.log("---------");
}
var quiz=[{question:"what is my fav color:",answer:"black"}
,{question:"what is my fav food :",answer:"samosa"}
,{question:"where do i live:",answer:"ara"}
,{question:"my fav superhero would be:",answer:"ironman"}
,{question:" i have complete my high school in:",answer:"dav"}
,{question:"i have complete my graduation in:",answer:"galgotiya"}
,{question:"where do i travel the most:",answer:"rajasthan"}
,{question:"my fav city would be:",answer:"shimla"}
,{question:"my fav cuisine:",answer:"indian"},{question:"my fav shoe brand:",answer:"addidas"}]
for(var i=0;i<quiz.length;i++)
{
  var currentQuestion=quiz[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.blue("your final score is "+score));
console.log("thankyou for playing the quiz")