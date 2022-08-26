document.querySelectorAll('.tooltips-content-wrapper').forEach(function(elem) {
    elem.addEventListener('mouseenter' , function(e) {
        e.target.classList.add('active')
        let div = document.createElement('div')
        
    })

    elem.addEventListener('mouseleave' , function(e) {
        e.target.classList.remove('active')
    })
})