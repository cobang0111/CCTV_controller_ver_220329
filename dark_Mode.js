//다크모드 구현 Javascript 파일

var Body={
	setColor:function(color){
	$('body').css('color',color);
	},
	setBackgroundColor:function(color){
	$('body').css('backgroundColor',color);
	}
}

function darkMode(){
	if(getCookie('dM')=='w'){
		Body.setBackgroundColor('black');
		Body.setColor('pink');
		setCookie('dM','d');
		document.querySelector("#webType").style.backgroundColor='black';
		document.querySelector("#webType").style.color='pink';
		if(document.querySelector("#webType").value=='Sensor'){
			document.querySelector("#darkM").value='★';
		}else{
			document.querySelector("#home").style.backgroundColor='black';
			document.querySelector("#inputText").style.backgroundColor='black';
			document.querySelector("#inputText").style.color='pink';
		}
	}else{
		Body.setBackgroundColor('white');
		Body.setColor('black');
		setCookie('dM','w');
  	document.querySelector("#webType").style.backgroundColor='white';
		document.querySelector("#webType").style.color='black';
		if(document.querySelector("#webType").value=='Sensor'){
			document.querySelector("#darkM").value='☆';
		}else{
			document.querySelector("#home").style.backgroundColor='white';
			document.querySelector("#inputText").style.backgroundColor='white';
			document.querySelector("#inputText").style.color='black';
		}
	}
}

function dmStorage(){
	if(getCookie('dM')=='d'){
		Body.setBackgroundColor('black');
		Body.setColor('pink');
		document.querySelector("#webType").style.backgroundColor='black';
		document.querySelector("#webType").style.color='pink';
		if(document.querySelector("#webType").value=='Sensor'){
			document.querySelector("#darkM").value='★';
		}else{
			document.querySelector("#home").style.backgroundColor='black';
			document.querySelector("#inputText").style.backgroundColor='black';
			document.querySelector("#inputText").style.color='pink';
		}
	}else{
		Body.setBackgroundColor('white');
		Body.setColor('black');
		setCookie('dM','w');
		document.querySelector("#webType").style.backgroundColor='white';
		document.querySelector("#webType").style.color='black';
		if(document.querySelector("#webType").value=='Sensor'){
			document.querySelector("#darkM").value='☆';
		}else{
			document.querySelector("#home").style.backgroundColor='white';
			document.querySelector("#inputText").style.backgroundColor='white';
			document.querySelector("#inputText").style.color='black';
		}
	}
}

dmStorage();
