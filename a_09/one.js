
function highlight() {
   var opar = document.getElementById('paragraph').innerHTML;
    // alert("bhKK");
  var paragraph = document.getElementById('paragraph');
  var search = document.getElementById('Stext').value.trim();
//   alert("bhKK");
  search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  // $& means the whole matched string
//   alert("bhKK");
	
	var multi = document.getElementById('multiS');
	
	var Case = document.getElementById('case');
	if(Case.checked==true && multi.checked==true)
		var repl = new RegExp(`${search}`,'gi');
	else if(Case.checked==true && multi.checked==false)
		var repl = new RegExp(`${search}`,'i');
	else if(Case.checked==false && multi.checked==true)
		var repl = new RegExp(`${search}`,'g');
	if(Case.checked==false && multi.checked==false)
		var repl = new RegExp(`${search}`);
//   alert("bhKK");
//    if (search.length > 0)
	paragraph.innerHTML = opar.replace(repl, match => `<span class='new1'>${match}</span>`);
//    else paragraph.innerHTML = opar;
	// paragraph.innerHTML = opar.replace(repl, "");
//alert("hi");
}

function unchecked(){
	var multi = document.getElementById('multiS');
	var caseradio = document.getElementById('caseradio');
	var Case = document.getElementById('case');
	var reg = document.getElementById('reg');
	if(reg.checked==true){
		Case.disabled=true;
		multi.disabled=true;
	}
	else if(caseradio.checked==true){
		Case.disabled=false;
		multi.disabled=false;
	}
	
}