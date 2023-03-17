

var n1=10;
var n2='20';

console.log(n1+n2);
//js 엔진은 숫자를 문자 타입으로 형변환함.

var n3 = n1 + ''; //빈 문자열을 더하면 문자가 됨
console.log(typeof n3);

var n4 = '100'-55;
console.log(n4);

var n5 = +'99';
console.log(typeof n5);

console.log('===========================');

//js에서는 0, ''(빈문자열), null, undefined, NaN는 거짓으로 판단함.
// Falsy - 콘솔에 출력 안됨
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6'); //숫자는 0만 제외하고 다 true
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8'); //스페이스도 데이터 차지함. 스페이스 조차 없어야 false
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10'); //if( [1,2,3,4] ) => true
//if(function()) => true

for(var n=1; n<=10; n++){
    if(n%2===0){
        console.log(n+' : 짝수입니다.');
    }else{
        console.log(n+' : 홀수입니다.');
    }
}

//논리가 들어갈 자리에 논리가 아닌게 들어가면 truthy,falsy를 확인함
// while('메롱'){  }