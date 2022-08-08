//записная книжка

let Contacts = function(name) {

    this.contactsList = [];

    this.get = function() {
        this.arr = []
        this.nick = prompt('как подписать ваш контакт?')
        this.fio = prompt('введите ФИО');
        this.arr.push(this.fio)
        this.age = +prompt('введите возраст');
        this.arr.push(this.age)
        this.number = prompt('введите телефон');
        this.arr.push(this.number)
        this.mail = prompt('введите почту')
        this.arr.push(this.mail)
        this.contactsList[this.nick] = this.arr
    } 

    this.check = function(nick) {
        if (this.contactsList[nick] == undefined) return console.log('этого контакта нету в списке')
        if (this.contactsList[nick][1] >= 22) console.log('контакту больше 18 лет')
        else console.log('контакту меньше 18 лет')
    }

    this.contactWrite = function(nick) {
        if (this.contactsList[nick] == undefined) return console.log('этого контакта нету в списке')
        console.log(this.contactsList[nick])
    }

    this.allContactsWrite = function() {
        console.log(this.contactsList)
    }
    
} 

let contacts = new Contacts()
    contacts.get();
    contacts.get();
    contacts.check('Рома')
    contacts.contactWrite('Рома')
    contacts.allContactsWrite()

// чайник 


let kettle = {

    swith: true,
    switcher: function() {
        this.swith = !this.swith
    },

    getInfo: function() {
        if (this.swith == false) return 'чайник';
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
    },

    count: function() {
        this.T = this.V * this.water / this.P;
        this.show()
    },

    show: function() {
        console.log('время закипания воды в чайнике составит: ' + this.T + ' секунд')
    }
}

kettle.getInfo()