function d6() {
    var roll = Math.floor(Math.random()*6);
    return roll;
}
var playerRoll = d6();
console.log ("the player rolled: " + playerRoll);

var lifesAnswers = [
    "It is certain.", //0th value
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."  //19th value
];

function numRoll() {
    var randNum = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers[randNum])
}
numRoll();
