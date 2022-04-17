
function read_doc() {
    const req = new XMLHttpRequest();
    req.onload =function () {
      document.getElementById("jsonfile").innerHTML = this.responseText;
    }
    req.open("GET", "data.json",true);
    req.send();
  }

function loadingimg(){
    var zoro=document.getElementById("zoro");
    zoro.style.display="block";
}
function hideimg(){
    var zoro=document.getElementById("zoro");
    zoro.style.display="none";
}