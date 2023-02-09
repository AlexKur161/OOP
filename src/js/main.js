import Slider from './modules/slider'
import StartVideo from './modules/playVideo.js'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next')
    slider.render()
    const video = new StartVideo('.overlay', '.showup__video .play', '.close')
    video.init()
})