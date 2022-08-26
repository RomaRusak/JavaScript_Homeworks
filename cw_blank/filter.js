const filter = function() {

    document.querySelectorAll('.portfolio__filter li').forEach(function(elem) {
        elem.addEventListener('click' , function(e) {
            let getInfo = e.target.dataset['filter']
            document.querySelectorAll('.portfolio__list li').forEach(function(elem) {
                elem.classList.remove('hide')
                if (getInfo == 'all') return
                if (elem.dataset['filter'] != getInfo) elem.classList.add('hide')
            })
        })
    })
};

filter('portfolio'); 