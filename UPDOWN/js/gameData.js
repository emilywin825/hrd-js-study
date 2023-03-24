

import {gameData} from './gameData.js';


//게임 데이터
const gameData = {
    secret:makeRandomNumber(100), //실제 정답
    answer:null, //사용자의 선택값
    min:1,  //최소범위설정
    max:100 //최대범위설정
};

//랜덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;
}

//function makeRandomNumber(range) 공개 안하고 싶으면 gameData만 내보내면 됨
// export{ gameData };
//내보낼 데이터가 하나
export default gameData; //이렇게 하면 app.js에서 이거 import 할 때 이름 변경 가능 import 짜장면 from ./gameData.js 이렇게