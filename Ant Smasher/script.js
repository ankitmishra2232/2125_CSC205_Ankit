var score=0;
var score_val = document.getElementsByClassName("val")[0];
var ant =document.getElementsByClassName("ant");
var ant00 = document.getElementsByClassName("ant")[0];
var ant01 = document.getElementsByClassName("ant")[1];
var ant02 = document.getElementsByClassName("ant")[2];
var ant03 = document.getElementsByClassName("ant")[3];
var ant04 = document.getElementsByClassName("ant")[4];
var ant05 = document.getElementsByClassName("ant")[5];
var ant06 = document.getElementsByClassName("ant")[6];
var ant07 = document.getElementsByClassName("ant")[7];
var ant08 = document.getElementsByClassName("ant")[8];
var bee1 = document.getElementById("bee0");
var bee2 = document.getElementById("bee1");
var bee3 = document.getElementById("bee2");
var game_over_text =document.getElementById("Printscore");
var game_over_screen =document.getElementById("gameOverScreen");
setTimeout(latestart1,1000);
setTimeout(latestart2,2000);
setTimeout(latestart3,2600);

setTimeout(function displaybee1(){
    bee1.style.display="block";
    bee2.style.animationDuration = 8;
},20000)
setTimeout(function displaybee1(){
    bee2.style.display="block";
},15000)
setTimeout(function displaybee1(){
    bee3.style.display="block";
},10000)
function Vanish(){
    ant00.style.display="none";
    score += 10;
    score_val.innerHTML = score;
}
function Vanish1(){
    ant01.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish2(){
    ant02.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish3(){
    ant03.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish4(){
    ant04.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish5(){
    ant05.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish6(){
    ant06.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish7(){
    ant07.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
function Vanish8(){
    ant08.style.display="none";
    score += 10;
    score_val.innerHTML = score;    
}
setInterval (function comeback(){
    ant00.style.display="block";
    ant01.style.display="block";
    ant02.style.display="block";
    ant03.style.display="block";
    ant04.style.display="block";
    ant05.style.display="block";
    ant06.style.display="block";
    ant07.style.display="block";
    ant08.style.display="block";
}, 3000);
 function latestart1(){
    ant00.style.display="block";
    ant05.style.display="block";
}
function latestart2(){
    ant07.style.display="block";
    ant02.style.display="block";
}
function latestart3(){
    ant03.style.display="block";
    ant04.style.display="block";
}
function gameover(){
    game_over_screen.style.display="block";

    ant00.style.display="none";
    ant01.style.display="none";
    ant02.style.display="none";
    bee1.style.display="none";
    document.getElementById("chiti").style.display="none";
    
    document.getElementById("gamegaya").style.display="none";
    game_over_text.innerHTML = "Your Score is : " +score;
    score = 0;
	score_val.innerHTML = score;
}

window.ondragstart = function() {return false}