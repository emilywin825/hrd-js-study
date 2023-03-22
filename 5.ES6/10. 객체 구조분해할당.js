

const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// const empName=emp.empName;
// const age=emp.age;
// const birthDay=emp.birthDay;
// const {empName, birthDay, age} = emp; //객체는 순서 상관 없음
// console.log(`${empName}님의 나이는 ${age}이고 생일은 ${birthDay}`);


const {empName : en, birthDay : bd, age : a} = emp; //key값에 이름 붙여줄 수 있음
console.log(`${en}님의 나이는 ${bd}이고 생일은 ${a}`);

console.log('================================');

const {birthDay, age, ...rest} = emp; //birthDay와 age만 추출하고 나머지는 rest객체로 다시 묶음
console.log(birthDay);
console.log(age);
console.log(rest);

//객체 안전 복사 : 스프레드 -> 추가 프로퍼티 만들기도 가능
const copyEmp = { 
    ...emp,
    address:'서울시',
    empName:'망둥어',
}; //원본, 사본 개별적
// 디스트럭처링은 사본을 복사하는거라 변경해도 원본에 적용 x