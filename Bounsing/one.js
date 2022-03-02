/*document.getElementById("button").addEventListener("click", function () {
            alert("You clicked the Child element!");
        });
*/

var mixBut = document.getElementById("button");
mixBut.addEventListener("click", Stop);
function Start(){
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
}

function Stop(){
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}
var playpause=document.getElementById("ball");
playpause.addEventListener("click",myPauseFunction);

function myPauseFunction() {
  if(mixBut.value=="Stop")
  {
	  playpause.style.animationPlayState = "paused";
  }
  else{
	  playpause.style.animationPlayState = "running";
  }
}



/*function myMove() {
  let id = null;
  const elem = document.getElementById("ball");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
*/


/*
var stopCont = document.getElementById("button");
stopCont.addEventListener("click",Start);

function stopball(){
	console.log("STOP");
	stopCont.removeEventListener("click",stopball);
	stopCont.addEventListener("click",Start);
	
}
var imgObj;
var animate = null;
function init(){
    imgObj = document.getElementById('ball');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}

startStopImg = function(){
    if(animate != null){
        stop();
    } else {
        moveRight();
    }
   change();
}

function moveRight(){
imgObj.style.left = (parseInt(imgObj.style.left) + 0) + 'px';
animate = setTimeout(moveRight,5); 
}

change = function(){
var elem = document.getElementById("Stop");
if (elem.value=="Stop") elem.value = "Start";
else elem.value = "Stop";
}

stop = function(){
    clearTimeout(animate);
    animate = null;
}
window.onload = init();*/
