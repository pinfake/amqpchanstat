"use strict"

var opt = require('node-getopt').create([
    ['q', '=',               'specify queue'],
    ['u', '=',               'specify broker url'],
    ['h', 'help',            'display this help'],
    ['v', 'version',         'show version']
])
.bindHelp()
.parseSystem();

console.log( opt );

if(process.argv.length < 3) {
    console.log("ERROR!");
    return;
}
console.log( "ok" );
