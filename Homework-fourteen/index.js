import App from "./compontents/App.js";
import {header} from "./compontents/Header.js"
import {nav} from "./compontents/Nav.js"
import {main} from "./compontents/Main.js"
import {footer} from "./compontents/Footer.js"
import ProductsRender from "./productsRender.js"
import CartRender from "./cartRender.js"

let app = new App('<div class="root"></div>' , 'body')

let metaCharset = new App(`<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="./style/style.css">`, 'head')

let root = document.querySelector('.root')
header.element.append(nav.element)
root.append(header.element, main.element, footer.element)

let cartRender = new CartRender()
export {cartRender}

let productsRender = new ProductsRender()










