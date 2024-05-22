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