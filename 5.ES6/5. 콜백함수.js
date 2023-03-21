

//정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
/*
function showEvenNumber(n){
    
    for(let i=1;i<=n;i++){
        if(i%2===0) console.log(i);
    }
}
showEvenNumber(15);

function showOddNumber(n){

    for(let i=1;i<=n;i++){
        if(i%2===1) console.log(i);
    }
}
showOddNumber(15);

function showOddOREvenNumber(n,delim){

    for(let i=1;i<=n;i++){
        if(i%2===delim) console.log(i);
    }
}
showOddOREvenNumber(10,1);

function showMultipleNumber(n,multiNumber){

    for(let i=1;i<=n;i++){
        if(i % multiNumber === 0) console.log(i);
    }
}
showOddOREvenNumber(10,1);
*/

//콜백 함수 : 함수에 코드를 그대로 넘김
// function showMultipleNumber(n,multiNumber){
//     for(let i=1;i<=n;i++){
//         if(/*이 자리에 코드를 전달받을 순 없을까????라는 생각으로 시작*/) console.log(i);
//     }
// }

//코드를 함수에 감싸서 줌

function showNumber(n,code){

    for(let i=1; i<=n;i++){ //공통 특징 : for문 돌림
        if(code(i)){ //파라미터로 제어하는데 제한이 있으니까 
            console.log(i);
        }
    }
}

function test(n) {
    return n % 3 === 0 ;
}

// showNumber(10, function(n){return n % 3 === 0 ;});
// showNumber(10, n=> n % 3 === 0 );
showNumber(10, test);

function showMessage(message,howTo){
    //공통기능
    document.body.style.background = 'gray';

    setTimeout(()=>{
       howTo(message); 
        
       //공통기능
        alert(`하하호호!`); //alert : 비동기
    },500 );
    //개별기능
    howTo(message);

   
}

showMessage(`ㅎㅎㅎㅎ`, function(m){
    alert(m);
});