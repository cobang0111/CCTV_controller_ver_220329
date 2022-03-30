//키보드로 CCTV를 조작할 수 있게 하는 함수를 모은 Javascript 파일


//web_Information.js 에서 Brand name 일치 시 배열 생성 함수
function brandInfo(brand_Name){
	function findBrand(element){
		if(element.brand== brand_Name){
			return true;
		}
	}
	let urlInfo= webAjax.filter(findBrand);
	return urlInfo[0];
}


//프리셋
//A company CCTV 프리셋 조작 함수
function control_Preset(cc, brand_Name, num){
	$.ajax({
		url: ccInfo(cc).link+ brandInfo(brand_Name).url_Preset,
		type: brandInfo(brand_Name).send_Type,
		username: brandInfo(brand_Name).user_ID,
		password: ccInfo(cc).pw,
		timeout: 1000,
		async: true
	});
}


//CCTV company에 따른 CCTV 프리셋 조작 분류 함수
function goPreset(num){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "AAA": control_Preset(currentCCTV(),'AAA', num); break;
			case "BBB": control_Preset(currentCCTV(),'BBB', num); break;
			case "CCC": control_Preset(currentCCTV(),'CCC', num); break;
			case "DDD": control_Preset(currentCCTV(),'DDD', num); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}


//220307

//wisenet CCTV 그룹 조작 함수
function wiseGroup(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"/stw-cgi/system.cgi?msubmenu=group&action=contol&Channel=0&Group="+num+"&Mode=start&SunapiSeqId=23",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV 그룹 조작 함수
function hikGroup(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"___________________________"+num+"_____",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV 그룹 조작 함수
function tcsGroup(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"____________"+ccInfo(cc).ch+"___________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV 그룹 조작 함수
function IPcGroup(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"___________________________"+num,
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}


//wisenet CCTV 추적 조작 함수
function wiseTrace(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"/stw-cgi/system.cgi?msubmenu=trace&action=contol&Channel=0&Trace="+num+"&Mode=start&SunapiSeqId=23",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}



//CCTV company에 따른 CCTV 그룹 조작 분류 함수
function goGroup(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseGroup(currentCCTV(),1); break;
			case "hik":hikGroup(currentCCTV(),1); break;
			case "tcs":tcsGroup(currentCCTV(),1); break;
			case "IPc":IPcGroup(currentCCTV(),1); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}


//Ctrl+0 = 그룹 1
$(document).keydown(function(event){
	if(event.which==96&&event.ctrlKey){
		goGroup();
	}
});

//Ctrl+1 = 1번 프리셋
$(document).keydown(function(event){
	if(event.which==97&&event.ctrlKey){
		goPreset(1);
	}
});

//Ctrl+2 = 2번 프리셋
$(document).keydown(function(event){
	if(event.which==98&&event.ctrlKey){
		goPreset(2);
	}
});

//Ctrl+3 = 3번 프리셋
$(document).keydown(function(event){
	if(event.which==99&&event.ctrlKey){
		goPreset(3);
	}
});

//Ctrl+4 = 4번 프리셋
$(document).keydown(function(event){
	if(event.which==100&&event.ctrlKey){
		goPreset(4);
	}
});

//Ctrl+5 = 5번 프리셋
$(document).keydown(function(event){
	if(event.which==101&&event.ctrlKey){
		goPreset(5);
	}
});

//Ctrl+6 = 6번 프리셋
$(document).keydown(function(event){
	if(event.which==102&&event.ctrlKey){
		goPreset(6);
	}
});

//Ctrl+7 = 7번 프리셋
$(document).keydown(function(event){
	if(event.which==103&&event.ctrlKey){
		goPreset(7);
	}
});

//Ctrl+8 = 8번 프리셋
$(document).keydown(function(event){
	if(event.which==104&&event.ctrlKey){
		goPreset(8);
	}
});

//Ctrl+9 = 9번 프리셋
$(document).keydown(function(event){
	if(event.which==105&&event.ctrlKey){
		goPreset(9);
	}
});

//Ctrl+* = 다크모드 on/off
$(document).keydown(function(event){
	if(event.which==106&&event.ctrlKey){
		darkMode();
	}
});


//아래부터는 부가 기능 함수이며, 필수가 아님
//Ctrl+방향키 / insert,delete로 CCTV의 Pan, Tilt, Zoom을 조작하는 기능임


//wisenet CCTV Pan 좌측 방향 조작 함수
function wiseMoveLeft(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV Pan 우측 방향 조작 함수
function wiseMoveRight(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV Tilt 위 방향 조작 함수
function wiseMoveUp(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV Tilt 아래 방향 조작 함수
function wiseMoveDown(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV Pan 좌측 방향 조작 함수
function hikMoveLeft(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV Pan 우측 방향 조작 함수
function hikMoveRight(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV Tilt 위 방향 조작 함수
function hikMoveUp(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV Tilt 아래 방향 조작 함수
function hikMoveDown(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}


//tcs CCTV Pan 좌측 방향 조작 함수
function tcsMoveLeft(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV Pan 우측 방향 조작 함수
function tcsMoveRight(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV Tilt 위 방향 조작 함수
function tcsMoveUp(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV CCTV Tilt 아래 방향 조작 함수
function tcsMoveDown(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Pan 좌측 방향 조작 함수
function IPcMoveLeft(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Pan 우측 방향 조작 함수
function IPcMoveRight(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Tilt 위 방향 조작 함수
function IPcMoveUp(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Tilt 아래 방향 조작 함수
function IPcMoveDown(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV 조작 정지 함수
function wiseStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikvision CCTV 조작 정지 함수
function hikMoveStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV 조작 정지 함수
function tcsMoveStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV 조작 정지 함수
function IPcMoveStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV Zoom In 함수
function wiseZoomIn(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//wisenet CCTV Zoom Out 함수
function wiseZoomOut(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikvision CCTV Zoom In 함수
function hikZoomIn(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikvision CCTV Zoom Out 함수
function hikZoomOut(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV Zoom In 함수
function tcsZoomIn(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV Zoom Out 함수
function tcsZoomOut(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Zoom In 함수
function IPcZoomIn(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Zoom Out 함수
function IPcZoomOut(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}


//hikVision CCTV Zoom 정지 함수
function hikZoomStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV Zoom 정지 함수
function tcsZoomStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//IP camera CCTV Zoom 정지 함수
function IPcZoomStop(cc){
	$.ajax({
		url:ccInfo(cc).link+"___________________________",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}


//CCTV company에 따른 CCTV Pan 좌측 방향으로 조작 분류 함수
function moveLeft(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseMoveLeft(currentCCTV()); break;
			case "hik":hikMoveLeft(currentCCTV()); break;
			case "tcs":tcsMoveLeft(currentCCTV()); break;
			case "IPc":IPcMoveLeft(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Pan 우측 방향으로 조작 분류 함수
function moveRight(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseMoveRight(currentCCTV()); break;
			case "hik":hikMoveRight(currentCCTV()); break;
			case "tcs":tcsMoveRight(currentCCTV()); break;
			case "IPc":IPcMoveRight(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Tilt 위 방향으로 조작 분류 함수
function moveUp(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseMoveLeft(currentCCTV()); break;
			case "hik":hikMoveLeft(currentCCTV()); break;
			case "tcs":tcsMoveLeft(currentCCTV()); break;
			case "IPc":IPcMoveLeft(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Tilt 아래 방향으로 조작 분류 함수
function moveDown(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseMoveDown(currentCCTV()); break;
			case "hik":hikMoveDown(currentCCTV()); break;
			case "tcs":tcsMoveDown(currentCCTV()); break;
			case "IPc":IPcMoveDown(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Pan, Tilt 조작 정지 분류 함수
function moveStop(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseStop(currentCCTV()); break;
			case "hik":hikMoveStop(currentCCTV()); break;
			case "tcs":tcsMoveStop(currentCCTV()); break;
			case "IPc":IPcMoveStop(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Zoom In 조작 분류 함수
function zoomIn(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseZoomIn(currentCCTV()); break;
			case "hik":hikZoomIn(currentCCTV()); break;
			case "tcs":tcsZoomIn(currentCCTV()); break;
			case "IPc":IPcZoomIn(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Zoom Out 조작 분류 함수
function zoomOut(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseZoomOut(currentCCTV()); break;
			case "hik":hikZoomOut(currentCCTV()); break;
			case "tcs":tcsZoomOut(currentCCTV()); break;
			case "IPc":IPcZoomOut(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//CCTV company에 따른 CCTV Zoom 정지 분류 함수
function zoomStop(){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wiseStop(currentCCTV()); break;
			case "hik":hikZoomStop(currentCCTV()); break;
			case "tcs":tcsZoomStop(currentCCTV()); break;
			case "IPc":IPcZoomStop(currentCCTV()); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}


//Ctrl+ ← 키보드 누르고 있을 때 좌측으로 이동
$(document).keydown(function(event){
	if(event.which==37&&event.ctrlKey){
		moveLeft();
	}
});

//Ctrl+ ← 키보드 손 떼면 좌측으로 이동 정지
$(document).keyup(function(event){
	if(event.which==37&&event.ctrlKey){
		moveStop();
	}
});

//Ctrl+ ↑ 키보드 누르고 있을 때 위로 이동
$(document).keydown(function(event){
	if(event.which==38&&event.ctrlKey){
		moveUp();
	}
});

//Ctrl+ ↑ 키보드 손 떼면 위로 이동 정지
$(document).keyup(function(event){
	if(event.which==38&&event.ctrlKey){
		moveStop();
	}
});

//Ctrl+ → 키보드 누르고 있을 때 우측으로 이동
$(document).keydown(function(event){
	if(event.which==39&&event.ctrlKey){
		moveRight();
	}
});

//Ctrl+ → 키보드 손 떼면 우측으로 이동 정지
$(document).keyup(function(event){
	if(event.which==39&&event.ctrlKey){
		moveStop();
	}
});

//Ctrl+ → 키보드 누르고 있을 때 우측으로 이동
$(document).keydown(function(event){
	if(event.which==39&&event.ctrlKey){
		moveRight();
	}
});

//Ctrl+ → 키보드 손 떼면 우측으로 이동 정지
$(document).keyup(function(event){
	if(event.which==39&&event.ctrlKey){
		moveStop();
	}
});

//Ctrl+ ↓ 키보드 누르고 있을 때 아래로 이동
$(document).keydown(function(event){
	if(event.which==40&&event.ctrlKey){
		moveDown();
	}
});

//Ctrl+ ↓ 키보드 손 떼면 아래로 이동 정지
$(document).keyup(function(event){
	if(event.which==40&&event.ctrlKey){
		moveStop();
	}
});


//Ctrl+delete 키보드 누르고 있을 때 Zoom In
$(document).keydown(function(event){
	if(event.which==46&&event.ctrlKey){
		zoomIn();
	}
});

//Ctrl+delete 키보드 손 떼면 Zoom In 정지
$(document).keyup(function(event){
	if(event.which==46&&event.ctrlKey){
		zoomStop();
	}
});

//Ctrl+insert 키보드 누르고 있을 때 Zoom Out
$(document).keydown(function(event){
	if(event.which==45&&event.ctrlKey){
		zoomOut();
	}
});

//Ctrl+insert 키보드 손 떼면 Zoom Out 정지
$(document).keyup(function(event){
	if(event.which==45&&event.ctrlKey){
		zoomStop();
	}
});
