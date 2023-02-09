export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page)
        this.slides = this.page.children
        this.btns = document.querySelectorAll(btns)
        this.ascentSlide = document.querySelector(page)
        this.modulesSection = document.querySelector('.modules')
        this.indexPage = 1
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
    }
}