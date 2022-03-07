const formEl = document.querySelector("form");
//const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
var array = [];  

function addingData(e){
    e.preventDefault();
    const roll = document.getElementById("roll").value;
    const forname = document.getElementById("forname").value;
    const name = document.getElementById("name").value;
    const mname = document.getElementById("mname").value;
    const lname = document.getElementById("lname").value;
    const fforname = document.getElementById("fforname").value;
    const fname = document.getElementById("fname").value;
    const fmname = document.getElementById("fmname").value;
    const flname = document.getElementById("flname").value;
    const mforname = document.getElementById("mforname").value;
    const mmname = document.getElementById("mmname").value;
    const mmmname = document.getElementById("mmmname").value;
    const mmlname = document.getElementById("mmlname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const date = document.getElementById("dob").value;
    const city=document.getElementById("city").value;
    const state=document.getElementById("state").value;
    const country=document.getElementById("country").value;
    if(array.includes(document.getElementById("roll").value)){
        alert("this rollno is already here.")
    }
    else{
        array.push(document.getElementById("roll").value);
        tableEl.innerHTML += `
        <tr>
            <td>${roll}</td>
            <td>${forname} ${name} ${mname} ${lname}</td>
            <td>${fforname} ${fname} ${fmname} ${flname}</td>
            <td>${mforname} ${mmname} ${mmmname} ${mmlname}</td>
            <td>${mobile}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${date}</td>
            <td>${city}, ${state}, ${country}</td>
        </tr>
        `;
    }
}

formEl.addEventListener("submit",addingData);