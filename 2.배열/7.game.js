

//게임 인원 등록
var playerNumber=+prompt(`게임 인원 (2 ~ 4명)`);
//게임 인원 제한
if(playerNumber<2 || playerNumber>4){
    while(true){
        var playerNumber=+prompt(`게임 인원은 최소 2명, 최대 4명입니다.\n게임 인원을 다시 설정해 주세요.`);
        if(playerNumber>=2 && playerNumber<=4) break;
    }
}


//플레이어 이름 등록
var playerArray=[];
alert(`플레이어 이름을 등록합니다.`);
for(var i=0; i<playerNumber;i++){
    var playerName=prompt(`${i+1}번 플레이어 이름`);
    playerArray.push(playerName);
}
alert(`[${playerArray}] 참가!`);


//실탄 개수 등록
var bullet=+prompt(`실탄 개수 (1 ~ 5개)`);
//실탄 개수 제한
if(bullet<1 || playerNumber>5){
    while(true){
        var bullet=+prompt(`실탄 개수는 최소 1개, 최대 5개입니다.\n실탄 개수를 다시 설정해 주세요.`);
        if(playerNumber>=1 && playerNumber<=5) break;
    }
}

//실탄 배열에 랜덤으로 넣기
//처음에 배열을 모두 false로 처리했다가 랜덤 함수에서 나오는 숫자의 인덱스를 true로 변환
//===============================여기서부터 다시 보기=====================================================
var bulletArray = new Array(bullet).fill(false); //실탄 배열을 모두 flase로 초기화하고 
var bulletNumberCount=0;
while(true){
    var bulletNumber=Math.floor(Math.random()*(bullet)); //실탄을 넣을 인덱스 번호를 랜덤으로 정하고
    alert(bulletNumber);
    if(bulletArray[bulletNumber]===false){ //랜덤으로 정해진 인덱스 번호의 요소가 false이면
        bulletArray[bulletNumber]=true; //true로 바꿈
        bulletNumberCount++;   
        alert(bulletNumberCount);
    }  
    alert(`힛`);
    if(bulletNumberCount===bullet) break;
}

//시작 순서 랜덤으로 정하기(0번 ~ playerNumber-1 까지)
var GameStartNumber=Math.floor(Math.random()*(playerNumber-1));
alert(`총을 받았습니다. ${playerArray[GameStartNumber]}부터 시작합니다. ${GameStartNumber}`);

//게임 시작
prompt(`[${playerArray[GameStartNumber]}님의 턴! 탄창을 회전합니다\n#엔터를누르면 격발합니다.`);
var Gameplayer=GameStartNumber;
for(var i=0; i<playerArray.length; i++){
    if(bulletArray[i]===true){
        var playerArrayCopy=playerArray;
        playerArrayCopy.slice(Gameplayer,1);
        alert(`빵!! [${playerArray[Gameplayer]}]님 사망...RIP\n남은 인원으로 게임을 계속합니다.\n생존한 인원 : ${playerArrayCopy}`);
    }
}