//Чайник из старой домашки

let Kettle = function() {

    this.swith = false;

    this.switcher = function() {
        this.swith = !this.swith
    }

    this.getInfo = function() {
        if (this.swith == false) return console.log('чайник выключен')
        this.pStart = function() {
          this.P = +prompt('введите мощность чайника')
          if (isNaN(this.P) == true) return console.log('нечисловое значение'), this.pStart()
          if (this.P == '') return console.log('вы ничего не ввели'), this.pStart()
        }
        this.pStart()

        this.vStart = function() {
            this.V = +prompt('введите объем чайника')
            if (isNaN(this.V) == true) return console.log('нечисловое значение'), this.vStart()
            if (this.V == '') return console.log('вы ничего не ввели'), this.vStart()
        }
        this.vStart()

        this.waterStart = function() {
            this.water = +prompt('введите колличество воды в чайнике')
            if (isNaN(this.water) == true) return console.log('нечисловое значение'), this.waterStart()
            if (this.water == '') return console.log('вы ничего не ввели'), this.waterStart()
        }
        this.waterStart()

        this.count()
    }

    this.count = function() {
        this.T = this.V * this.water / this.P;
        this.show()
    },

    this.show = function() {
        console.log('время закипания воды в чайнике составит: ' + this.T + ' секунд')
    }

}

//новый чайник

let backgroundColor = document.querySelector('.kettle-wrapper'),
    backgroundColorSwitcher = document.querySelector('.kettleSwitcher'),
    getInfo = document.querySelector('.kettleInfo')
    info = document.querySelector('.info')

let KettleTwo = function() {

    Kettle.apply(this,arguments)

    this.switcher = function() {
        info.classList.remove('good')
        info.classList.remove('bad')
        this.swith = !this.swith
        backgroundColor.classList.toggle('enable')
        if (this.swith == true) { 
            backgroundColorSwitcher.innerHTML = 'выкл чайник'
            info.innerHTML = 'чайник включен'
            info.classList.add('good')
            info.classList.remove('bad')
            console.log(this)
        }
        else {
            backgroundColorSwitcher.innerHTML = 'вкл чайник'
            info.innerHTML = 'чайник выключен'
            info.classList.add('bad')
            info.classList.remove('good')
            console.log(this)
        } 

    }
    
    this.getInfo = function() {
        if (this.swith == false) return info.innerHTML = 'чайник выключен!', info.classList.add('bad'), info.classList.remove('good')

        this.pStart = function() {
          this.P = +prompt('введите мощность чайника')
        }

        this.pStart()

        if (isNaN(this.P) == true) return info.innerHTML = 'нечисловое значение', info.classList.add('bad'), info.classList.remove('good')
        if (this.P == '') return info.innerHTML = 'вы ничего не ввели', info.classList.add('bad'), info.classList.remove('good')

        this.vStart = function() {
            this.V = +prompt('введите объем чайника')
        }

        this.vStart()

        if (isNaN(this.V) == true) return info.innerHTML = 'нечисловое значение', info.classList.add('bad'), info.classList.remove('good')

        if (this.V == '') return info.innerHTML = 'вы ничего не ввели', info.classList.add('bad'), info.classList.remove('good')

        this.waterStart = function() {
            this.water = +prompt('введите колличество воды в чайнике')
        }

        this.waterStart()

        if (isNaN(this.water) == true) return info.innerHTML = 'нечисловое значение', info.classList.add('bad'), info.classList.remove('good')
        if (this.water == '') return info.innerHTML = 'вы ничего не ввели', info.classList.add('bad'), info.classList.remove('good')

        this.count()
    }

    this.show = function() {
        info.innerHTML = 'время закипания воды в чайнике составит: ' + this.T + ' секунд', info.classList.add('good')
    }
}

let kettle = new KettleTwo()

backgroundColorSwitcher.addEventListener('click', function() {
    kettle.switcher()
})

getInfo.addEventListener('click', function() {
    kettle.getInfo()
})




