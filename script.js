const tab = document.querySelectorAll('.tab-item')
const tabContent = document.querySelectorAll('.tab-content')

function removeClassTab(){
    tab.forEach((item) =>{
        item.classList.remove('tab-active')
    })
}
function removeClassContentTab(){
    tabContent.forEach((item) =>{
        item.classList.remove('tab-content-active')
    })
}

tab.forEach((item) =>{
    item.addEventListener('click' , removeClassTab)
})

tab.forEach((item) => {
    item.addEventListener('click' , removeClassContentTab)

})


tab.forEach((item) =>{
    item.addEventListener('click' , () =>{
    item.classList.add('tab-active')
    })
})

tab.forEach((item) =>{
    item.addEventListener('click' , (e) =>{
    const id = e.target.dataset.id
    tabContent[id].classList.add('tab-content-active')
    })
})
