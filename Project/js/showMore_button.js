// "더보기" 버튼을 클릭하면 숨겨진 이미지를 선택 (.image-container img.hidden)합니다.
// 각 숨겨진 이미지에서 hidden 클래스를 제거하여 이미지를 표시합니다.
// "더보기" 버튼의 텍스트를 "이미지 로드 완료"로 바꾸고, 버튼을 비활성화 (disabled)합니다.


const showMoreButton = document.querySelector('.show_more_button');
const hiddenImages = document.querySelectorAll('.image_list_container .hidden_image');

showMoreButton.addEventListener('click', function () {

    if(showMoreButton.textContent === "Show more") {

        for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages.item(i).classList.remove('hidden_image');
        }

        this.textContent = "Hide"

    } else {

        for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages.item(i).classList.add('hidden_image');
        }

        this.textContent = 'Show more';

    }

});