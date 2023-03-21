
//함수 선언문 방식
/* function multi(n1,n2) {
    return n1*n2;
} */

//함수 표현식
 /* const multi = function(n1,n2) {
    return n1 * n2;
} */

//화살표 함수
const multi = (n1,n2) => n1 * n2;

const r1 = multi(10,3);
console.log(`r1: ${r1}`);

// function sayHello() {
//     console.log('안녕하세요');
// }

// const sayHello = function{
//     console.log('안녕하세요');
// }

const sayHello = () => console.log('안녕하세요');
sayHello();
const kim = {
    name : '김철수',
    age:30,
    greeting : multi(10,5), // ===50
    // greeting : multi,
    // greeting:sayHello,
    dance : function(){
        console.log('춤을 신나게 춥니다.');
    },
    // dance: () => console.log('춤을 신나게 춥니다.')
}
// console.log(kim.greeting);
console.log(kim.dance());

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
//화살표함수 pow를 작성해보세요.

const pow = n1 =>  n1 ** 2;
console.log(pow(4));

//함수 선언문과 함수 표현식(화살표함수)의 차이
console.log('================================');

//함수 선언문 : 함수 호출 먼저 가능
const r2 = sub(20,10);
function sub(n1,n2){
  return n1-n2;
}
console.log(`r2 : ${r2}`);


//함수 표현식 : 호출 먼저 불가능
const divide = (n1,n2) => n1 / n2;
const r3=divide(30,6);
console.log(`r3 : ${r3}`);

//실무에서 헬퍼 함수 선언 시 표현식으로 많이 사용 / 라이브러리에 공개하는 함수는 선언문 방식으로 많이 사용. 
//실무에서는 함수를 파일에 많이 나눠서 작성하고 로딩해서 쓰는데 로딩위치에 따라 함수 표현식은 호출 안될 수도 있으니까
//정해진 건 없음



