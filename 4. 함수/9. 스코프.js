

var x=10; //전역 변수 : 프로그램의 전체 영역에서 사용가능


//매개변수도 지역스코프를 가짐
function foo(z) {
    console.log(`지역변수 x 선언전 : ${x}`);
    var y=20+x; //지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y-z);

    var x='홍길동'; //js -> var x; x='홍길동'; 이렇게 분리하고 var x를 함수 맨 위로 올림 (= 호이스팅) 그래서 홍길동 선언 전에 x가 undefined로 나옴
    x='홍길동'; //이렇게 하면 ok
    console.log(`지역변수 x 선언후 : ${x}`);
    return y;
}

// console.log(z);
// console.log(y);

foo(50);
console.log(`함수호출 후 x의 값 : ${x}`);


//중첩 함수 : 함수안에 함수를 정의 (java x)

function outer(m) {
    var n='outer local n';
    var v='outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    //헬퍼 함수 : 호출이 함수 내부로 제한됨 (자바에서 캡슐화와 같은 역할)
    function inner() {
        console.log(n);
        var m='inner local m';
        var v='inner local v';
        console.log(m);
        console.log(v);
    }

    inner();
}

var m='global m';
// inner();
outer('outer param m');



