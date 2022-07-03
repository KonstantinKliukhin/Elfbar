import slider from "./slides";

function commentSlider(arrowRight, arrowLeft, slidesWrapper, sliderImage) {
    const commentSlider = document.querySelector('.comments__slider');
    slider(arrowRight, arrowLeft, slidesWrapper, sliderImage, commentSlider);
}

export default commentSlider;