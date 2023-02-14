
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
    notes (titleI:string, notesI:string, doneI:boolean  ) {
        const body = document.createElement('article')

        const title = document.createElement('h3')
        title.textContent = titleI

        const notes = document.createElement('p')
        notes.textContent = notesI

        const done = document.createElement('input')
        done.checked = doneI

        body.appendChild(title)
        body.appendChild(notes)
        body.appendChild(done)

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
}