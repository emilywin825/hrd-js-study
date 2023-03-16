var sentence = `<ul>
                    <li>
                        <a>hhh</a>
                    </li>
                <ul>`;

console.log(sentence);

var month = 4;
var day = 5;
var anniversary='식목일';

// var message = month + '월'

var message=`${month}월 ${day}일은 ${anniversary} 입니다.`
console.log(message);

//논리
var flag = false;
console.log(typeof flag);

//null
var userAge=5;
 userAge=0; // 0도 없음의 의미가 아닌 또 다른 데이터
userAge=null; //null은 데이터가 아니고 그냥 비어있음을 의미
