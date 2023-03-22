



function upAndDown(){
    let count=0;
    
    return {
        increase : ()=>++count,
        decrease : ()=>--count,
    };
}

const upandown = upAndDown();
console.log(upandown.increase());
console.log(upandown.increase());
console.log(upandown.decrease());

/*
//count를 공유하고 싶음 밑의 방식으로는 안됨
const increase = (() => {
    let count=0;
    return () => ++count;
})();

const decrease = (() => {
    let count =0;
    return () => --count;
})();

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //-1
*/

/*
function conuterClouser() {
//이런 식으로 count를 공유
    let count=0;

    function increase(){
        return ++count;
    }

    function decrease(){
        return --count;
    }

    return{
        increase,
        decrease,
    };
}

const counter = conuterClouser();

const increase = counter.increase;
const decrease = counter.decrease;
console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1
*/

/*
//장바구니 기능에서 개수 + , - 하는 count 기능을 이런 방식으로 구현
const counter = (() => {
    //이런 식으로 count를 공유
        let count=0;
 
        return{
            increase : () => ++count,
            decrease : () => --count,
        };
})();

const {increase, decrease } = counter;

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1
*/

//나는 +,-를 범용적으로 하고 싶다 -> 콜백 함수 활용
function counterWithCbClosure() {
    let count = 0;

    function process(callback) {
        return count = callback(count);
    }

    return process;
}

const counter_=counterWithCbClosure();
console.log(counter_(function(c) {return ++c;})); //1
console.log(counter_(c => c+= 3)); //4
console.log(counter_(c => c**=2)); //16