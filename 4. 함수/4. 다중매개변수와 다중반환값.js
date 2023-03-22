

//multi parameter : 매개변수가 n개인 경우
//집합 자료구조를 매개변수로 사용
//[배열, 객체]

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수


// 스프레드(ES6)
function addAll(...numbers){ //... 붙이면 매개변수에서 배열처리 안해도 알아서 배열로 처리해줌 -> numbers[1,2,3,4]되는거임.
    var total=0;
    for(var n of numbers){
        total+=n;
    }
    return total;
}
var r1=addAll(1,2,3,4);
console.log(`r1:${r1}`);

function foo(arr1,arr2){ //배열 여러개 전달 시 ...문법 사용 x 어디서부터 어디까지 arr1에 넣어야하는지 알 수 없으므로

}
//foo(10,20,500,1000,1500); -> x
foo([10,20],[500,1000,1500]);

console.log(`======================`);

//함수의 리턴값은 언제나 하나!
//2개의 매개변수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶어
function operateAll(n1,n2){
    // var resultSet=[
    //         addAll(n1,n2),
    //         n1-n2,
    //         n1*n2,
    //         n1/n2
    //     ]; 
    // return resultSet;

    //위에 배열의 경우 뺄셈 나눗셈의 위치가 바뀌면 밑에 console.log찍을 때도 수정해줘야 하므로 객체를 쓰는 것이 좋음
    return {
        plus:addAll(n1,n2),
        minus:n1-n2,
        multiply:n1*n2,
        divide:n1/n2
    };
}

var result=operateAll(10,5);
// console.log(`덧셈결과 : ${result[0]}`);
// console.log(`뺄셈결과 : ${result[1]}`);
// console.log(`곱셈결과 : ${result[2]}`);
// console.log(`나눗셈결과 : ${result[3]}`);
console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺄셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiply}`);
console.log(`나눗셈결과 : ${result.divide}`);
var r2=operateAll(100,4)[1]; //가능 : operateAll(100,4) -> 배열
console.log(`r2:${r2}`);


