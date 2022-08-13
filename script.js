const tab = document.querySelectorAll('.tab-item')
const content = document.querySelectorAll('.tab-content')

function removeClass(){
    tab.forEach((tabItem) =>{
        tabItem.classList.remove('tab-active')
    })
    content.forEach((contentItem) =>{
        contentItem.classList.remove('tab-content-active')
    })
}
function addClass(e){
    const {target} = e
    target.classList.add('tab-active')
    const id = target.dataset.id
    content.forEach((item) =>{
        if(item.dataset.id === id){
            item.classList.add('tab-content-active')
        }
    })
}

tab.forEach((item) =>{
    item.addEventListener('click' , removeClass)
})

tab.forEach((item) =>{
    item.addEventListener('click' , addClass)
})
