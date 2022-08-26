document.querySelectorAll('.accordeon-button').forEach(function(elem) {
    elem.addEventListener('click' , function(e) {
        e.target.classList.toggle('active')
    })
})