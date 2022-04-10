const formEl = document.querySelector("form");
//const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
var array = [];  

function valdiation(e){
    e.preventDefault();
    const roll = document.getElementById("roll").value.trim();
    const forname = document.getElementById("forname").value.trim();
    const name = document.getElementById("name").value.trim();
    const mname = document.getElementById("mname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const fforname = document.getElementById("fforname").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const fmname = document.getElementById("fmname").value.trim();
    const flname = document.getElementById("flname").value.trim();
    const mforname = document.getElementById("mforname").value.trim();
    const mmname = document.getElementById("mmname").value.trim();
    const mmmname = document.getElementById("mmmname").value.trim();
    const mmlname = document.getElementById("mmlname").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value.trim();
    const date = document.getElementById("dob").value.trim();
    const city=document.getElementById("city").value.trim();
    const state=document.getElementById("state").value.trim();
    const country=document.getElementById("country").value.trim();
    if(array.includes(document.getElementById("roll").value)){
        alert("this rollno is already here.")
    }
    
}

///formEl.addEventListener("submit",valdiation);