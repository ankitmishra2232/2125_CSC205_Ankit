const formEl = document.querySelector("form");
const tableEl = document.querySelector("table");
var array = [];  
function addingData(e){
    e.preventDefault();
    const roll = document.getElementById("roll").value;
    const forname = document.getElementById("forname").value;
    const name = document.getElementById("name").value.trim();
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
		 
		if (typeof(Storage) !== "undefined") {
        // Store
			localStorage.setItem("rollno1",roll);
			roll1 = localStorage.getItem("rollno1");
			localStorage.setItem("forname11",forname);
			forname1=localStorage.getItem("forname11");
			localStorage.setItem("name",name);
			name1=localStorage.getItem("name");
			localStorage.setItem("mname",mname);
			mname1=localStorage.getItem("mname");
			localStorage.setItem("lname",lname);
			lname1=localStorage.getItem("lname");
			
			
			localStorage.setItem("fforname11",fforname);
			fforname1=localStorage.getItem("fforname11");
			localStorage.setItem("fname",fname);
			fname1=localStorage.getItem("fname");
			localStorage.setItem("fmname",fmname);
			fmname1=localStorage.getItem("fmname");
			localStorage.setItem("flname",flname);
			flname1=localStorage.getItem("flname");
			
			localStorage.setItem("mforname11",mforname);
			mforname1=localStorage.getItem("mforname11");
			localStorage.setItem("mmname",mmname);
			mmname1=localStorage.getItem("mmname");
			localStorage.setItem("mmmname",mmmname);
			mmmname1=localStorage.getItem("mmmname");
			localStorage.setItem("mmlname",mmlname);
			mmlname1=localStorage.getItem("mmlname");
			localStorage.setItem("mobileno",mobile);
			mobile1 = localStorage.getItem("mobileno");
			localStorage.setItem("emailID",email);
			email1 = localStorage.getItem("emailID");
			localStorage.setItem("Gender",gender);
			gender1 = localStorage.getItem("Gender");
			localStorage.setItem("date of Birth",date);
			date1=localStorage.getItem("date of birth");
			localStorage.setItem("City",city);
			city1=localStorage.getItem("City");
			
			localStorage.setItem("State",state);
			state1=localStorage.getItem("State");
			
			localStorage.setItem("Country",country);
			country1=localStorage.getItem("Country");
        } 
		else {
			document.getElementById("rollno").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
        array.push(document.getElementById("roll").value);
        tableEl.innerHTML += `
        <tr>
            <td>${roll1}</td>
            <td>${forname1} ${name1} ${mname1} ${lname1}</td>
            <td>${fforname} ${fname} ${fmname} ${flname}</td>
            <td>${mforname1} ${mmname1} ${mmmname1} ${mmlname1}</td>
            <td>${mobile1}</td>
            <td>${email1}</td>
            <td>${gender1}</td>
            <td>${date1}</td>
            <td>${city1}, ${state1}, ${country1}</td>
        </tr>
        `;
    }
}

formEl.addEventListener("submit",addingData);