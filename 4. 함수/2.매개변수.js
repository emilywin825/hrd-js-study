/* description: x~y까지 총합을 구하는 함수
    parameter:
        -begin: 누적총합의 시작값
        -end : 누적총합의 끝값
    return: 계산된 총합
*/


//매개변수(parameter): 함수를 정의할 때 외부에서 받아오는 값을 저장할 변수(begin, end etc)
function calcRangeTotal(begin ,end) {

    console.log(`x: ${begin}, y: ${end}`);

    var total =0; //총합을 저장할 변수
    for(var i=begin; i<=end; i++){
        total += i;
    }
    return total;
}

//인수(argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식
var result=calcRangeTotal(1, 10);
console.log(`result: ${result}`);
console.log(`result: ${calcRangeTotal(1, result -5)}`); 

//매개변수의 기본값
function sayHello(language='한국어'){ //아무것도 안 들어오면 한국어로 처리되고, 다른게 들어오면 수정됨

    //EES
    language = language ||'한국어'; //아무것도 입력안한 채로 이 코드 입력하면 한국어가 디폴트로 돼서 안녕하세요가 출력됨
                                    //||는 첫번째 truthy를 찾는 거니까 아무것도 입력 안하면 undefiend가 들어오는 데 undefiend는 falshy
    if(language==='한국어'){
        console.log(`안녕하세요!`);
    } else if(language==='영어'){
        console.log(`hello~`);
    }else if(language==='중국어'){
        console.log(`따자하오`);
    } else{
        console.log('크크루삥뽕~');
    }
}
sayHello();

function mySlice(arr, start, end){
    var copyArr=[];
    for(var i=start;i<end;i++){
        copyArr.push(arr[i]);
    }
    return copyArr;
}
console.log(mySlice([10,20,30,40.50],1,3));

//매개변수가 없는 함수
function selectRandomPet(){
    var pets=['멍멍이','짹짹이','꽥꽥이','어흥이'];
    return pets[Math.floor(Math.random()*pets.length)];
}

var randomPet = selectRandomPet();
console.log(`랜덤동물 : ${randomPet}`);
