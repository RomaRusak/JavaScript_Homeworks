
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
