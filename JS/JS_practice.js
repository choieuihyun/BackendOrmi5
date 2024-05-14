// 함수 표현식에서 이 표현식이라는 단어에 대한 이해를 해야할듯.

function add(val1, val2){
    if(String(val1 + val2) == 'NaN'){
        console.log('두 가지 수를 전달해야 합니다.');
    }
    return val1 + val2;
}

const sum = val1 + va12;
if(!sum) {

}

console.log(add(10, 30));
// 테스트
console.log(add(5, 3)); // 출력: 8
console.log(add(7));    // 출력: "두 가지 수를 전달해야 합니다"