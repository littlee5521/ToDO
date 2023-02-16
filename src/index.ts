const css1 = require('./css/reset.css');
const css = require('./css/style.css');
import {domutil} from './script/notes'
import {relations} from './script/relations'
import { buttonEvents } from './script/notes';
import { documentTreeEvents } from './script/documentTree';

const treeUtils = new documentTreeEvents
treeUtils.setCurrentBucket()
const rel = new relations
export let taskList = rel.existingTask
export let noteObject = rel.objectList

export const utils = new domutil
const buttonEvent = new buttonEvents
const body = document.querySelector('.content__notes')

buttonEvent.addTask(body)