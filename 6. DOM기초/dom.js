

<div id='box'>
<input id='abc' class='zzz xxx vvv' type='text'></input>
</div>

//태그를 보고 객체를 만듦
//띄어쓰기를 기준으로 파싱

let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};

console.log(input.parentNode);

//html코드가 자바스크립트 객체로 변환됨
//이걸 브라우저에서 해석해서 처리