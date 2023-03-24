



//변수 정의, 함수 정의만 단독으로 외부함수 호출 x
//헬퍼함수는 호출가능




let x = 'foo'; //전역변수
// console.log(x);

function add(n1, n2){
    return n1 + n2;
}


// 여기서 정의된 변수와 함수를 내보내기
export { x, add}; //x와 add를 내보냄 