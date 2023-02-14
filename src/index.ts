const css1 = require('./css/reset.css');
const css = require('./css/style.css');
import {newNote} from './script/notes'
import {domutil} from './script/notes'
import {relations} from './script/relations'
import { buttonEvents } from './script/notes';
const rel = new relations
export let taskList = rel.existingTask


export const utils = new domutil
const buttonEvent = new buttonEvents
const body = document.querySelector('.content__notes')

buttonEvent.addTask(body)