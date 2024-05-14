let grade = prompt("점수를 입력하세요?");

switch (true) {

    case grade >= 90: console.log("A");
        break;

    case grade >= 80: console.log("B");
        break;

    case grade >= 70: console.log("C");
        break;

    case grade >= 60: console.log("D");
        break;

    default:
        console.log("강해져서 돌아와라");


}