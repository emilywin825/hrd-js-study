

//자바스크립트의 함수는 함수를 리턴할 수 있음
/*
function calculator2(n1,n2) {

    //헬퍼함수(내부함수)
    function add() {
        return n1 + n2; //30리턴
    }

    return add; //함수 자체 리턴
}

const aaa=calculator2(10,20);
console.log(aaa());
*/


//클로저의 형태
// const calculator = (n1,n2) => () => n1 + n2;

function calculator(n1,n2) {
    return () => n1 + n2; //30리턴
}

const zzz = calculator(10,20);
console.log(typeof zzz); //function

const n = zzz();
console.log(n); //30


//===========================================================
//<카운트를 올리는 함수>

//전역변수를 쓴다면? 
let count = 0; //카운팅 변수 (전역 변수)
// const increase = () => ++count;
// console.log(increase());
// console.log(increase());
// count = 999; //전역변수의 문제점 : 중간에 개입이 있으면 값이 변함
// console.log(increase());

//그래서 지역변수를 쓴다면
// const increase = () => {
//     let count = 0; //지역 변수
//     return ++count;
// };
// console.log(increase()); //1
// console.log(increase()); //1
// console.log(increase()); //1 //함수가 끝나면 메모리에서 사라지므로 계속 1이됨.

//그래서 클로저 사용 : 전역변수의 남발을 방지
function increaseClouser(){
    let count=0;
    return () => ++count ; //클로저
}
/*
const increaseClouser = () => {
    let count = 0; //지역 변수
    return () => ++count;
}
*/
let plus=increaseClouser();
console.log(plus()); //1
console.log(plus()); //2
//count=999; //개입 불가
console.log(plus()); //3


//즉시 실행 함수 : 정의와 동시에 호출
//한번 사용 후 버리므로 이름 x
const result = (function(n1,n2){
    return n1+n2;
})(5,8);
console.log(result);

const increase = (function() {
    let count=0; //지역 변수
    return () => ++count;
})();
console.log(increase());
console.log(increase());
console.log(increase());

console.log(
    function(n1,n2,n3){
        return n1+n2+n3;
    }(1,2,3)
)