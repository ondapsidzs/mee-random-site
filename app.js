var h1 = document.querySelector("#section-div-1-h1"),
    vector3 = document.querySelector("#vector3"),
    img = document.querySelector("#section-div-2-img"),
    imgBg = document.querySelector("#header-bg"),
    vector1 = document.querySelector('#vector1'),
    vector2 = document.querySelector('#vector2'),
    imgFadein,
    timeout = false,
    menuBtn = document.querySelector('#menu'),
    headerlinks = document.querySelector('#header-links'),
    closeBtn = document.querySelector('#close'),
    sliderImages = document.querySelectorAll('.img-slider-image')
    ;



function imageClick(source) {

    function fadein() {
        imgFadein = setTimeout(function () {
            imgBg.classList.remove('fadein');
            timeout = true;
            console.log(timeout);
        }, 500);
    }

    if (timeout === false) {
        clearTimeout(imgFadein);
        console.log(timeout);
    }

    //add animation
    imgBg.classList.add('fadein');

    //remove animation
    fadein();

    timeout = true;

    img.src = source;
    imgBg.src = source;

    vector1.classList.toggle("rotate-30");
    vector2.classList.toggle("rotate-n30");
}

function menuClick(event) {

    menuBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');

    if (headerlinks.style.display === "" || headerlinks.style.display === "none") {
        headerlinks.style.display = "flex";
    } else {
        headerlinks.style.display = "none";
    }


}

function saturate() {

    for (i = 0; i < sliderImages.length; i++) {
        if (sliderImages[i].src === img.src) {
            sliderImages[i].classList.add('saturate-100');
        } else {
            sliderImages[i].classList.remove('saturate-100')
        }
    }

}


