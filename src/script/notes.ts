const book = require('../img/book.svg');
import { utils } from "..";
import { taskList } from "..";
import { noteObject } from "..";
import { mainBucket } from "./relations"
const MainBucket = new mainBucket


export class newNote {
    title:string = ''
    notes:string = ''
    finished:boolean
    id:string = 'temp'
    constructor (title:string, notes:string, done:boolean){
        this.title = title
        this.notes = notes
        this.finished = done
    }
}

export class domutil {
    currentBucket:string = 'home'

    getArrayLength (array:string[]) {
        return array.length
    }
    setID (array:string[]) {
        let temp = 0
        let temp1 = 0
        while (temp==0){
        let id = `task${this.getArrayLength(array) + temp1}`
        temp1++
        if (array.includes(id)!= true){
            temp = 1
            array.push(id)
            return id
        }
     }
    }
    notes (titleI:string, notesI:string, doneI:boolean, array: string[]  ) {
        const body = document.createElement('article')
        body.classList.add('note__body')
        body.id = this.setID(array)

        const rightDiv = document.createElement('div')
        rightDiv.classList.add('note-body__divider')
            const isFinished = document.createElement('button')
            isFinished.classList.add('note_finished')
            rightDiv.appendChild(isFinished)

            const noteTitle = document.createElement('h3')
            noteTitle.classList.add('note__title')
            noteTitle.textContent = titleI
            rightDiv.appendChild(noteTitle)

            const bookButton = document.createElement('button')
            bookButton.classList.add('book__button')
                const bookImg = document.createElement('img')
                bookImg.classList.add('notes__book')
                bookImg.src = book
                bookButton.appendChild(bookImg)
            rightDiv.appendChild(bookButton)

        const leftDiv = document.createElement('div')
        leftDiv.classList.add('note-body__divider')
        leftDiv.classList.add('importance')
            const done = document.createElement('button')
            done.classList.add('note_finished')
            leftDiv.appendChild(done)
        body.appendChild(rightDiv)
        body.appendChild(leftDiv)

        return body
    }
    overlay (){
        const overlay = document.createElement('article')
        overlay.classList.add('overlay')

        const textArea = document.createElement('textarea')
        textArea.classList.add('text')
        return overlay
    }
}


// this handles the button for adding 
//  the dom stuff and also creates the objs
export class buttonEvents {
    addTask (parent:Element,) {
        const add = document.querySelector('.navbar__addItem')
        add.addEventListener('click', () =>{
            const temp = new newNote(`a short title ${noteObject.length}`, '', false)
            noteObject.push(temp)
            const element = utils.notes(temp.title, temp.notes, temp.finished, taskList)
            temp.id = element.id
            parent.appendChild(element)
            //test to see if i could hold the array
            //MainBucket.children = noteObject
            //console.log(MainBucket.children)
        })
    }
    getIndex (value:HTMLBodyElement) {
        return value.id
    }   
}