// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

var flag = confirm('게임을 다시 하시겠습니까?');
// if(flag==true)


var diff=+prompt(`~~~~~~~~재미있는 up&down 게임~~~~~~~~
                  \n[난이도를 설정하세요 ~~~!]
                  \n[1. 상(기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번) ]`);

var opp=0;
var randomNum=Math.floor(Math.random()*50)+1;
D
if(diff===1) opp=3;
else if(diff===2) opp=6;
else if(diff===3) opp=10;

var i; 

while(opp>0){
    var inputNum=+prompt(`[1 ~ 50번 사이의 무작위 숫자를 ${opp}번 안에 맞춰보세요!!!]  ${randomNum}`);
    opp--;
    if(opp===0) {
        alert (`기회를 모두 소진했습니다. GAME OVER!!\n정답은 ${randomNum}이였습니다.`);
        break;
    }
    if(randomNum>inputNum){
        alert(`UP!! 기회가 ${opp}번남았습니다.`);
    }
    else if(randomNum<inputNum){
        alert(`DOWN!!!! 기회가 ${opp}번남았습니다.`);
    }
    else if(randomNum === inputNum){
        alert('딩동댕~~~~~!!!!!');
        break;
    }
    
}






