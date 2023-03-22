

const userList=[
    {
        account:'abc1234',
        userName:'김지원',
        job:'가수',
        address:'서울',
        hobbys:['수영', '축구', '테니스'],
    },
    {
        account:'jjjj1234',
        userName:'김동혁',
        job:'댄서',
        address:'서울',
        hobbys:['축구', '테니스'],
    },
    {
        account:'xxxx1234',
        userName:'구준회',
        job:'작곡가',
        address:'경기',
        hobbys:['노래부르기', '축구', '테니스','영화감상'],
    },
    {
        account:'kkkk1234',
        userName:'송윤형',
        job:'배우',
        address:'서울',
        hobbys:['요리하기', '축구'],
    },    
];

//회원목록에서 회원정보를 출력하는 함수
/*
function alertUserInfo(wannaSay) {
    for(const user of userList) {
        wannaSay(user);
    }
}

alertUserInfo(user => console.log(`나는 ${user.userName}님이시다! 우히히`) );
*/


function userInfo(code){
    // userList.forEach(user=>code(user));
    userList.forEach(function(user){
        code(user);
    })
}

userInfo(arr => console.log(arr.hobbys));



//배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(user => { //userList에서 뽑아서  user에 담음
    console.log(user.address);
}); 


const numbers=[10,20,30,40];
let sum=0;
numbers.forEach(number=> sum+=number );
console.log(sum);

//취미가 딱 2개인 회원들만 
//필터링해서 새로운 배열에 담아줘
function filter2Hobby(){
    //새로운 배열 생성
    const filteredArray = [];
    for(const user of userList) {
        if(user.hobbys.legnth===2){ //취미가 2개인사라들만
            filteredArray.push(user);
        }
    }
    return filteredArray;
}
const newArray2 = filter2Hobby();
console.log(newArray2);


//특정 필터조건에 의해 필터링하는 함수
function filter(condition){
    //새로운 배열 생성
    const filteredArray = [];
    for(const user of userList) {
        if(condition(user)){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}
// const newArray = filter(u=>u.address==='서울');
const newArray = filter(u=>u.hobbys.length>=3);
console.log(newArray);


//배열 고차함수 filter()
//특정 조건에 의해 필터링된 배열을 반환
console.log('=========================');
const numberArray=[1,2,3,4,5,6,7,8,9,10];
//predicate : 콜백함수 조건
const arr=numberArray.filter(number=>number%5===0);
console.log(arr);

const newArr = numberArray.filter(n => n%2===0);
console.log(newArr);

const user1
    =userList.filter(user => user.account==='abc1234');
console.log(user1);

console.log('====================');
//배열 고차함수 map()
//특정 배열에서 특정 조건에 맞는 값들만 따로 모아서
//매핑한 배열을 반환
const doubles = numbers.map(n => n ** 2);
console.log(doubles);

const plusTwo = numberArray.map(n=>n+2);
console.log(plusTwo);

const userNames = userList.map(user => user.userName);
console.log(userNames);

//filter vs map
//filter : 필터링 => 원래 배열의 길이보다 작아질 수 있음
//map : 조건에 맞게 매핑 => 원래 배열의 길이 유지

//userList에서 원하는 프로퍼티 값을 매핑하는 함수 //^^^^^^^^^^^^^^^^
function myMap(code){
    const propertiesarr=[];
    for(const user of userList){
        let userName = code(user); 
        propertiesarr.push(userName);
    }   
    return propertiesarr;
}
const userNames2 = myMap(user => user.userName);
console.log(userNames2);
const nameeee=userList.map(user=>user.account);
console.log(nameeee);


const appleBasket = [
    {
        color: 'green',
        sweet: 13
    },
    {
        color: 'red',
        sweet: 14
    },
    {
        color: 'red',
        sweet: 11
    },
    {
        color: 'green',
        sweet: 6
    },
    {
        color: 'green',
        sweet: 7
    },
    {
        color: 'green',
        sweet: 8
    },
];

//사과 중 녹색이면서 당도가 9이상인 사과만 선별하여
//이 사과는 xxx색이며 당도가 xxx입니다. 라는 문자열이 모여있는 배열을 리턴하세요. 

console.log('=======================');
const filteredApples = 
    appleBasket
        .filter(apple => apple.color === 'green' && apple.sweet >= 9);
const mappedApples = 
    filteredApples
        .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);

console.log(mappedApples);



// userList에서 서울사는 user들의
//첫번째 취미만 배열에 모아서 리턴 후
//회원의 첫번째 취미는 xxx입니다. 출력

console.log('=======================');
const filterUsersHobby=
userList
.filter(user => user.address === '서울') //[{5},{5},{5}]
.map(user =>({
    firstHobby:user.hobbys[0],
    name:user.userName
})  ) //['','','']
.forEach(info =>{
    console.log(`${info.name}회원의 첫번째 취미는 ${info.hobby}입니다.`);
});


//userList에서 이름에 '김'이 들어가고, 서울사는 user들의
//취미만 필터링 하시오.
console.log('=======================');
var filterUsersHobby2=
    userList
        .filter(user=>user.userName.includes('김') && user.address ==='서울' )
        .map(users=>users.hobbys);
console.log(filterUsersHobby2);

//appleBasket에서 color : green && sweet : 짝수인 
//사과의 인덱스 번호를 필터링
console.log('======!!!!!!==========');

console.log('======!!!!!!==========');