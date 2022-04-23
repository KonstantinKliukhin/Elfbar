const head = document.querySelector('header'),
      burgerIcon = document.querySelector('.nav__burger-icon');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 5) {
        head.classList.add('nav--fixed');
    } else {
        head.classList.remove('nav--fixed');
    }
});

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('nav__burger-icon-active');
    head.classList.toggle('nav__burger-menu');
    if (burgerIcon.classList.contains('nav__burger-icon-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.removeAttribute('style');
    }
});

// SLIDER


// const cards = document.querySelectorAll('.products__card'),
//       arrowLeft = document.querySelectorAll('.arrow-left'),
//       arrowRight = document.querySelectorAll('.arrow-right');

// cards.forEach(element => {
//     let slide = sliderCounter(element);
//     element.addEventListener('click', (e) => {
//         if (Object.values(arrowRight).includes(e.target)) {
//             element.querySelector('.slider').style = `transform: translateX(${slide() * -width}px)`;
//             slider(element.querySelector('.slider'));
//         }
//     });
// });


// function sliderCounter(element) {
//     let slidesCount = element.querySelector('.slider').querySelectorAll('img').length;
//     slide = 0;
//     return function getSlideCount() {
//         console.log(slide, slidesCount);
//         if(slide === slidesCount -1) {
//             slide = 0;
//             return slide;
//         }
//         return ++slide;
//     };
// }

// function slider(element) {
//     let slidesCount = element.querySelector('.slider').querySelectorAll('img').length;
//     deletNoDigits(element.style.transform);

// }

// function deletNoDigits(string) {
//     return +string.replace(/\D/g, '');
// }



const cards = document.querySelectorAll('.products__card');

cards.forEach((element) => {
    slider('.arrow-right', '.arrow-left', '.slider', '.card__image', element, 'card__price');
});


function slider(rightArrow, leftArrow, slidesWrapper, img, elem, priceText) {

    const card = elem,
          next = card.querySelector(rightArrow),
          prev = card.querySelector(leftArrow),
          wrapper = card.querySelector(slidesWrapper),
          images = card.querySelectorAll(img),
          imageCount = images.length,
          price = card.querySelector(priceText),
          width = deletNoDigits(window.getComputedStyle(wrapper).width),
          totalWidth = width * imageCount;
         



    card.addEventListener('click', (e) => {

        if (next == e.target) {
            nextSlide(wrapper);
        }

        if (prev == e.target) {
            prevSlide(wrapper);
        }
    });

    function nextSlide(wrapper) {
        let transl = wrapper.style.transform;


        if (transl) {
            transl = deletNoDigits(transl);
        }

        if (totalWidth == transl + width) {
            wrapper.style = `transform: translateX(0px);`;
        } else {
            wrapper.style = `transform: translateX(${-transl - width}px)`;
        }
    }

    function prevSlide(wrapper) {
        let transl = wrapper.style.transform;

        if (transl) {
            transl = deletNoDigits(transl);
        } 

        if (transl == 0 || !transl) {
            wrapper.style = `transform: translateX(${-totalWidth + width}px);`;
        } else {
            wrapper.style = `transform: translateX(${-transl + width}px);`;
        }
    }


    function deletNoDigits(string) {
        return +string.replace(/\D/g, '');
    }
}


