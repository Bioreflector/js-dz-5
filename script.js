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
    const element = e.target
    element.classList.add('tab-active')
    const id = e.target.dataset.id
    content[id].classList.add('tab-content-active')
}

tab.forEach((item) =>{
    item.addEventListener('click' , removeClass)
})

tab.forEach((item) =>{
    item.addEventListener('click' , addClass)
})
