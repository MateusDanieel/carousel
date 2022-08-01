(() => {
    'use strict';

    let carouselElement = document.getElementById('myCarousel');
    let carouselItems = document.querySelectorAll('#myCarousel .item');

    carouselElement.innerHTML += 
    `
        <div class="carousel__btn-controls">
            <button type="button" data-id="btPrev" class="carousel__btn-controls__bt prev">
                <i class="fa-solid fa-chevron-left fa-3x"></i>
            </button>

            <button type="button" data-id="btNext" class="carousel__btn-controls__bt next">
                <i class="fa-solid fa-chevron-right fa-3x"></i>
            </button>
        </div>

        <ul class="carousel__dots"></ul>
    `;

    for(let i = 0; i < carouselItems.length; i++) {
        carouselElement.querySelector('.carousel__dots').innerHTML += `<li></li>`
    }

    
})();