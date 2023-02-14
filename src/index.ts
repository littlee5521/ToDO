const css1 = require('./css/reset.css');
const css = require('./css/style.css');
import {newNote} from './script/notes'
import {domutil} from './script/notes'
import {relations} from './script/relations'
const utils = new domutil


let hello:any[] = []


const body = document.querySelector('.content__notes')

const newitem = new newNote('Hello', 'i dont know if this is going to work,', false) 
body.appendChild(utils.notes(newitem.title, newitem.notes, newitem.finished,hello))

console.log(hello)