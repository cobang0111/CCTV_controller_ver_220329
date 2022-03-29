//현재 시간을 출력하는 함수
function currentTime(){
	timeInfo();
	let clockMonth=(month<10) ? '0'+month:month;
	let clockDay=(day<10) ? '0'+day:day;
	let clockHour=(hour<10) ? '0'+hour:hour;
	let clockMinute=(minute<10) ? '0'+minute:minute;
	let clockSecond=(second<10) ? '0'+second:second;
	document.querySelector(".time").innerHTML = clockMonth+"/"+clockDay+" "+clockHour+":"+clockMinute+":"+clockSecond;
}

let startTime=9; //탐방시작 시각(hour) 입력
let endTime=17; //탐방종료 시각(hour) 입력

//자동 실행 함수
function autoSet(){
	if(minute==0){
		timeSet(); //매 정각마다 시간동조
		if(hour==startTime){
			beDay(); //hour이 탐방시작 시각일 경우
		} else if (hour==endTime){
			beNight(); //hour이 탐방종료 시각일 경우
		}
	}
}

//현재 시각 출력 함수를 1초마다 반복하는 함수
//60초마다 자동 실행 조건 확인
function clock(){
  currentTime();
	setInterval(currentTime,1000);
	setInterval(autoSet,60000);
}

//현재 시각 출력
clock();
