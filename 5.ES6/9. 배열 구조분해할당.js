

const userNames = ['김철수','강감찬','박영희'];

const [kim, kang, park] = userNames; //오른쪽에 배열
console.log(kim);
console.log(kang);
console.log(park);

const [firstObj] = [{id:1},{id:2},{id:3}]
                    .filter(obj => obj.id >= 2); //id가 2보다 큰 것 중에 첫번째 값이 firstObj에 들어감
console.log(firstObj);

//변수 교환하기
let first = 10, second = 20;

[second, first] = [first, second];

console.log(first);
console.log(second);

//앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다.
const numbers = [1, 3, 5, 7, 9, 11];

const [one, three, ...others] = numbers;
console.log(others);

/*
const copyNumbers = numbers.slice();
const one = copyNumbers.shift(); //배열의 첫번째 요소 제거. 제거한 요소를 반환
const three = copyNumbers.shift();
const others = copyNumbers;
*/
console.log('======================');
console.log(one);
console.log(three);
console.log(others);
console.log(numbers);

//스프레드로 배열 간편복사
console.log('====================');
const foods = ['감튀','DQPC','징거버거'];
//const copyFoods = foods; --> 배열 주소 복사. copyFoods 배열 변경 시 foods 배열도 함께 변경됨
const copyFoods = [...foods]; //실제 데이터 복사. foods 배열을 펼쳐서 다시 배열어 넣음 //유사 배열을 찐 배열로 만들 때 이렇게 사용

console.log(copyFoods);