function num(a,b) {

    return a > b ? a : (a < b ? b : '같은 숫자입니다');

}

let result = num(prompt("a 입력"), prompt("b 입력"))
console.log(result)