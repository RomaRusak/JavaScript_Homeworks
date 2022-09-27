import createElement from "./createElement.js";
import { cartRender } from "./index.js";
// import CartRender from "./cartRender.js";
// let cartRender = new CartRender()

class CartPage {

    constructor() {
        this.elem = null;

    }

    render() {
       let self = this;
       this.elem = createElement('div', [['class', 'cartPage-wrapper']]); 

       let allProducts = localStorage.getItem('products');
       allProducts = JSON.parse(allProducts);
       console.log(allProducts);
       
       let cartSave = localStorage.getItem('cartSave');
       cartSave = JSON.parse(cartSave);
    //    console.log(cartSave);

       let cartsSaveEmpty = function() {
            let totalCounter = createElement('p', [['class', 'cartPageInnerWrapper-totalCounter']])
            totalCounter.innerHTML = 'В настоящий момент корзина пуста'
            document.querySelector('.mainClass').append(totalCounter)
            return
       }

       if (!cartSave) {
           cartsSaveEmpty()
           return
       }

       cartSave.allProducts.forEach(function(elem) {
        if (elem.counter > 0) {

            let productCart = {
                title: null,
                image: null,
                counter: null,
                cost: null,
            };

            let cartPageInnerWrapper = createElement('div', [['class', 'cartPage-inner-wrapper']]);
            let productId = elem.id;
            allProducts.forEach(function(elem) {
                if (productId == elem.id) {
                    productCart.title = elem.title;
                    productCart.image = elem.image;

                    cartPageInnerWrapper.setAttribute('data-id', elem.id);
                    cartPageInnerWrapper.setAttribute('data-price', elem.price);
                }

            })

            cartSave.allProducts.forEach(function(elem) {
                if (productId == elem.id) {
                    productCart.cost = elem.cost
                    productCart.counter = elem.counter;
                }
            })

            let productTitle = createElement('p',[['class', 'cartPageInnerWrapper-productTitle']]);
            productTitle.innerHTML = productCart.title;
            
            let productImage = createElement('img', [['src', productCart.image]]);

            let productCounter = createElement('p', [['class', 'cartPageInnerWrapper-counter']]);
            productCounter.innerHTML = `колличество товара: ${productCart.counter} шт.`

            let productCost = createElement('p', [['class', 'cartPageInnerWrapper-cost']]);
            productCost.innerHTML = `стоимость товара ${productCart.cost.toFixed(2)} $`;

            let productButtonPlus = createElement('button', [['class', 'cartPageInnerWrapper-buttonPlus']])
            productButtonPlus.innerHTML = '+'

            let productButtonMinus = createElement('button', [['class', 'cartPageInnerWrapper-buttonMinus']])
            productButtonMinus.innerHTML = '-'
            
            cartPageInnerWrapper.append(productTitle, productImage, productButtonPlus, productButtonMinus, productCounter, productCost)
            // console.log(productCart)
            self.elem.append(cartPageInnerWrapper);
            
            cartPageInnerWrapper.addEventListener('click', (e) => {
                if (e.target.classList.contains('cartPageInnerWrapper-buttonPlus')) {
                    import("./cartRender.js")
                    .then(function(module) {
                    })
                    cartRender.cartAdd(cartPageInnerWrapper.dataset.id, +cartPageInnerWrapper.dataset.price)
                    document.querySelector('.mainClass').innerHTML = ''
                    document.querySelector('.mainClass').append(cartPage.init())
                }

                if (e.target.classList.contains('cartPageInnerWrapper-buttonMinus')) {
                    import("./cartRender.js")
                    .then(function(module) {
                    })
                    cartRender.cartRemove(cartPageInnerWrapper.dataset.id, +cartPageInnerWrapper.dataset.price)
                    document.querySelector('.mainClass').innerHTML = ''
                    document.querySelector('.mainClass').append(cartPage.init())
                }
                
            })
        }
       })

       let totalCounter = createElement('p', [['class', 'cartPageInnerWrapper-totalCounter']])
       totalCounter.innerHTML = `суммарное колличество товара в корзине: ${cartSave.totalCounter} шт.`;
       
       let totalCost = createElement('p',[['class', 'cartPageInnerWrapper-totalCost']])
       totalCost.innerHTML = `суммарная стоимость товара в корзине ${cartSave.totalCost} $`;

       let cartDelete = createElement('button', [['class', 'cartPageInnerWrapper-cartDelete']],'Очистить козину')

       cartDelete.addEventListener('click', function() {
            import("./cartRender.js")
            .then(function(module){})

            cartRender.cart = {

                allProducts: [
                    {id: 1,counter: null,cost: null},
                    {id: 2,counter: null,cost: null},
                    {id: 3,counter: null,cost: null},
                    {id: 4,counter: null,cost: null},
                    {id: 5,counter: null,cost: null},
                    {id: 6,counter: null,cost: null},
                    {id: 7,counter: null,cost: null},
                    {id: 8,counter: null,cost: null},
                    {id: 9,counter: null,cost: null},
                    {id: 10,counter: null,cost: null},
                    {id: 11,counter: null,cost: null},
                    {id: 12,counter: null,cost: null},
                    {id: 13,counter: null,cost: null},
                    {id: 14,counter: null,cost: null},
                    {id: 15,counter: null,cost: null},
                    {id: 16,counter: null,cost: null},
                    {id: 17,counter: null,cost: null},
                    {id: 18,counter: null,cost: null},
                    {id: 19,counter: null,cost: null},
                    {id: 20,counter: null,cost: null},
                ],
    
                totalCounter: null,
                totalCost: null
            }

            localStorage.removeItem('cartSave')

            document.querySelector('.cart-counter').innerHTML = 'корзина пуста'
            document.querySelector('.cost-counter').innerHTML = ''

            document.querySelector('.mainClass').innerHTML = ''
            cartsSaveEmpty()

       })

       if (cartSave.totalCounter == 0) {
            totalCounter.innerHTML = 'В настоящий момент корзина пуста'
            totalCost.innerHTML = ''
            return this.elem.append(totalCounter)
       }

       this.elem.append(totalCounter, totalCost, cartDelete)
       
    }

    init() {
        this.render()
        return this.elem
    }

}

let cartPage = new CartPage()

export default cartPage