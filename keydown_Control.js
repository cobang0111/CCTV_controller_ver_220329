//키보드로 CCTV를 조작할 수 있게 하는 함수를 모은 Javascript 파일

//wisenet CCTV 프리셋 조작 함수
function wisePreset(cc,preset){
	$.ajax({
		url:ccInfo(cc).link+"/stw-cgi/system.cgi?msubmenu=preset&action=contol&Channel=0&Preset="+preset+"&SunapiSeqId=23",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//hikVision CCTV 프리셋 조작 함수
function hikPreset(cc,preset){
	$.ajax({
		url:ccInfo(cc).link+"/ISAPI/system/channels/1/presets/"+preset+"/goto",
		type:"PUT",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

//tcs CCTV 프리셋 조작 함수
function tcsPreset(cc,preset){
	$.ajax({
		url:ccInfo(cc).link+"/httpapx/SendPTZ?action=sendptz&PTZ_CHANNEL="+ccInfo(cc).ch+"&PTZ_PRESETGOTO="+preset,
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}

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

//tcs CCTV 그룹 조작 함수
function tcsGroup(cc,num){
	$.ajax({
		url:ccInfo(cc).link+"/httpapx/SendPTZ?action=sendptz&PTZ_CHANNEL="+ccInfo(cc).ch+"&PTZ_PRESETGOTO=151",
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

//wisenet CCTV 홈 조작 함수
function wiseHome(cc){
	$.ajax({
		url:ccInfo(cc).link+"/stw-cgi/system.cgi?msubmenu=preset&action=home&Channel=0&preset=home&SunapiSeqId=23",
		type:"POST",
		username:"admin",
		password:ccInfo(cc).pw,
		timeout:1000,
		async:true
	});
}



//CCTV company에 따른 CCTV 프리셋 조작 분류
function goPreset(preset){
	if(ccInfo(currentCCTV())){
		switch(ccInfo(currentCCTV()).company){
			case "wise":wisePreset(currentCCTV(),preset); break;
			case "hik":hikPreset(currentCCTV(),preset); break;
			case "tcs":tcsPreset(currentCCTV(),preset); break;
			default:alert("Company error!");
		}
	}
	else(alert("Input error!"))
}

//Ctrl+0 = 그룹 List 1
$(document).keydown(function(event){
	if(event.which==96&&event.ctrlKey&&ccInfo(currentCCTV()).company=="wise"){
		wiseGroup(currentCCTV(),1);
	} else if(event.which==96&&event.ctrlKey&&ccInfo(currentCCTV()).company=="tcs"){
		tcsGroup(currentCCTV(),1);
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
