$('.single-product__slider--mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
})
$('.slider-nav').slick({
    slidesToShow: $('.slider-nav div').length,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    variableWidth: true,
    infinite: false,
})

const selectItems = document.querySelectorAll('.select-item')

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        selectItems.forEach(el => el.classList.remove('active'))

        item.classList.add('active')
    })
})

const accordeons = document.querySelectorAll('.accordeon')

accordeons.forEach(item => {
    item.querySelector('.accordeon__label').addEventListener('click', () => {
        item.classList.toggle('active')
    })
})

const selectBox = document.querySelectorAll('.select-box')

selectBox.forEach(box => {
    box.querySelectorAll('.select-box__item').forEach(item => {
        item.addEventListener('click', () => {
            box.querySelectorAll('.select-box__item').forEach(item => item.classList.remove('active'))
            item.classList.add('active')
        })
    })
})

const tooltip = document.querySelector('span.product_label-tooltip-span')

tooltip.addEventListener('click', e => {
    e.stopPropagation()
    document.querySelector('.product_label-tooltip.product_label-tooltip--visible').classList.toggle('active')
})
