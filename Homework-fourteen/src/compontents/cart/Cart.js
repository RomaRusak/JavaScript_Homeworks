import createElement from "../createElement";
import cartLogo from "./img/cart.png";
import style from "./styleCart.scss";


class Cart {

    constructor() {
        this.elem = document.createElement('a');
        this.totalCounter = 0;
        this.totalSumCounter = 0;
        this.elem.classList.add('cart-wrapper');
        this.elem.setAttribute('href', '#CartInner');
        this.cartImg = document.createElement('img');
        this.cartImg.classList.add('Cart-img');
        this.cartImg.setAttribute('src', cartLogo)
        this.cartTotalcounterText = document.createElement('p');
        this.cartTotalcounterText.innerHTML = `products in cart: ${this.totalCounter}`
        this.cartTotalPrice = document.createElement('p');
        this.cartTotalPrice.innerHTML = `cost products: ${this.totalSumCounter} $`;
        this.elem.append(this.cartImg, this.cartTotalcounterText, this.cartTotalPrice);
        this.cartStorage = [];
        this.addTocart = this.addTocart.bind(this)
    }

    addTocart(product) {
        let flag = false
        this.cartStorage.forEach(productStorage => {
            if (productStorage.id == product.id) {
                flag = true;
                productStorage.counnter ++;
                product.sum += product.price;
                let counterSum = 0;
                let counterPrice = 0;

                this.cartStorage.forEach(product => {
                    counterSum += product.counnter;
                    counterPrice += product.sum;
                });
                
                this.totalCounter = counterSum;
                this.totalSumCounter = counterPrice;

                let sumCheck = this.totalSumCounter.toString()
                let checkIndex = sumCheck.indexOf('.') + 1;
                let afterDotcheck = sumCheck.slice(checkIndex);

                if (afterDotcheck.length > 2) this.totalSumCounter = this.totalSumCounter.toFixed(2);

                this.cartTotalcounterText.innerHTML = `products in cart: ${this.totalCounter}`;
                this.cartTotalPrice.innerHTML = `cost products: ${this.totalSumCounter} $`;  
                console.log(this.cartStorage);
            };
        });

        if (flag == true) return

        product.counnter = 1;
        product.sum = product.price;

        this.cartStorage.push(product);
        let counterSum = 0;
        let counterPrice = 0;

        this.cartStorage.forEach(product => {
            counterSum += product.counnter
            counterPrice += product.sum
        });
        
        this.totalCounter = counterSum;
        this.totalSumCounter = counterPrice;

        let sumCheck = this.totalSumCounter.toString()
        let checkIndex = sumCheck.indexOf('.') + 1;
        let afterDotcheck = sumCheck.slice(checkIndex);

        if (afterDotcheck.length > 2) this.totalSumCounter = this.totalSumCounter.toFixed(2);

        this.cartTotalcounterText.innerHTML = `products in cart: ${this.totalCounter}`;
        this.cartTotalPrice.innerHTML = `cost products: ${this.totalSumCounter} $`;  
        // this.productIncartInfo()          
        console.log(this.cartStorage);
    }

    removeFromCart(product) {
        this.cartStorage.forEach(productStorage => {
            if (productStorage.id == product.id) {
                if (productStorage.counnter -1 >= 0) {
                    productStorage.counnter--;
                    product.sum -= product.price;
                    product.sum = +product.sum.toFixed(2) 
                    
                    let counterSum = 0;
                    let counterPrice = 0;

                    this.cartStorage.forEach(product => {
                        counterSum += product.counnter
                        counterPrice += product.sum
                    });

                    this.totalCounter = counterSum;
                    this.totalSumCounter = counterPrice;
            
                    let sumCheck = this.totalSumCounter.toString()
                    let checkIndex = sumCheck.indexOf('.') + 1;
                    let afterDotcheck = sumCheck.slice(checkIndex);
            
                    if (afterDotcheck.length > 2) this.totalSumCounter = this.totalSumCounter.toFixed(2);
            
                    this.cartTotalcounterText.innerHTML = `products in cart: ${this.totalCounter}`;
                    this.cartTotalPrice.innerHTML = `cost products: ${this.totalSumCounter} $`;  
                    // вот тут не уверен
                    let secondStorage = [];
                    this.cartStorage.forEach(product => {
                        if (product.counnter > 0) secondStorage.push(product)
                    });
                    this.cartStorage = [];
                    secondStorage.forEach(product => {
                        this.cartStorage.push(product)
                    });
                    console.log(this.cartStorage)
                    // вот тут не уверен
                    // this.productIncartInfo();
                    
                } 
                console.log(productStorage)
            } 
        })
    }

    productIncartInfo() {
        let activeProducts = [];
        this.cartStorage.forEach((product) => {
            activeProducts.push(product.id);
        });             
        document.querySelectorAll('.products-wrapper').forEach((product) => {
            let activeProductCheck = product.querySelector('.active-product');
            if (activeProductCheck) {
                activeProductCheck.remove()
            }
            if (activeProducts.includes(+product.dataset.id)) {
                let productInCartText = createElement('p', [['class', 'active-product']], 'product added in cart')
                product.append(productInCartText);
            }
        })
    }


    init() {
        return this.elem
    }

}

let cart = new Cart();
let cartWidget = cart.init();
let addToCart = cart.addTocart;
// let productInCartCheck = cart.productIncartInfo

export {cartWidget};
export {addToCart};
export {cart};
// export {productInCartCheck}

