
//외부 js 불러오기
// import {add} from './foo.js';
// import {x} from './bar.js';

import * as foo from './foo.js';
import * as bar from './bar.js';




//<팀의 통합 파일>
// 메인 실행 파일
//실행 코드만 입력 : 함수 호출
//함수 정의, 클래스 정의, 변수정의 xxxxx


// console.log(add(10,20));
// console.log(`x:${x}`);

console.log(add(foo.add(10,20)));
console.log(`1x:${bar.x}`);
console.log(`1x:${foo.x}`);