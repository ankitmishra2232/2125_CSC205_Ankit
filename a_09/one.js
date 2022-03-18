var multi = document.getElementById('multiS');
var caseradio = document.getElementById('caseradio');
var Case = document.getElementById('case');
var reg = document.getElementById('reg');

function highlight() {
   var opar = document.getElementById('paragraph').innerHTML;
  var paragraph = document.getElementById('paragraph');
  var search = document.getElementById('Stext').value.trim();
	if(reg.checked==false){
		search = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  // $& means the whole matched string	
		if(Case.checked==true && multi.checked==true)
			var repl = new RegExp(`${search}`,'gi');
		else if(Case.checked==true && multi.checked==false)
			var repl = new RegExp(`${search}`,'i');
		else if(Case.checked==false && multi.checked==true)
			var repl = new RegExp(`${search}`,'g');
		if(Case.checked==false && multi.checked==false)
			var repl = new RegExp(`${search}`);
		paragraph.innerHTML = opar.replace(repl, match => `<span class='new'>${match}</span>`);
	}
	else{
		var result = new RegExp(`${search}`,'gi');
		paragraph.innerHTML = opar.replace(result ,match => `<span class='new'>${match}</span>`);
	}
  
}

function unchecked(){

	if(reg.checked==true){
		Case.disabled=true;
		multi.disabled=true;
	}
	else if(caseradio.checked==true){
		Case.disabled=false;
		multi.disabled=false;
	}
	
}