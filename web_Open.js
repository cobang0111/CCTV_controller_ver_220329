//입력한 CCTV 웹페이지 주소로 연결하는 파일

//텍스트 입력 창에 입력 시 현재 선택된 CCTV를 출력 및 엔터 입력 시 웹페이지 창을 띄움
$("#inputText").keyup(function(event){
	document.querySelector(".text").innerText=currentCCTV();
	if(event.which==13){
		searchWeb();
	}
});

//라디오 박스 클릭 시 텍스트 입력 창 활성화 및 선택된 CCTV 출력 함수
function clickRadio(){
	document.querySelector("#inputText").select();
	document.querySelector(".text").innerText=currentCCTV();
}

//라디오 박스 내용 클릭 시 위 함수 실행
﻿$(".only-sr").click(clickRadio);

// 현재 선택된 CCTV 출력 / C의 경우 x,y 상관 없이 바로 CCTV number 연결해주는 함수
function currentCCTV(){
	let ccType=$('input[name="theme1"]:checked').val();
	if(ccType=="C"){
		let checkCC=ccType+" "+$('#inputText').val();
		return checkCC;
	} else {
		let checkCC=ccType+" "+$('input[name="theme2"]:checked').val()+"-"+$('#inputText').val();
		return checkCC;
	}
}

//web_Information.js 에서 CCTV name 일치 시 배열 생성 함수
function ccInfo(cc){
	function findCCTV(element){
		if(element.name==cc){
			return true;
		}
	}
	let CCTV=webInfo.filter(findCCTV);
	return CCTV[0];
}

//입력한 CCTV가 존재할 경우 창을 띄워주는 함수
function searchWeb(){
	timeInfo();
	try{
		window.open(ccInfo(currentCCTV()).link,now,"width=650,height=500,top=250,left-630,scrollbars=yes,resizable=yes")
	}catch(err){
		alert(currentCCTV()+" CCTV는 등록되지 않은 CCTV 입니다.")
	}
}

function openIndex(){
	window.location.href="index.html";
}


function openSensor(){
	window.location.href="index_Sensor.html";
}


function openB(){
	window.location.href="index_B.html";
}

function openC(){
	window.location.href="index_C.html";
}

function openD(){
	window.location.href="index_D.html";
}