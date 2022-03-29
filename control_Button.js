//버튼 조작과 관련된 함수를 모은 Javascript 파일

//부대별로 변동되어야 함

//1번 센서 버튼 조작 함수 (한 쪽 센서 중복 CCTV 경우)
function sensor1(self){
	if(self.value=="1 OFF"){ //OFF->ON 시 동작
		//wisePreset("A x-1",2);<-1번 센서 확인 시 관련된 CCTV 자리
		//wisePreset("A x-2",3);
		//wiseTrace("A x-3",1);<-1번 센서 구역을 추적 기능으로 확인
		self.style.backgroundColor='white';
		self.value="1 ON";
		setCookie('ss1','on');
	} else { // 사용하고 다시 껐을 때의 동작 입력
		//wiseHome("A x-1"); <- 2번 센서 구역과 중복되지 않고 주야간 프리셋 동일 시 이 자리에
		self.style.backgroundColor='pink';
		self.value="1 OFF";
		setCookie('ss1','off');
		if(document.querySelector("#ss2")=="2 OFF"){
			//wiseHome("A x-2"); <-2번 센서 구역과 중복되고, 주야간 프리셋 동일 시 이 자리에
			if(hour>startTime && hour<endTime){
				//wiseHome("A x-3"); <-2번 센서 구역과 중복되고, 주야간 프리셋 다를 경우 주간 프리셋
			}else{
				//wiseGroup("A x-3",1); <-2번 센서 구역과 중복되고, 주야간 프리셋 다를 경우 야간 프리셋
			}
		}
		// else 미입력하여 "2 ON" 경우 중복되는 CCTV를 조작하지 않게 됨
	}
}

//2번 센서 버튼 조작 함수 (양쪽 센서 모두 중복 CCTV 경우)
function sensor2(self){
	if(self.value=="2 OFF"){
		//wisePreset("A x-2",4);<-2번 센서 확인 시 관련된 CCTV 자리
		//wisePreset("A x-3",4);
		//wisePreset("A x-4",3);
		//wisePreset("A x-5",3);
		//wiseGroup("A x-6",1);<-2번 센서 구역을 그룹 기능으로 확인
		self.style.backgroundColor='white';
		self.value="2 ON";
		setCookie('ss2','on');
	} else { // 사용하고 다시 껐을 때의 동작 입력
		//wiseHome("A x-4"); <- 1,3번 센서 구역과 중복되지 않고 주야간 프리셋 동일 시 이 자리에
		self.style.backgroundColor='pink';
		self.value="2 OFF";
		setCookie('ss2','off');
		if(document.querySelector("#ss1")=="1 OFF"){
			//wiseHome("A x-2"); <-1번 센서 구역과 중복 & 주야간 프리셋 동일 시 이 자리에
			if(hour>startTime && hour<endTime){
				//wiseHome("A x-3"); <-1번 센서 구역과 중복 & 주야간 프리셋 다를 경우 주간 프리셋
			}else{
				//wiseGroup("A x-3",1); <-1번 센서 구역과 중복 & 주야간 프리셋 다를 경우 야간 프리셋
			}
		}
		if(document.querySelector("#ss3")=="3 OFF"){
			//wiseHome("A x-5");<-3번 센서 구역과 중복 & 주야간 프리셋 동일 시
			if(hour>startTime && hour<endTime){
				//wiseGroup("A x-5",1);<-3번 센서 구역과 중복 & 주야간 다를 경우 주간
				//wiseHome("A x-6");
			}else{
				//wisePreset("A x-5",2);<-3번 센서 구역과 중복 & 야간
				//wisePreset("A x-6",2);
			}
		}
		//else 미입력하여 "1 ON" or "3 ON"일 경우 관련 CCTV 조작 X
	}
}


//3번 센서 버튼 조작 함수 / 아래부터는 1,2번 센서 예시로 개별적 설계 바람
function sensor3(self){
	if(self.value=="3 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="3 ON";
		setCookie('ss3','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="3 OFF";
		setCookie('ss3','off');
	}
}

//4번 센서 버튼 조작 함수
function sensor4(self){
	if(self.value=="4 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="4 ON";
		setCookie('ss4','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="4 OFF";
		setCookie('ss4','off');
	}
}

//5번 센서 버튼 조작 함수
function sensor5(self){
	if(self.value=="5 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="5 ON";
		setCookie('ss5','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="5 OFF";
		setCookie('ss5','off');
	}
}

//6번 센서 버튼 조작 함수
function sensor6(self){
	if(self.value=="6 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="6 ON";
		setCookie('ss6','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="6 OFF";
		setCookie('ss6','off');
	}
}

//7번 센서 버튼 조작 함수
function sensor7(self){
	if(self.value=="7 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="7 ON";
		setCookie('ss7','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="7 OFF";
		setCookie('ss7','off');
	}
}

//8번 센서 버튼 조작 함수
function sensor8(self){
	if(self.value=="8 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="8 ON";
		setCookie('ss8','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="8 OFF";
		setCookie('ss8','off');
	}
}

//9번 센서 버튼 조작 함수
function sensor9(self){
	if(self.value=="9 OFF"){
		//wisePreset(cc,preset);
		self.style.backgroundColor='white';
		self.value="9 ON";
		setCookie('ss9','on');
	}else{
		//wisePreset(cc,preset);
		self.style.backgroundColor='pink';
		self.value="9 OFF";
		setCookie('ss9','off');
	}
}

// 센서 개수에 맞춰서 운용, 추가 가능

//센서 on/off 쿠키 작동
function sensorStorage(){
	if(getCookie('ss1')=='on'){
		document.querySelector("#ss1").style.backgroundColor='white';
		document.querySelector("#ss1").value='1 ON';
	}
	if(getCookie('ss2')=='on'){
		document.querySelector("#ss2").style.backgroundColor='white';
		document.querySelector("#ss2").value='2 ON';
	}
	if(getCookie('ss3')=='on'){
		document.querySelector("#ss3").style.backgroundColor='white';
		document.querySelector("#ss3").value='3 ON';
	}
	if(getCookie('ss4')=='on'){
		document.querySelector("#ss4").style.backgroundColor='white';
		document.querySelector("#ss4").value='4 ON';
	}
	if(getCookie('ss5')=='on'){
		document.querySelector("#ss5").style.backgroundColor='white';
		document.querySelector("#ss5").value='5 ON';
	}
	if(getCookie('ss6')=='on'){
		document.querySelector("#ss6").style.backgroundColor='white';
		document.querySelector("#ss6").value='6 ON';
	}
	if(getCookie('ss7')=='on'){
		document.querySelector("#ss7").style.backgroundColor='white';
		document.querySelector("#ss7").value='7 ON';
  }
	if(getCookie('ss8')=='on'){
		document.querySelector("#ss8").style.backgroundColor='white';
		document.querySelector("#ss8").value='8 ON';
	}
	if(getCookie('ss9')=='on'){
		document.querySelector("#ss9").style.backgroundColor='white';
		document.querySelector("#ss9").value='9 ON';
	}
}

sensorStorage();

//탐방시작 버튼 조작 함수
function beDay(){
	//wisePreset(cc,preset);
	//hikPreset(cc,preset);
	//tcsPreset(cc,preset);
	//wiseGroup(cc,num);
	//wiseHome(cc);
	//etc
}

//탐방종료 버튼 조작 함수
function beNight(){
	//wisePreset(cc,preset);
	//hikPreset(cc,preset);
	//tcsPreset(cc,preset);
	//wiseGroup(cc,num);
	//wiseHome(cc);
	//etc
}

function autoHome(){
	if(hour>startTime && hour<endTime){
		beDay();
	}else{
		beNight();
	}
}
