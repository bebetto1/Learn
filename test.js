"use strict";
exports.__esModule = true;
var events_1 = require("events");
var bigObject_1 = require("./bigObject");
var text = [];
var emitter = new events_1.EventEmitter();
var _loop_1 = function (i) {
    emitter.on("test" + i, function () { console.log(i); });
    text.push("test" + i + "command(){console.log('" + i + "');}");
};
for (var i = 0; i < 1000; i++) {
    _loop_1(i);
}
emitter.emit('test1');
emitter.emit('test2');
emitter.emit('test122');
emitter.emit('test3');
var bigObject = new bigObject_1.BigObject(); //
(0, bigObject_1.callCommand)('test1command', bigObject);
(0, bigObject_1.callCommand)('test2command', bigObject);
(0, bigObject_1.callCommand)('test122command', bigObject);
(0, bigObject_1.callCommand)('test3command', bigObject);
(0, bigObject_1.callCommand)('test4command', bigObject);
//console.log(text.join(' '))   
