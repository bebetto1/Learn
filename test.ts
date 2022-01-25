import { EventEmitter } from "events";
import { BigObject, callCommand } from "./bigObject";




let text: string [] = [];
const emitter = new EventEmitter();
for(let i = 0; i < 1000; i++)
{
    emitter.on(`test${i}`, () => {console.log(i)})

    text.push(`test${i}command(){console.log('${i}');}`)
}


emitter.emit('test1');
emitter.emit('test2');
emitter.emit('test122');
emitter.emit('test3');

const bigObject = new BigObject();//
callCommand('test1command', bigObject);
callCommand('test2command', bigObject);
callCommand('test122command', bigObject);
callCommand('test3command', bigObject);
callCommand('test4command', bigObject);



//console.log(text.join(' '))   