window.onload = function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var arrImg = document.querySelectorAll('.slider-images__item');
    var maxIteration = arrImg.length / 4;
    var i = 0;
    var btnPopPrev = document.querySelector('.popup-prev');
    var btnPopNext = document.querySelector('.popup-next');
    var popupContent = document.querySelector('.popup-content');
    var data;

    function slideNext() {
        var sliderImages = document.querySelector('.slider-images');
        i++;
        var shift = i;

        if (i >= maxIteration) {
            i = 0;
            sliderImages.style.transform = "translateX(" + i + "%)";
        } else {
            shift *= 52;
            sliderImages.style.transform = "translateX(-" + shift + "%)";
        }


    }

    function slidePrev() {


        var shift = i;
        if (i <= 0) {
            shift = maxIteration - 1;
            shift *= 52;
            document.querySelector('.slider-images').style.transform = "translateX(-" + shift + "%)";
            i = maxIteration - 1;


        } else {
            shift *= 52;
            shift -= 52;
            document.querySelector('.slider-images').style.transform = "translateX(-" + shift + "%)";
            i--;
        }

    }

    function openPopup(e) {

        popupContent.style.backgroundImage = "url('" + this.src + "')";
        document.querySelector('.popup').style.display = "flex";
        data = this.dataset.index;


    }

    document.querySelector('.popup').addEventListener('click', function (e) {
        if (e.target == this) {
            this.style.display = "none";
        }
    });

    function popupPrev() {
        data--;
        if (data <= 0) {
            data = arrImg.length;
        }
        popupContent.style.backgroundImage = "url('" + document.querySelector("[data-index= '" + data + "']").src + "')";
    }

    function popupNext() {
        data++;
        if (data > arrImg.length) {
            data = 1;
        }
        popupContent.style.backgroundImage = "url('" + document.querySelector("[data-index= '" + data + "']").src + "')";
    }

    for (let q = 0; q < arrImg.length; q++) {
        arrImg[q].addEventListener('click', openPopup);
    }
    next.addEventListener('click', slideNext);
    prev.addEventListener('click', slidePrev);


    btnPopPrev.addEventListener('click', popupPrev);
    btnPopNext.addEventListener('click', popupNext);


};

