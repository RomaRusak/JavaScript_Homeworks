import ProductsRender from "./productsRender.js";
import { cartRender } from "./index.js"; // не удалять
import cartPage from "./CartPage.js";

class Routing {

    constructor() {
        this.routing()
    }

  routing() {

        window.addEventListener('hashchange', (e) => {

           let root = document.querySelector('.mainClass')

           let hash = location.hash;
           
           switch (hash) {

            case '#products': {

                root.innerHTML = '';

                let productsRender = new ProductsRender()   
                cartRender.cartLocalStorageStart()
                
            };
            break;

           case '#cart': {
                
                root.innerHTML = '';
                
                import('./CartPage.js')
                .then((module) => {})

                root.append(cartPage.init())

            };
            break;

           };

        })
    }
    
}

let routing = new Routing()

export {routing}

