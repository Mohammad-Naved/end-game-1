var readlinesync=require("readline-sync");
var name=readlinesync.question("Please Enter your name ");
var score=0;
console.log("Welcome: "+name);
console.log("How much DO YOU KNOW me? ");
var startgame=readlinesync.question("Press any key to Start a Game...");
function game(question,answer)
{
  var userAnswer=readlinesync.question(question);
if(answer.toUpperCase() ===userAnswer.toUpperCase())
{
  console.log("your Answer is Correct");
  score=score+1;
}
else
{
  console.log("Your Answer is Wrong");
}

console.log("Score= "+score);
console.log("*************************");

}
var question=[{question:"What is my full name " ,
answer:"Mohammad Naved"},
{
  question:"What motivates you to work hard ",
  answer:"money"
}
,
{ 
  question:"Who is my favorite hero ",
  answer:"Salman "
},
{question:"Who is my favorite person",
answer:"you"}];

for(var i=0;i<question.length;i++)
{
  game(question[i].question,question[i].answer);
}