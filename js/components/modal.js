function modal(buttons, modalSection, cancelBtn, modalList) {
    const btns = document.querySelectorAll(buttons),
          modal = document.querySelector(modalSection),
          body = document.body,
          cancel = document.querySelector(cancelBtn),
          list = document.querySelector(modalList);

    function openModal(btn) {
        modal.classList.remove('hidden');
        body.style.overflow = 'hidden';
        switch (btn) {
            case btns[0]:
                list.innerHTML = `
                    <li>Red Bull Strawberry</li>
                    <li>Banana Ice</li>
                    <li>Grape</li>
                    <li>Watermelon</li>
                    <li>Peach Mango Guava</li>
                    <li>Strawberry Grape</li>
                    <li>Pineapple Peach Mango</li>
                    <li>Sour Apple</li>
                    <li>Coffee Tobacco</li>
                    <li>Banana Milk</li>
                    <li>Blueberry</li>
                    <li>Mango Peach Watermelon</li>
                    <li>Red Bull Grapes</li>
                    <li>Kiwi Passionfruit Guava</li>
                    <li>Strawberry Banana</li>
                    <li>Pink Lemonade</li>
                    <li>Mango</li>
                    <li>Red Bull Strawberry</li>
                `;
                break;
            
            case btns[1]: 
                list.innerHTML = `
                    <li>Banana Milk</li>
                    <li>Blue Razz Lemonade</li>
                    <li>Pink Lemonade</li>
                    <li>Strawberry Ice Cream</li>
                    <li>Peach Ice</li>
                    <li>Sour Apple</li>
                    <li>Coconut Melon</li>
                    <li>Kiwi Passionfruit Guava</li>
                    <li>Mango Peach Watermelon</li>
                    <li>Strawberry Energy</li>
                    `;
                break;
            
            case btns[2]: 
                list.innerHTML = `
                    <li>Coffee Tobacco</li>
                    <li>Pineapple Ice</li>
                    <li>Banana Milk</li>
                    <li>Sour Apple</li>
                    <li>Strawberry Grape</li>
                    <li>Peach Mango Guava</li>
                    <li>Juicy Peaches</li>
                    <li>Grape Energy</li>
                    <li>Watermelon Lemon</li>
                    <li>Mango Peach Watermelon</li>
                    `;
                    break;

            case btns[3]:
                list.innerHTML = `
                    <li>Strawberry Kiwi</li>
                    <li>Banana</li>
                    <li>Pineapple</li>
                    <li>Candy</li>
                    <li>Cherry Lemon Peach</li>
                    <li>Blueberry</li>
                    <li>Mango Peach Pineapple</li>
                    <li>Melon Strawberry Apple</li>
                    <li>Apple Juice</li>
                    <li>Watermelon</li>
                    <li>Mango</li>
                    <li>Lychee Ice</li>
                `;
                break;
            default:
                break;
        } 
    }

    function closeModal() {
        modal.classList.add('hidden');
        body.removeAttribute('style');
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(btn);
        });
    });

    cancel.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

}
export default modal;
