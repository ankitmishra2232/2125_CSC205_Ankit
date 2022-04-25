var score=0;
var score_val = document.getElementsByClassName("val")[0];
var ant = document.getElementById("ant");
var ant01 = document.getElementById("ant01");
var bee = document.getElementById("bee");
var game_over_text =document.getElementById("Printscore");
var game_over_screen =document.getElementById("gameOverScreen");
setInterval(comeback,5000);
setTimeout(latestart1,100000);
function Vanish(){
    ant.style.display="none";
    score += 10;
    score_val.innerHTML = score;
}
function Vanish1(){
    ant01.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function comeback(){
    ant.style.display="block";
}
function latestart1(){
    ant.style.display="block";
}

function gameover(){
    game_over_screen.style.display="block";
    ant.style.display="none";
    bee.style.display="none";
    game_over_text.innerHTML = "Your Score is : " +score;
    score = 0;
	score_val.innerHTML = score;
}