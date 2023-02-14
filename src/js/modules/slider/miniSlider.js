import MainSlider from "./mainSlider";

export default class MiniSlider extends MainSlider {
    constructor(container, next, prev, activeClass, animation, autoPlay){
        super(container, next, prev, activeClass, animation, autoPlay)
    }

    flexContainer() {
        this.container.style.cssText = `
        display: flex;
        flex-wrap:wrap;
        align-items: flex-start;
        overflow: hidden;
        `
    }

    triggerClass() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass)
        });
        this.slides[0].classList.add(this.activeClass)
        if(this.animation){
            this.slides.forEach(slide => {
                slide.querySelector(this.animation).style.opacity = 0.4
                slide.querySelector('.card__controls-arrow').style.opacity = 0
            });
            this.slides[0].querySelector(this.animation).style.opacity = 1
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = 1
        }
    }
    nextSlide() {
        do {
            this.container.append(this.slides[0])
        } while (this.slides[0].tagName == 'BUTTON');
        this.triggerClass()
    }

    slideIndex() {
        this.next.addEventListener('click', () => {this.nextSlide()})
        this.prev.addEventListener('click', () => {
            if(Array.from(this.slides).find(item => item.tagName == 'BUTTON')){
            const divSlide = Array.from(this.slides).filter(item => item.tagName == 'DIV')
            const prevSlide = divSlide[divSlide.length - 1]
            this.container.prepend(prevSlide)
            this.triggerClass()
            }else{
            const prevSlideChild = this.slides[this.slides.length - 1]
            this.container.prepend(prevSlideChild)
            this.triggerClass()
            }
        })
    }
    render() {
        this.flexContainer()
        this.slideIndex()
        if(this.autoPlay){
            setInterval(() => this.nextSlide(), 5000)
        }
    }
}