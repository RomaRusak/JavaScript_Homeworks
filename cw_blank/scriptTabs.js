document.querySelectorAll('.tabs-list li').forEach(function(elem, index) {
    elem.addEventListener('click' , function() {
        document.querySelectorAll('.tabs-list li').forEach((elem) => {
            elem.classList.remove('active')
        })
        elem.classList.add('active')
        addClassContent(index)
    })
})

function addClassContent(index) {
    let contentCollection = document.querySelectorAll('.tabs-content div')
    contentCollection.forEach((elem) => {
        elem.classList.remove('active')
    })
    contentCollection[index].classList.add('active')
}