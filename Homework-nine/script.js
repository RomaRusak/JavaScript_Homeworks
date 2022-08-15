let arr = []

let input = document.querySelector('.input')
let save = document.querySelector('.save')
let notesContainer = document.querySelector('.notes-container')

function addNote() {
    let note = {}
    let noteBody = input.value;
    if (noteBody == '') return alert('поле ввода пустое'), 
    note.check = true
    note.body = noteBody
    console.log(note)
    arr.push(note)
    input.value = ''   
    createNoteTwo()
}

save.addEventListener('click', addNote)
input.addEventListener('keydown', function() {
    if (event.key == 'Enter' ) addNote()
})

let counter = 0;
function createNoteTwo() {
    
    let divCounter = document.querySelectorAll('.notes-container div')
    
    if (divCounter.length < arr.length ) {
        counter++
        let div = document.createElement('div')
        let divCheck = document.createElement('input')
        let divP = document.createElement('p')
        let divCount = document.createElement('span')


        divCount.setAttribute('class', 'counter')
        divCount.innerHTML = `${counter} пункт`
        divP.innerHTML = arr[arr.length - 1].body
        divCheck.setAttribute('type', 'checkbox')

        divCheck.addEventListener('click' , function() {
            div.classList.toggle('active')
        })

        notesContainer.appendChild(div)
        div.appendChild(divCount)
        div.appendChild(divCheck)
        div.appendChild(divP)
    }

}

let change = document.querySelector('.change')

change.addEventListener('click', function() {
    if (arr.length == 0) return alert('нечего редактировать')
    let number = +prompt('какой пункт вы хотите изменить')
    if ((number <= 0) || (number > arr.length)) return alert('такого пункта нету')
    if (isNaN(number)) return alert('вы ввели некорректные данные')
    console.log(number, typeof number)
    let newNote = prompt('введите новую задачу')
    arr[number-1].body = newNote
    let test = document.querySelector(`.notes-container div:nth-child(${number}) p`)
    test.innerHTML = newNote;

})

