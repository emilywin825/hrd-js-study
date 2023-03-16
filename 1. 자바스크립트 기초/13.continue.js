

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