export default class App {

    constructor(dataOne, dataTwo) {
        this.element = null
        this.init(dataOne, dataTwo)
    }

    create(elemContent) {
        this.element = elemContent
    }

    render(parentNode) {
       document.querySelector(parentNode).innerHTML = this.element
    }

    async getDate() {
        if (localStorage.products && localStorage.products.length > 0) return
        await fetch('https://fakestoreapi.com/products')
        .then(function(resolve) {
            return resolve.json()
        })
        .then(function(resolve) {
            let localStorageArr = []
            resolve.forEach(element => {
                localStorageArr.push(element)
            });
            localStorageArr = JSON.stringify(localStorageArr)
            localStorage.setItem('products', localStorageArr)
        })
    }

    init(dataOne, dataTwo) {
        this.create(dataOne)
        this.getDate()
        this.render(dataTwo)
}
}