var level=+prompt(`~~~~~~~~재미있는 사칙연산 게임~~~~~~~~
                \n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]
                \n=========================================
                \n~~~~~~~난이도를 설정합니다.~~~~~~~
                \n[1. 상(1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`);

var x=1; var y;

if(level===1) y=100;
else if(level===2) y=50;
else if (level===3) y=20;

var i=1;
var correct=0;
var wrong=0;

while(inputNum!=0){
    var firstNumber=Math.floor(Math.random()*(y-x+1))+x; 
    var secondNumber=Math.floor(Math.random()*(y-x+1))+x;
    var signNum=Math.floor(Math.random()*4)+1;
    var sign='';
    var result;

    if(signNum===1) {
        sign=`+`;
        result=firstNumber + secondNumber;
    }
    else if(signNum===2) {
        sign=`-`;
        result=firstNumber-secondNumber;
    }
    else if(signNum===3) {
        sign=`x`;
        result=firstNumber*secondNumber;
    }
    else if(signNum===4) {
        sign=`/`;
        result=Math.floor(firstNumber/secondNumber);
    }

    if(result===0) {
        continue;
    }

    var inputNum=+prompt(`Q${i}. ${firstNumber} ${sign} ${secondNumber} = ??`);
    i++;
    
    if(inputNum===0) break;
    else if(inputNum===result) {
        alert('정답입니다!');
        correct++;
    }
    else if(inputNum!=result) {
        alert('틀렸어요~');
        wrong++;
    }
}
alert(`게임을 종료합니다!);
======================
정답횟수 : ${correct}회 , 틀린횟수 : ${wrong}회`);