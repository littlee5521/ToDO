const book = require('../img/book.svg');


export class newNote {
    title:string = ''
    notes:string = ''
    finished:boolean
    constructor (title:string, notes:string, done:boolean){
        this.title = title
        this.notes = notes
        this.finished = done
    }
}

export class domutil {
    getArrayLength (array:any[]) {
        return array.length
    }
    setID (array:any[]) {
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
    notes (titleI:string, notesI:string, doneI:boolean, array: any[]  ) {
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

export class buttonEvents {
    addTask () {
        const add = document.querySelector('.navbar__addItem')
    }
    getIndex (value:HTMLBodyElement) {
        return value.id
    }   
}