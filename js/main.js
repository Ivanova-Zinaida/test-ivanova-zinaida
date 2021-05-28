let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            img = this.querySelector("img").src,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current'),
            currentImg=select.querySelector('img').src;
        currentText.innerText = text;
        currentImg.srs = img;
        console.log(currentImg);
        select.classList.remove('is-active');


    }

};


select();