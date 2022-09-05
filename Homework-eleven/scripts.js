//Высылаю, что смог реализовать =(
    
class User {
    constructor(data) {
        this.data = data
    }

    edit(data) {
        this.data = Object.assign(this.data,data)
        return this
    }

    get() {
        return this.data
    }
}

class Contacts {
    constructor() {
        this.contactsArr = []
    }
    
    add(data) {
        if (!data.name || !data.phone) return
        let contact = new User(data)
        let id = this.randomIdGeneration()
        contact.data.id = id
        this.contactsArr.push(contact)
        return this
    }
    
    randomIdGeneration() {
        let id = Math.floor(Math.random() * 100) + 1
        // console.log(id)
        this.contactsArr.forEach((elem) => {
            let idCheck = elem.data.id
            if (id == idCheck) this.randomIdGeneration()
        })
        return id
    }

    edit(id,data) {
        if (!( this.contactsArr.some((elem) => {
            return elem.data.id == id
        }))) return console.log('контакт с указанным id не найден')
        if (data === undefined) return
        this.contactsArr.forEach((elem) => {
            if (elem.data.id == id) {
                // console.log(elem)
                elem.edit(data)
            }
        })
        return this 
    }

    remove(id) {
        if (!( this.contactsArr.some((elem) => {
            return elem.data.id == id
        }))) return console.log('контакт с указанным id не найден')
        let index
        this.contactsArr.forEach((elem,indexElement) => {
            if (elem.data.id == id) index = indexElement
        })
        console.log(index)
        this.contactsArr.splice(index,1)
        // return this
    }

    get() {
        return this.contactsArr.forEach((elem) => {
                console.log(elem.data)
            })
    }

}

let contacts = new Contacts()

class ContactsApp extends Contacts {
    constructor() {
        super()
    }

    add(data) {
        if (data.name == '' || data.phone == '') return
        super.add(data)
        let contactWrapper = document.createElement('div')
        contactWrapper.classList.add('contact-wrapper')
        let contactName = document.createElement('p')
        contactName.classList.add('contact-name')
        contactName.innerHTML = data.name
        let contactNumber = document.createElement('p')
        contactNumber.classList.add('contact-number')
        contactNumber.innerHTML = data.phone
        let removeButton = document.createElement('button')
        removeButton.setAttribute('id', 'remove-button')
        removeButton.innerHTML = 'удалить контакт'
        contactWrapper.append(contactName,contactNumber,removeButton)
        document.querySelector('.contact-wrapper-bottom').append(contactWrapper)
        removeButton.addEventListener('click' , function() {
            contactsApp.remove(data.id)
        })
        contactWrapper.addEventListener('click', function(e) {
            if(e.target.closest('button')) contactsApp.removeWpapper(contactWrapper)
        })
    }

    remove(id) {
        super.remove(id)
    }

    removeWpapper(contactWrappr) {
        contactWrappr.remove()
    }

}

const contactsApp = new ContactsApp()

document.querySelector('#add-contact').addEventListener('click', function(e) {
    
    let data = {
        name: null,
        phone: null
    }
    
    let contactName = document.querySelector('#contac-name').value 
    data.name = contactName
    let phoneNumber = document.querySelector('#contact-number').value
    data.phone = phoneNumber
    
    contactsApp.add(data)

    document.querySelector('#contac-name').value = ''
    document.querySelector('#contact-number').value = ''

    console.log(contactsApp)
})

