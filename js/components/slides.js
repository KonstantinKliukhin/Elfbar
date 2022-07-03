function slider(rightArrow, leftArrow, slidesWrapper, img, parent) {

    const parentELem = parent,
          next = parentELem.querySelector(rightArrow),
          prev = parentELem.querySelector(leftArrow),
          wrapper = parentELem.querySelector(slidesWrapper),
          images = parentELem.querySelectorAll(img),
          imageCount = images.length,
          width = deletNoDigits(window.getComputedStyle(wrapper).width),
          totalWidth = width * imageCount;

    parentELem.addEventListener('click', (e) => {

        if (next == e.target) {
            nextSlide(wrapper);
        }

        if (prev == e.target) {
            prevSlide(wrapper);
        }
    });

    function nextSlide(wrapper) {
        let movement = wrapper.style.transform;
        console.log(width);


        if (movement) {
            movement = deletNoDigits(movement);
        }

        if (totalWidth == movement + width) {
            wrapper.style = `transform: translateX(0px);`;
        } else {
            wrapper.style = `transform: translateX(${-movement - width}px)`;
        }
    }

    function prevSlide(wrapper) {
        let movement = wrapper.style.transform;

        if (movement) {
            movement = deletNoDigits(movement);
        } 

        if (movement == 0 || !movement) {
            wrapper.style = `transform: translateX(${-totalWidth + width}px);`;
        } else {
            wrapper.style = `transform: translateX(${-movement + width}px);`;
        }
    }


    function deletNoDigits(string) {
        return +string.replace(/\D/g, '');
    }

}
export {slider};

export default slider;
