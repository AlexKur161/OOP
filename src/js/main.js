import MainSlider from './modules/slider/mainSlider.js'
import MiniSlider from './modules/slider/miniSlider.js'
import StartVideo from './modules/playVideo.js'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'})
    slider.render()
    const video = new StartVideo('.overlay', '.showup__video .play', '.close')
    video.init()
    const childrenSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass : 'card-active',
        animation: '.card__title',
        autoPlay: true
    })
    childrenSlider.render()
    const exploreSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.slick-next',
        prev: '.slick-prev',
        activeClass : 'card-active',
        animation: '.card__title',
        autoPlay: true
    })
    exploreSlider.render()
    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass : 'feed__item-active'
    })
    feedSlider.render()
})