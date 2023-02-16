import { utils } from ".."
import { rel } from ".."
import { mainBucket } from "./relations"
// gets the button clicked on to reference the fileID
export class documentTreeEvents {
    newFile (currentBucket:string, parentObj:object[]) {
        parentObj.push( rel.taskBody)
    }

    appendSubBucket () {
        
    }

    buildList (object:string) {
        if (object=='file'){

        }
    }

    setCurrentBucket() {
        const fileList = document.querySelectorAll('.dir__button')
        fileList.forEach(item =>{
            item.addEventListener('click', () =>{
                utils.currentBucket = item.parentElement.parentElement.id

            })
        })
    }

    
}