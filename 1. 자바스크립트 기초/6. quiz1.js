
var num1=+prompt("첫번째 숫자를 입력!");
var num2=+prompt("두번째 숫자를 입력!");

var sum=0;
var n=num1;

if(num1>num2) {
    //swap
    var x;
    x=num1;
    num1=num2;
    num2=x;
}

while(n<=num2){
    sum+=n;
    n++;
}

alert(`${num1} ~ ${num2} 까지의 누적합 : ${sum}`);