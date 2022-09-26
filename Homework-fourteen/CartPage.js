import createElement from "./createElement.js";
import CartRender from "./cartRender.js";
let cartRender = new CartRender()

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
            productCost.innerHTML = `стоимость товара ${productCart.cost.toFixed(2)}`;

            let productButtonPlus = createElement('button', [['class', 'cartPageInnerWrapper-buttonPlus']])
            productButtonPlus.innerHTML = '+'

            let productButtonMinus = createElement('button', [['class', 'cartPageInnerWrapper-buttonMinus']])
            productButtonMinus.innerHTML = '-'
            
            cartPageInnerWrapper.append(productTitle, productImage, productButtonPlus, productButtonMinus, productCounter, productCost)
            // console.log(productCart)
            self.elem.append(cartPageInnerWrapper);
            
        }
       })

       let totalCounter = createElement('p', [['class', 'cartPageInnerWrapper-totalCounter']])
       totalCounter.innerHTML = `суммарное колличество товара в корзине: ${cartSave.totalCounter}`;
       
       let totalCost = createElement('p',[['class', 'cartPageInnerWrapper-totalCost']])
       totalCost.innerHTML = `суммарная стоимость товара в корзине ${cartSave.totalCost}`;

       if (cartSave.totalCounter == 0) {
            totalCounter.innerHTML = 'В настоящий момент корзина пуста'
            totalCost.innerHTML = ''
       }

       this.elem.append(totalCounter, totalCost)
       
    }

    init() {
        this.render()
        return this.elem
    }

}

let cartPage = new CartPage()

export default cartPage