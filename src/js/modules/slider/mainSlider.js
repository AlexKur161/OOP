import Slider from '../slider'

export default class MainSlider extends Slider {
    constructor(container, btns){
        super(container, btns)
    }

    slideIndex (i) {
        if(i > this.slides.length) {
            this.indexPage = 1
        }else if(i < 1) {
            this.indexPage = this.slides.length
        }
        this.slides.forEach((slide,index) => {
            slide.style.display = 'none'
        });
        let sectionSlides = Array.from(this.slides)
        let show = sectionSlides.findIndex( sl => sl == this.modulesSection )
        if(show === this.indexPage){
                const modalOpen = document.querySelector('.hanson')
                setTimeout(() => {
                    modalOpen.style.display = 'block'
                },3000);
            }
        this.slides[this.indexPage - 1].style.display = 'block'
    }

    plusSlide(i){
        this.slideIndex(this.indexPage += i)
    }

    render() {
        try {
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.plusSlide(1)
                })
            });
            const logoClick = document.querySelectorAll('.slide-logo')
            logoClick.forEach(logo => {
                logo.addEventListener('click', (e) => {
                    e.preventDefault()
                    this.indexPage = 1
                    this.slideIndex(this.indexPage)
                })
            });
            this.slideIndex(this.indexPage)
        }catch(e){}
    }
}