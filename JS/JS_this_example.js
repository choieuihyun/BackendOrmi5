let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

let test = myObj.func1;
test() // 여기까진 생각좀 해봐야하고, 왜냐면 자바스크립트랑 자바랑 this가 좀 다름.
// window가 뜨는 이유는 test();를 호출하는 객체가 윈도우라서. 이건 확인좀 필요.



// 좋은 예제는 이정도
function MyConstructor() {
    this.val1 = 'hello this';
}

let myInstance = new MyConstructor();

console.log(myInstance.val1)