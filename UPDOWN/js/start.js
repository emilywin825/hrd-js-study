

import gameData from "./gameData.js";
import {caseUp, caseDown, correctAnswer} from "./checkAnswer.js";

// 정의부
export default function gameStart(iconCount) { //이렇게 export 할 수 있음

    const $numbers = document.getElementById(`numbers`);

    //구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {

        for(let n=1;n<=iconCount;n++){

        //<div class='icon> 1~100 </div>
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = n;
        $icon.dataset.iconNumber = n; //만약 구슬에 숫자가 아니라 다른게 쓰여 있다면 어떻게 처리? -> 데이터 속성 이용해서 

        $numbers.appendChild($icon);
        }
    };
    makeIcon();

    //아이콘에 클릭 이벤트 부여하기 (박스에 버블링 걸어서 자식 요소에 다 먹게끔)    

    $numbers.onclick = e => {
        if(!e.target.matches(`#numbers .icon`)) return;

        // console.log(`${e.target.dataset.iconNumber}번 구슬 클릭함`);


        //사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber; //(e.target.dataset.iconNumber : String 타입임. + 붙여서 숫자로)
        console.log(gameData);

        //정답 검증 함수 (만약 다른 사람한테 만들어 달라고 했으면 다른 사람의 js 파일 로딩해서 사용)
        checkNumber();
    };
}

//정답을 검증하는 함수
function checkNumber($correctIcon) {

    const{secret, answer} = gameData;

    //실제 정답이랑 선택값을 비교
    if(secret === answer) { //정답인 경우
        correctAnswer();
    } else if(secret > answer){ //up인 경우
        caseUp($target);
    } else{ //down인 경우
        caseDown($target);
    }
}

