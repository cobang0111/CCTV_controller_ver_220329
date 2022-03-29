//컴퓨터로부터 시간 정보를 얻어오는 Javascript 파일

let now;
let year;
let month;
let day;
let hour;
let minute;
let second;

function timeInfo(){
	now=new Date();
	year=now.getFullYear();
	month=now.getMonth()*1+1;
	day=now.getDate();
	hour=now.getHours();
	minute=now.getMinutes();
	second=now.getSeconds();
}
