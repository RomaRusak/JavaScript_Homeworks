const gallery = function() {
    let galleryThumbs = document.querySelectorAll('.gallery__thumbs a')
    let close = document.querySelector('.gallery__preview button')
    
    galleryThumbs.forEach(function(elem) {
        elem.addEventListener('click' , function(e) {
            e.preventDefault()
            let geInfo = e.target.getAttribute('src')
            document.querySelector('.gallery__preview').classList.remove('hidden')
            showElement()
            function showElement() {
                if (document.querySelector('.gallery__preview').firstElementChild.classList.contains('bigImg')) {
                    document.querySelector('.gallery__preview img').setAttribute('src' , geInfo)
                    return
                }
                let img = document.createElement('img')
                img.setAttribute('src' , geInfo),
                img.classList.add('bigImg')
                document.querySelector('.gallery__preview').insertBefore(img, document.querySelector('.gallery__preview_close'))
            }
        })
    })

    close.addEventListener('click' , function() {
        document.querySelector('.gallery__preview').classList.add('hidden')
    })

    close.addEventListener('mouseenter' , function() {
        document.querySelector('.gallery__preview img').style.opacity = '.6'
    })

    close.addEventListener('mouseleave' , function() {
        document.querySelector('.gallery__preview img').style.opacity = '1'
    })
};

gallery('gallery'); // id