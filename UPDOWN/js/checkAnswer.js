
function caseUp($icon){
    //1. #begin의 숫자값이 클릭값 +1로 변경
    document.getElementById('begin').textContent = +icon.dataset.iconNumber+1;

    //2. #down .selected 제거, #up에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');

    //3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
    const $numbers = document.getElementById('numbers');
    
    
    let $delTarget = $icon;
    //iterator 디자인 패턴
    while($delTarget) {
       
        $delTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;

    }

    $numbers.removeChild($icon.previousElementSibling);
}


function caseDown($icon){
    //1. #end의  숫자값이 클릭값 -1로 변경

    //2. #up.selected 제거, #down에 추가

    //3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
}



function correctAnswer(){
    //1. finish 아이디 박스에 class 'show' 부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    //2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick=null;

    //3. 클릭한 아이콘에 id 'move' 부여
    클릭한정답아이콘.setAttribute('id','move')


}

export {caseUp, caseDown, correctAnswer};