(() => {
    'use strict';

    // ADICIONA CONTROLADORES
    let carouselElement = document.querySelectorAll('.carousel');

    carouselElement.forEach((el, i) => {
        let carouselItems = el.querySelectorAll('.item');
        
        el.innerHTML += 
        `
            <div class="carousel__btn-controls">
                <button type="button" class="carousel__btn-controls__bt prev">
                    <i class="fa-solid fa-chevron-left fa-3x"></i>
                </button>

                <button type="button" class="carousel__btn-controls__bt next">
                    <i class="fa-solid fa-chevron-right fa-3x"></i>
                </button>
            </div>

            <ul class="carousel__dots"></ul>
        `;
    
        for(let i = 0; i < carouselItems.length; i++) {
            el.querySelector('.carousel__dots').innerHTML += `<li></li>`;
        }

        // ADICIONA FUNCIONALIDADES DOS CONTROLADORES
        let dots = el.querySelectorAll('li');
        let buttonPrev = el.querySelector('.carousel__btn-controls .prev');
        let buttonNext = el.querySelector('.carousel__btn-controls .next');

        carouselItems.forEach((item, index, array) => {
            dots[index].addEventListener('click', () => {

                array.forEach((arrayItem) => {
                    arrayItem.classList.remove('active');
                });

                dots.forEach((dotElement) => {
                    dotElement.classList.remove('active');
                });

                dots[index].classList.add('active');
                //item.classList.add('active');
            });
        });
    });

})();