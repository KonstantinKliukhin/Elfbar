import cardsSlider from "./components/cards";
import navBar from "./components/navbar";
import modal from './components/modal';
import commentSlider from './components/commentsSlider';

import '../css/normalize.css';
import '../css/style.css';

window.addEventListener('DOMContentLoaded', () => {
    navBar('header', '.nav__burger-icon');
    cardsSlider('.arrow-right', '.arrow-left', '.slider', '.slider__image');
    modal('button.card__btn', '.modal', '.modal__cancel', '.modal__list');
    commentSlider('.arrow-right', '.arrow-left', '.slider', '.slider__image');
});


