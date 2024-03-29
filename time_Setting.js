//시간동조 함수 Javascript 파일

//A company CCTV 추출
function AAA_Check(element){
	if(element.company=="AAA"){
		return true;
	}
}

//B company CCTV 추출
function BBB_Check(element){
	if(element.company=="BBB"){
		return true;
	}
}

//C company CCTV 추출
function CCC_Check(element){
	if(element.company=="CCC"){
		return true;
	}
}

//D company CCTV 추출
function DDD_Check(element){
	if(element.company=="DDD"){
		return true;
	}
}

// company별 CCTV 배열 생성
let AAA_CCList=webInfo.filter(AAA_Check);
let BBB_CCList=webInfo.filter(BBB_Check);
let CCC_CCList=webInfo.filter(CCC_Check);
let DDD_CCList=webInfo.filter(DDD_Check);

//A company 시간 동기화 함수
function AAA_Time(){
	timeInfo();
	for(var i=0; i<AAA_CCList.length; i++){
		$.ajax({
			url:AAA_CCList[i].link+ url_AAA_Time,
			type:type_AAA,
			data:data_AAA_Time,
			username:username_AAA,
			password:AAA_CCList[i].pw,
			timeout:1000,
			async:true
		});
	}
}

//B company 시간 동기화 함수
function BBB_Time(){
	timeInfo();
	for(var i=0; i<BBB_CCList.length; i++){
		$.ajax({
			url:BBB_CCList[i].link+ url_BBB_Time,
			type: type_BBB,
			data: data_BBB_Time,
			username: username_BBB,
			password:BBB_CCList[i].pw,
			timeout:1000,
			async:true
		});
	}
}

//C company 시간 동기화 함수
function CCC_Time(){
	timeInfo();
	for(var i=0; i<CCC_CCList.length; i++){
		$.ajax({
			url:CCC_CCList[i].link+ url_CCC_Time,
			type: type_CCC,
			username: username_CCC,
			password:CCC_CCList[i].pw,
			timeout:1000,
			async:true
		});
	}
}

//D company 시간 동기화 함수
function DDD_Time(){
	timeInfo();
	for(var i=0; i<DDD_CCList.length; i++){
		$.ajax({
			url:DDD_CCList[i].link+ url_DDD_Time,
			type: type_DDD,
			data:data_DDD_Time,
			username: username_DDD,
			password:DDD_CCList[i].pw,
			timeout:1000,
			async:true
		});
	}
}



// 시간 동조 함수
function timeSet(){
	AAA_Time();
	BBB_Time();
	CCC_Time();
	DDD_Time();
}
