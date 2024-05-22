const modalOpenButton = document.querySelector('.modal_open_button');
const modalCloseButton = document.createElement('button');
const modalContainer = document.createElement('div');
const modalPopup = document.createElement('div');
const modalPopupImage = document.createElement('img');
const modalPopupTitle = document.createElement('p');
const modalPopupText = document.createElement('p');

function setupModalElements() {

    modalContainer.classList.add('modal_container');
    modalPopup.classList.add('modal_popup');
    modalPopupImage.classList.add('modal_popup_image');
    modalPopupTitle.classList.add('modal_popup_title');
    modalPopupText.classList.add('modal_popup_text');
    modalCloseButton.classList.add('modal_close_button');

    document.body.append(modalContainer);
    modalContainer.append(modalPopup);
    modalPopup.append(modalPopupImage, modalPopupTitle, modalPopupText, modalCloseButton);

    modalPopupImage.src = "resources/modal-cat.png";
    modalPopupTitle.textContent = 'Thank you!';
    modalPopupText.textContent = 'Lorem Ipsum is simply dummy text of the printing industry.';
    modalCloseButton.textContent = 'OK! I Love HODU';

}

setupModalElements()

modalOpenButton.addEventListener('click', function () {

    modalContainer.style.display = 'block';
    modalContainer.style.top = window.scrollY + 'px'

});

modalCloseButton.addEventListener('click', function () {

    modalContainer.style.display = 'none';

});