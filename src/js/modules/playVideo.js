export default class StartVideo {
    constructor(overlay, btn, close){
        this.overlay = document.querySelector(overlay)
        this.btns = document.querySelectorAll(btn)
        this.close = document.querySelectorAll(close)
        
    }

    btnEvent() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                console.log(document.querySelector('iframe#frame'))
                if(document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex'
                }else{
                const path = item.getAttribute('data-url')
                this.create(path)
                }
            })
        })
        
        this.close.forEach( itemClose => {
            itemClose.addEventListener('click', () => {
                this.overlay.style.display = 'none'
                // this.removePlayer()
                this.player.stopVideo()
            })
        })
    }

    create(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url
        });
        this.overlay.style.display = 'flex'
    }

    // removePlayer() {
    //     this.frame = document.querySelector('#frame')
    //     this.frame.remove()
    //     this.videoWrap = document.querySelector('.overlay .video')
    //     this.frame = this.videoWrap.insertAdjacentHTML('afterbegin', '<div id="frame"></div>')
    // }

    init(){
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);   
        this.btnEvent()     
    }
}