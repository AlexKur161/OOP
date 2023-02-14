export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animation,
        autoPlay = false
        } = {}) {
        this.container = document.querySelector(container)
        this.slides = this.container.children
        this.btns = document.querySelectorAll(btns)
        this.modulesSection = document.querySelector('.modules')
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.activeClass = activeClass
        this.animation = animation
        this.autoPlay = autoPlay
        this.indexPage = 1
    }
}