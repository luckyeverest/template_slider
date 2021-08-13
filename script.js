let offset = 0 //смещение от левого края

const sliderLine = document.querySelector('.slider-line')

document.querySelector('.btn-next').addEventListener('click', function () {
    offset = offset + 300 // добавление к смещению от левого края 300

    if (offset > 600) {//ограничение перемещения на ширина всех картинок
        offset = 0
    }

    sliderLine.style.left = -offset + 'px' //добавление стиля position left на величену (минус)offset
})

document.querySelector('.btn-prev').addEventListener('click', function () {
    offset = offset - 300 // добавление к смещению от левого края -300

    if (offset < 0) {//ограничение перемещения 
        offset = 600 //ширина всех картинок
    }

    sliderLine.style.left = -offset + 'px' //добавление стиля position left на величену (минус)offset
})