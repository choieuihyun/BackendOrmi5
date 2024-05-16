function test(){
    console.log('반복중입니다....');
    window.requestAnimationFrame(test);
}

window.requestAnimationFrame(test);