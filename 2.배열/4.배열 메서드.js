

var foodList = ['닭꼬치','볶음밥','짜장면','족발'];
var count=0;
var target='짜장면';

// for(var food of foodList){
//     if(food===target){
//         break;
//     } 
//     count++;
// }

// console.log(`찾은 인덱스: ${count}`);

//indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색
// var index = foodList.indexOf(target);
// console.log(`찾은 인덱스:${index}`);

//slice(n,m) : n번 배열 ~ (m-1)번 배열을 일정부분 잘라 출력. 복사한 배열을 반환
// foodList.push('오뎅','순대국밥');
// console.log(foodList);

// var sliceFoods = foodList.slice(1,4);
// console.log(sliceFoods);
// console.log(foodList);

//2번부터 끝까지추출
// var sliceFoods2 = foodList.slice(2);
// console.log(`foodList.slice(2): ${sliceFoods2}`);

//원본배열을 그대로 복사
// var sliceFoods3 = foodList.slice();
// console.log(sliceFoods3);

//reverse() : 배열 역순으로 배치, 원본이 변함 -> 복사한 배열을 반환
console.log(`==============================`);
var nums = [10,20,30,40,50];
var copyNums =nums.slice();
copyNums.reverse();
console.log(copyNums);
console.log(nums);


//concat() : 배열 2개를 연결. 주어진 배열의 요소들을 맨뒤에 추가한 후 복사한 배열을 반환
console.log(`==============================`);
var arr1 = [10,20,30];
var arr2=[10,20,30,40,500];
var concatedArr=arr1.concat(arr2);
console.log(concatedArr);

//배열명.includes(데이터) : 배열의 특정 데이터가 존재하는지 확인 후 논리값으로 반환
var resultFlag = foodList.includes('닭꼬치');
var foodList = ['닭꼬치','볶음밥','짜장면','족발'];
var resultFlag = foodList[0].includes('닭꼬치');
console.log(resultFlag);

//splice() : 배열의 특정요소 제거,삽입 - 성능 bad, 원본에 반영
console.log(`=============================`);
var foodList = ['닭꼬치','볶음밥','짜장면','족발'];
// var newFoodList=foodList.splice(1,2); //1번 인덱스부터 2개 지워주세요
// console.log(newFoodList);
// console.log(foodList);

foodList.splice(0,1,'보쌈');
console.log(foodList);

//특정 요소에 삽입
//1번 지워지고 그 자리에 마라탕 들어감
foodList.splice(0,1,'마라탕');
console.log(foodList);

//2번 인덱스 부터 차례대로 아이스크림, 떡볶이 들어감
foodList.splice(2,0,'아이스크림','떡볶이');
console.log(foodList);

//2번부터 끝까지 제거
foodList.splice(2);
