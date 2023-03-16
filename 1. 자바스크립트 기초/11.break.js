

outer:for(var i=0;i<3;i++){
    inener:for(var j=0;j<3;j++){
        if(i==j){
            break outer;
        }
    }
}












//50000번의 루프 중 1~10사이의 랜덤숫자 중 3이 나오면 반복을 중간에 멈추고 싶다.

for(var i=0;i<50000;i++){
    var rn=Math.floor(Math.random()*10)+1;
    console.log(rn);
    if(rn===3){
        break;
    }
}