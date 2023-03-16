
var num=+prompt("양의 정수를 입력!");

var s='';
var i=1;
while(i<=num){
    if(i%2===1){
        s+='+';
    }
    else if(i%2===0){
        s+='-';
    }
    i++;
}
alert(s);