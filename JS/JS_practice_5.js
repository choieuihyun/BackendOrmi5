function even() {

    let sum = 0;

    for(let i = 1; i <= 100; i++) {

        if(i % 2 == 0) // 여기서 ===로 엄격하게 하는 이유가 뭐임?
            sum += i;

    }

    console.log(sum)

}

even()

