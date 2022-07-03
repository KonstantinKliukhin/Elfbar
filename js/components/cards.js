import {slider} from './slides';

function cardsSlider(arrowRight, arrowLeft, slidesWrapper, sliderImage) {
    const cards = document.querySelectorAll('.products__card');
    cards.forEach((element) => {
        slider(arrowRight, arrowLeft, slidesWrapper, sliderImage, element);
    });
}

export default cardsSlider;
