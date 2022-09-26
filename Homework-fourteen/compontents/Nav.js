import createElement from "../createElement.js"

class Nav {
    constructor(dataOne,dataTwo) {
        this.element = null
        this.init(dataOne,dataTwo)
    }

    create(elementName,elementClassName) {
        
        let elem = document.createElement(elementName)

        elementClassName.forEach((attr) => {
            elem.setAttribute(attr[0], attr[1])
        })

        let navList = createElement('ul', [['class', 'navlist']]);

        let navLiOne = createElement('li', [['class', 'products-li']]);
        let navLiTwo = createElement('li', [['class', 'cart-li']]);

        let navLinkOne = createElement('a', [['class', 'products-link'],['href', '#products']], 'Products');
        let navLinkTwo = createElement('a', [['class', 'cart-link'],['href', '#cart']], 'Cart');

        navLiOne.append(navLinkOne);
        navLiTwo.append(navLinkTwo)

        navList.append(navLiOne, navLiTwo);
        elem.append(navList)
        
        this.element = elem
    }

    init(dataOne,dataTwo) {
        this.create(dataOne,dataTwo)
    }
}

let nav = new Nav('nav', [['class', 'navClass'], ['id', 'navId']])
export {nav}