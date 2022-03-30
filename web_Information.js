//웹페이지 정보가 입력되는 Javascript 파일
var num;

//연결할 웹페이지의 정보를 양식에 맞게 입력
var webInfo=[
	{name:"A f-1", link:"http://google.com/", company:"AAA", pw:"1234"},
	{name:"B x-1", link:"http://naver.com/", company:"BBB", pw:"1234"},
	{name:"C x-1", link:"http://cobang.tistory.com/", company:"CCC", pw:"1234", ch:1},
	{name:"D 1", link:"http://www.daum.net/", company:"DDD", pw:"1234"}
]

//시간 동기화 예시 주소
timeInfo();

let url_AAA_Time= '/stw-cgi/system.cgi?msubmenu=data&action=set&Year='+year+'&Month='+month+'&Day='+day+
'&Hour='+hour+'&Minute='+minute+'&Second='+second+'IsUTCTime=False&SyncType=Manual';
let data_AAA_Time='';

let url_BBB_Time= '/ISAPI/system/time';
let data_BBB_Time= '<Time><timemode>manual</timeMode><localTime>'+year+'-'+month+'-'+day+'T'+hour+':'+minute+':'+second+'</localTime><timeZone>CST-09:00:00</timeZone></Time>';

let url_CCC_Time="/httpapx/WriteParam?action=writeparam&SYS_CURRENTTIME="+year+"/"+month+"/"+day+"%20"+hour+"%3A"+minute+"%3A"+second
let data_CCC_Time='';

let url_DDD_Time= '___________';
let data_DDD_Time='___'+year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second+"___________"

//Preset 조작 예시 주소
let url_AAA_Preset= '/stw-cgi/system.cgi?msubmenu=preset&action=contol&Channel=0&Preset='+ num+ '&SunapiSeqId=23';
let url_BBB_Preset= '/ISAPI/system/channels/1/presets/'+ num+ '/goto';
let url_CCC_Preset= '/httpapx/SendPTZ?action=sendptz&PTZ_CHANNEL='+ ccInfo(cc).ch+ '&PTZ_PRESETGOTO='+ num;
let url_DDD_Preset= '___________________________'+ num;

//Group 조작 예시 주소 (수정바람)
let url_AAA_Group= '/stw-cgi/system.cgi?msubmenu=preset&action=contol&Channel=0&Preset='+ num+ '&SunapiSeqId=23';
let url_BBB_Group= '/ISAPI/system/channels/1/presets/'+ num+ '/goto';
let url_CCC_Group= '/httpapx/SendPTZ?action=sendptz&PTZ_CHANNEL='+ ccInfo(cc).ch+ '&PTZ_PRESETGOTO='+ num;
let url_DDD_Group= '___________________________'+ num;


var webAjax=[
	{brand: 'AAA', send_Type: 'POST', user_ID: 'admin', url_Time: url_AAA_Time, data_Time: data_AAA_Time, url_Preset: url_AAA_Preset},
	{brand: 'BBB', send_Type: 'PUT', user_ID: 'admin', url_Time: url_BBB_Time, data_Time: data_BBB_Time, url_Preset: url_BBB_Preset},
	{brand: 'CCC', send_Type: 'POST', user_ID: 'admin', url_Time: url_CCC_Time, data_Time: data_CCC_Time, url_Preset: url_CCC_Preset},
	{brand: 'DDD', send_Type: 'PUT', user_ID: 'admin', url_Time: url_DDD_Time, data_Time: data_DDD_Time, url_Preset: url_DDD_Preset}
]
