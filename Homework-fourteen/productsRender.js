import {cartRender} from "./index.js"
import createElement from "./createElement.js"

export default class ProductsRender {

    constructor() {

        this.productsArray = null
        this.productsArrayTwo = null
        this.init()
        
    }

    render() {
       let main = document.querySelector('.mainClass')
       this.productsArrayTwo.forEach((product) => {
        let productWrapper = createElement('div', [['class', 'wrapper'] ,['data-id', product.id], ['data-cost', product.price]],)
        let productTitle = createElement('h2', [['class', 'productName']], product.title)
        let productDescription = createElement('p', [['class', 'productDescription']], product.description)
        let productPrice = createElement('p', [['class', 'productPice']], `${product.price} $`)
        let productRating = createElement('p', [['class', 'productRating']],`product rating: ${product.rating}` )
        let productImg = createElement('img', [['src', product.image]])

        let productInfoWrapper = createElement('div', [['class' , 'productInfoWrapper']])
        
        let buttonWrapper = createElement('div', [['class', 'buttonWrapper']])
        let buttonPlus = createElement('button', [['class', 'plus']], '+')
        let buttonMinus = createElement('button', [['class', 'minus']], '-')

        buttonWrapper.append(buttonPlus,buttonMinus)
        productInfoWrapper.append(productPrice,productRating,buttonWrapper)
        
        productWrapper.append(productTitle, productImg, productDescription,productInfoWrapper)
        main.append(productWrapper)

        productWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('plus')) {
                cartRender.cartAdd(+productWrapper.dataset.id,+productWrapper.dataset.cost)
                console.log(cartRender)
            } 

            if (e.target.classList.contains('minus')) {
                cartRender.cartRemove(+productWrapper.dataset.id,+productWrapper.dataset.cost)
                console.log(cartRender)
            } 
        })
       })
    }

    addElements() {
        let productsWrapper = []
        this.productsArray.forEach((product) => {
            let productWrapper = {
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                rating: product.rating.rate
            }
            productsWrapper.push(productWrapper)
        })
        this.productsArrayTwo = productsWrapper
    }

    getElements() {

        let products = localStorage.getItem('products')
        products = JSON.parse(products)
        this.productsArray = products

    }

    init() {

        this.getElements()
        this.addElements()
        this.render()
        
    }

}


