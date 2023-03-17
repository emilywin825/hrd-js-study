

var arr1 = [1,2,3,4]; //arr1은 배열의 주소가 저장되어 있음
var arr2 = arr1;

arr1[1]=999;
// arr2[0]=77;

console.log('arr1:',arr1);
console.log('arr2:',arr2);

console.log('==================');

//배열의 생성
//배열 변수 이름 관례 : 복수형, list 어미
var fruits = ['오렌지',
                '라임',
                '레몬'
            ]; //배열 리터럴

console.log(typeof fruits)
//js, java에서의 배열 -> 객체

console.log(`배열의 데이터 수 : ${fruits.length}`); //데이터가 ram에 저장될 때 실제로 1열로 다닥다닥 붙어서 저장됨. 그래서 length라고 함

//배열 데이터 참조
console.log(`첫번째 데이터 : ${fruits[0]}`);
console.log(`마지막 데이터 : ${fruits[fruits.length-1]}`);

//배열 요소 수정
fruits[1]='파인애플';
console.log(fruits);

//수정 시 주의사항 : 수정해야 할 인덱스에 값이 있는지 확인하고 수정해야 함.
// fruits[4]='초콜릿';
// console.log(fruits);

//배열 내부데이터 전체 참조 (순회 : travis)
//선형 탐색 시 사용 : 순차적으로 확인해보면서 찾기
var target = '바나나';
var findFlag=false;
for(var i=0;i<fruits.length;i++){
    // console.log(fruits[i]);
    if(fruits[i] === target){
        console.log(`${target} 과일은 존재함!`);
        findFlag=true;
        break;
    } 
}
if(!findFlag) console.log(`${target} 과일은 존재하지 않음!`);

//for ~ of 반복문 (배열 전용 반복문) : 전체 순회
var weekDays = ['월','화','수','목','금','토','일'];
for( var day of weekDays) {
    console.log(`${day}요일!`);
}

