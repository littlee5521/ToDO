export class bucket {
    id:string
    parent:string
    children:object
    type:string
    constructor (parent:string, id:string, type:string) {
        parent = parent
        id = id
        type = type
    }
}
//        here im making the inital bucket to work from which wont have 
//        a parent 
export class mainBucket  {
    id:string = 'main'
    children:object
    type = 'folder'
}

export let homeBucket = new mainBucket

export class relations {
    //     gets task to se the id
    existingTask:string[] = []

    //saves the actual note
    objectList:object[] = []

    //the strcutre of the current task
    taskBody:object[] = []
}
