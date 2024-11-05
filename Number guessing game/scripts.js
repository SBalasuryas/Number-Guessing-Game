var random = Math.floor(Math.random() * 10) + 1;
var points = 10;

function check() {
    var number = document.getElementById("num"); 
    var result = document.getElementById("row"); 
    var score = document.getElementById("score");

    var n = parseInt(number.value);

    if (n === random) {
        points += 10;
        score.textContent = "Score : " + points;
        result.textContent = "Right";
        alert("Your Guess is Correct!");
    } else {
        points -= 1;
        score.textContent = "Score : " + points;
        result.textContent = "Wrong";
    }
}
