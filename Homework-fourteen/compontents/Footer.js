class Footer {
    constructor(dataOne,dataTwo) {
        this.element = null
        this.init(dataOne,dataTwo)
    }

    create(elementName,elementClassName) {
        
        let elem = document.createElement(elementName)

        elementClassName.forEach((attr) => {
            elem.setAttribute(attr[0], attr[1])
        })
        
        this.element = elem
    }

    init(dataOne,dataTwo) {
        this.create(dataOne,dataTwo)
    }
}

let footer = new Footer('footer', [['class', 'footer']])
export {footer}