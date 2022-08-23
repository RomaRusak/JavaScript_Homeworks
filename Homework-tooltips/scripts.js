let tooltip = document.querySelectorAll('.tooltip')

tooltip.forEach(function(elem) {

    elem.addEventListener('mouseover', function() {
        if (this.children.length > 0) {
            let help = event.target.querySelector('.title-container')
            help.classList.add('visible')
            return
        }
        let help = document.createElement('div')
        help.classList.add('title-container')
        help.classList.add('visible')
        let helpText = document.createElement('p')
        helpText.innerHTML = event.target.title
        help.appendChild(helpText)
        elem.appendChild(help)
    })

    elem.addEventListener('mouseout', function() {
        let help = event.target.querySelector('.title-container')
        help.classList.remove('visible')
    })

})