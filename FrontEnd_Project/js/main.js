const showMoreButton = document.querySelector('.show_more_button');
const hiddenImages = document.querySelectorAll('.image_list_container .hidden_image');
const hiddenImages2 = document.querySelector('.image_list_container');

showMoreButton.addEventListener('click', function (event) {

    // 교안에 이벤트 위임이 있는데 이것도 이벤트 위임인가?
    if (showMoreButton.textContent === "Show more") {

        for (let i = 0; i < 6; i++) {

            const li = document.createElement('li');
            li.className = 'add-image-item';

            const img = document.createElement('img');
            img.src = "https://picsum.photos/200/200?random=" + (hiddenImages2.children.length + i); // 이미지 주소는 여기에 추가

            hiddenImages2.appendChild(li);
            li.appendChild(img);

        }

        this.textContent = "Hide";

    } else {

        const addImageItems = hiddenImages2.querySelectorAll('.add-image-item');
        for (let i = 0; i < addImageItems.length; i++) {
            hiddenImages2.removeChild(addImageItems[i]);
        }

        this.textContent = 'Show more';

    }


});

// showMoreButton.addEventListener('click', function (event) {
//
//     // 교안에 이벤트 위임이 있는데 이것도 이벤트 위임인가?
//     if(showMoreButton.textContent === "Show more") {
//
//         for (let i = 0; i < hiddenImages.length; i++) {
//
//
//             //hiddenImages.item(i).classList.remove('hidden_image');
//         }
//
//         this.textContent = "Hide"
//
//     } else {
//
//         for (let i = 0; i < hiddenImages.length; i++) {
//             hiddenImages.item(i).classList.add('hidden_image');
//         }
//
//         this.textContent = 'Show more';
//
//     }
//
// });


const container = document.querySelector('.map');
const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

const map = new kakao.maps.Map(container, options);



const hoverButton = document.querySelector('.hover_button');
hoverButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


