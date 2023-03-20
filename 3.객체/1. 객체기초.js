

//객체 리터럴(값)
var dog={
    //프로퍼티 작성(변수아님!!!!!)
    name: '뽀삐', // === 'name': '뽀삐',
    kind: '진돗개',
    age: 3,
    //프로퍼티 키로 예약어 가능, 띄어쓰기 불가(문자열로 처리시 가능)
    //'for waiting':11;
    injection:true,
    favorite:['산책','간식'],
    hate:null,
    playWithChild:function() {}
}; //객체 : 데이터 여러개를 한번에 표현하기 위해서 사용한다고 생각 그러면 배열쓰면 되는거 아니야? 
   //-> 사용하기 불편. 배열은 순서가 중요한 경우에 사용
   //데이터를 표현하기 위한 이름이 필요할 때 -> 객체
   //게시판 댓글 : 배열로 관리(순서가 중요하니까), 오름차순으로 관리

var cat={
'name': '콩순이',
age:2,
injection:true,
favorite:['낮잠자기','방어지럽히기'],
kind:'블랙러시안',
}; 

console.log(typeof cat);

//객체에 저장된 데이터 참조;
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite[0]);

dog.age - cat.age;
dog.favorite.push('꼬리 흔들기');
console.log(dog.favorite);
console.log(`==============`);
console.log(dog.favorite.slice(1).splice(1,1)); //slice(1)가 사본 배열 return 하므로 그 사본배열에서 splice(1,1)하는 것 = 메소드 체인

//프로퍼티 참조 2
console.log(dog.injection);
console.log(dog['injection']);

//key를 변수에 저장
var fv= 'favorite';
//console.log(cat.fv); //안됨
console.log(cat[fv]);

//프로퍼티 값 수정
dog.age = 4;
cat.favorite[1]='실뭉치';
dog['injection']=false;

//프로퍼티 동적 추가
cat.owner='김철수';
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('=====================================');
//프로퍼티 존재 유무 확인
//주의사항! key를 반드시 문자열로 표기해야함.
var ageFlag = 'age' in cat;
console.log(ageFlag);

//master라는 프로퍼티가 없으면 추가해라
if(!('master' in cat)){
    cat['master']='김또또';
}

console.log('=====================================');
//객체를 순회하는 반복문
//key를 반복해서 추출해줌
for(var k in dog) {
    // console.log(k);
    // console.log(dog.k); 이렇게 하면 안됨. k의 타입을 찍으면 string이 나오는데 그렇게 되면 우리는 dog.'name'이런식으로 참조하게 되는 것.
    //                                      이러면 안되니까 밑의 방식으로
     console.log(dog[k]);
}


console.log('===================================')
//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};
console.log('===================================');
console.log(articles.articleList[1]); //객체
console.log(articles.articleList[1].writer);

var bbs=articles.articleList; //배열
bbs[0].writer;
for(var x in articles){
    //4바퀴
}

for(var y of bbs){
    //3바퀴
}
