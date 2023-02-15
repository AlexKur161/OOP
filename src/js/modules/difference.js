export default class Difference {
    constructor({oldEducation, newEducation, items}){
        this.oldEducation = document.querySelector(oldEducation)
        this.newEducation = document.querySelector(newEducation)
        this.items = items
        this.oldItems = this.oldEducation.querySelectorAll(this.items)
        this.newItems = this.newEducation.querySelectorAll(this.items)
        this.oldCounter = 0
        this.newCounter = 0
    }
    bindTrigger(btnItem, plusItem, counter) {
        this.btnPlus = btnItem.querySelector('.plus')
        this.btnPlus.addEventListener('click', () => {
            if(counter !== plusItem.length - 2){
                plusItem[counter].style.display = 'flex'
                counter++
            }else{
                plusItem[counter].style.display = 'flex'
                counter++
                plusItem[plusItem.length - 1].remove()
            }
        })
    }
    hideItem(items) {
        items.forEach((item, i, arr) => {
            if(i !== arr.length - 1){
                item.style.display = 'none'
            }
        });
    }
    init() {
        this.hideItem(this.oldItems)
        this.hideItem(this.newItems)
        this.bindTrigger(this.oldEducation, this.oldItems,  this.oldCounter)
        this.bindTrigger(this.newEducation, this.newItems,  this.newCounter)
    }
}