

// 10 ~ 0 카운트 다운
var count =10;
while(count >=0){
    console.log(count);
    count--;
}

// 반복 횟수 모르면 while 사용
// 횟수 알면 for 사용
// 작성글 10개씩 배열 -> for문

// 1~10까지 누적 총합
var taotal = 0;

var n = 1; //제어변수 (초기값 : begin) 

while(n<=10) { //조건식 (끝값 :end)

    //반복 코드 
    total +=n;

    n++; //증감식 (단계 : step)
}
console.log(`총합; ${total}`);
