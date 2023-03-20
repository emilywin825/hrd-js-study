

// 함수 정의 - 만든다.
function happyGreeting(yourName) {
    console.log(`${yourName} 안녕하세요! 노래 너무 좋아요`);
    console.log('오늘도 즐거운 하루되세요~~~');
}

//함수 호출 - 사용한다.

happyGreeting('뽀로로');

function makeLine(){
    console.log(`===========================`);
}

//원의 넓이를 자주 구한다. 원주율 * 반지름^2

function calcAreaCircle(r){
    const PI=3.141592;
    var area = PI * r ** 2;
    return area;
}

var r1=calcAreaCircle(5);

var foodList = ['닭꼬치','볶음밥','짜장면','족발'];
var index = foodList.indexOf('짜장면');
console.log(`찾은 인덱스:${index}`);
