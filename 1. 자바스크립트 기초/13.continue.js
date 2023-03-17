

for(var i=1; i<=10; i++){
    if(i%2===0) continue; //밑에 있는 코드 스킵 후 반복문 다시 실행
    console.log(i);
}
console.log(`반복문 종료!`);

while(true){
    var n=+prompt(`숫자를 입력!!!`);
    if(n===0) break;
    else if(n===1) continue;
    else alert('메롱메롱메롱');
}

//회원 로그인 여부 확인
//브라우저 로컬 스토리지에 토큰이 존재하면 로그인한 것임
function isLogin(){
    //ACCESS_TOKEN : 3324sieflwejifpaejflqeiflidf -> 로그인 했을 때
    //ACCESS_TOKEN : null -> 로그인 안 했을 때
    //getItem은 해당 값이 있으면 값을 가져오고 없으면 null
    return !!localStorage.getItem('ACCESS_TOKEN');
    //로그인 했으면 3324sieflwejifpaejflqeiflidf이게 오니까 !!3324sieflwejifpaejflqeiflidf는 true
    //로그인 안했으면 null이 오니까 !!null이면 false
}