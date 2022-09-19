import createElement from "./createElement.js"

export default class CartRender {

    constructor() {

        this.cart = {

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

        this.cartRender()
        this.cartLocalStorageStart()

    }

    cartAdd(dataOne,costAdd) {
        this.cart.allProducts.forEach((product) => {
            if (product.id == dataOne) {
                product.counter++    
                product.cost += costAdd
            }
        })

        this.totalCartUpdate()
        this.cartRouding() 
        this.cartRenderUpdate()
        this.activeClassChecking() 
        this.cartLocalStorageSave() //возможно удалить
        return this
    }

    cartRemove(dataOne,costAdd) {
        this.cart.allProducts.forEach((product) => {
            if (product.id == dataOne) {
                if (product.counter === null || product.counter == 0) return
                product.counter--    
                product.cost -= costAdd
            }
        })

        this.totalCartUpdate()
        this.cartRouding() 
        this.cartRenderUpdate()
        this.activeClassChecking() 
        this.cartLocalStorageSave() //возможно удалить
        return this
    }

    totalCartUpdate() {
        let counter = null
        let costAll = null

        this.cart.allProducts.forEach((product) => {
            counter += product.counter
            costAll += product.cost
        })

        this.cart.totalCounter = counter
        this.cart.totalCost = costAll
        return this
    }

    cartRender() {
        let cartWrapperUI = createElement('div', [['class', 'cart-wrapper']])
        let cartImgUI = createElement('div', [['class','cart-img']])
        let cartCounterUI = createElement('p',[['class', 'cart-counter']],'корзина пуста')
        let costCounterUI = createElement('p', [['class', 'cost-counter']],)

        cartWrapperUI.append(cartImgUI,cartCounterUI,costCounterUI)
        document.querySelector('.navClass').append(cartWrapperUI)
    }

    cartRenderUpdate() {
        let cartConteinerUI = document.querySelector('.cart-counter')
        let costConteinerUI = document.querySelector('.cost-counter')
        
        cartConteinerUI.innerText = `единиц товара: ${this.cart.totalCounter}` 
        costConteinerUI.innerText = `цена: ${this.cart.totalCost}` 

        if (this.cart.totalCounter == 0) {
            
            cartConteinerUI.innerText = 'корзина пуста'
            costConteinerUI.innerText = ''
        }
    }

    cartRouding() {
        let cartCheck = this.cart.totalCost.toString()
        let symbolsCounter = cartCheck.length
        let symbolsAfterDot = cartCheck.indexOf('.')
        
        if (symbolsCounter - symbolsAfterDot > 3) {
            cartCheck = +cartCheck
            cartCheck = +cartCheck.toFixed(2)
            // console.log(cartCheck, typeof cartCheck)
            this.cart.totalCost = cartCheck
        }
    }

    activeClassChecking() {
        let activeClassArray = []
        this.cart.allProducts.forEach((product) =>  {
            if (product.counter) {
               activeClassArray.push(product.id)
            }
        })
        this.activeClassAdding(activeClassArray)
       
    }

    activeClassAdding(activeClassArray) {
        let allCarts = document.querySelectorAll('.mainClass .wrapper')
        allCarts.forEach((cart) => {
            cart.classList.remove('active')
        })

        // console.log(activeClassArray)
        allCarts.forEach((cart) => {
            let cartId = +cart.dataset['id']
            let check = activeClassArray.indexOf(cartId)
            if (check > -1) {
                cart.classList.add('active')
            }
        })
    }

    cartLocalStorageSave() {
        let cart = JSON.stringify(this.cart)
        localStorage.setItem('cartSave', cart)
        console.log(cart)
    }

    cartLocalStorageStart() {
        if (!localStorage.cartSave) return;
        let cart = localStorage.getItem('cartSave');
        cart = JSON.parse(cart);
        this.cart = cart;
        this.cartRenderUpdate();

        let arrForClass = [];
        this.cart.allProducts.forEach((product) =>  {
            if (product.counter) {
               arrForClass.push(product.id)
            }
        });
        
        let self = this
        setTimeout(function() {     
            self.activeClassAdding(arrForClass)
        },0)
    }

}

