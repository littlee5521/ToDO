import { utils } from ".."
// gets the button clicked on to reference the fileID
export class documentTreeEvents {
    buildList (object:string) {
        if (object=='file'){
            
        }
    }

    setCurrentBucket() {
        const fileList = document.querySelectorAll('.dir__button')
        fileList.forEach(item =>{
            item.addEventListener('click', () =>{
                utils.currentBucket = item.parentElement.parentElement.id
                console.log(utils.currentBucket)
            })
        })
    }
}