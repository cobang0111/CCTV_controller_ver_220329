//쿠키 작동 함수 파일

function setCookie(cookie_key,cookie_value){
  timeInfo();
  now.setDate(now.getDate()+1);
  document.cookie=cookie_key+"="+cookie_value+";expires="+now.toUTCString();
}


function getCookie(cookie_key1){
  var getKey, getValue;
  var keyValue= document.cookie.split(';');
  for(var i= 0; i< keyValue.length; i++){
    getKey= keyValue[i].substr(0, keyValue[i].indexOf('='));
    getValue= keyValue[i].substr(keyValue[i].indexOf('=')+1);
    getKey= getKey.replace(/^\s+|\s+$/g,'');
    if(getKey== cookie_key1){
      return unescape(getValue);
    }
  }
}
