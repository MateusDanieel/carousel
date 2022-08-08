(() => {
    'use strict';

    let carouselElements = document.querySelectorAll('.carousel');
    let carouselItems = [];
    let dots = [];
    let buttonPrev = '';
    let buttonNext = '';
    
    carouselElements.forEach((carousel) => {
        
        carousel.innerHTML += 
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

        carouselItems = carousel.querySelectorAll('div.item');
    
        for(let i = 0; i < carouselItems.length; i++) {
            carousel.querySelector('.carousel__dots').innerHTML += `<li></li>`;
        }

        dots = carousel.querySelectorAll('li');
        buttonPrev = carousel.querySelector('.carousel__btn-controls .prev');
        buttonNext = carousel.querySelector('.carousel__btn-controls .next');

        dots.forEach((el, i, arr) => {
            arr[0].classList.add('active');
            carouselItems[0].classList.add('active');
            
            el.addEventListener('click', () => {
                arr.forEach((dotEl) => {
                    dotEl.classList.remove('active');
                });

                el.classList.add('active');

            });
        });        
    });
})();