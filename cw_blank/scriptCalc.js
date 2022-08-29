let x = ''
let y = ''
let sign = ''
let finish = false

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let operators = ['/', 'X', '-' , '+']

let calcScreen = document.querySelector('.calc-screen p')

function clear() {
    x = ''
    y = ''
    sign = ''
    calcScreen.innerHTML = ''
    finish = false
}

function equal(x,y,sign) {
    x = +x
    y = +y

    switch (sign) {
        case '+':
            calcScreen.innerHTML = (x + y)
        break
        case '-':
            calcScreen.innerHTML = (x - y)
        break
        case '/':
            calcScreen.innerHTML = (x / y)
        break
        case 'X':
            calcScreen.innerHTML = (x * y)
        break
    }

    x = calcScreen.innerHTML
    return x
}

document.querySelector('.calc-buttons').addEventListener('click', function(e) {

    if (!e.target.classList.contains('btn')) return
    
    if (e.target.classList.contains('clear'))  {
        return clear()
    }

    if (e.target.classList.contains('plus-minus') || e.target.classList.contains('percent')) alert('не реализовал')

    let click = e.target.innerHTML
    if (numbers.indexOf(click) != -1) {
        if (y == '' && sign == '') {
            x += click
            calcScreen.innerHTML = x
        }
        else if (x != '' && sign != '' && finish == false) {
            y += click
            calcScreen.innerHTML = y
        }
        else if (x != '' && sign != '' && finish == true) {
            calcScreen.innerHTML = ''
            y = ''
            y = e.target.innerHTML
            calcScreen.innerHTML = y
            finish = false
        }
    }

    if (operators.indexOf(click) != -1) {
        sign = click
        calcScreen.innerHTML = sign
    }

    if (click == '=') {
        if (x != '' && y != '') {
            finish = true
            // equal(x,y,sign)
            x = equal(x,y,sign)
            return x
        }
    }
})

