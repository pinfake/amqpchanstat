"use strict"

var opt = require('node-getopt').create([
    ['q', 'queue=',               'specify queue'],
    ['u', 'url=',               'specify broker url'],
    ['h', 'help',            'display this help'],
    ['v', 'version',         'show version']
])
.bindHelp()
.parseSystem();

console.log( opt );

if( !opt.options.url ) {
    console.log("You must specify the broker's url. Use -h for command line help.");
    return -1;
} 

if( !opt.options.queue ) {
    console.log("You must specify a queue name. Use -h for command line help.");
    return -1;
} 

var AmqpChanStat = require('./amqpchanstat.js');
var acs = new AmqpChanStat();
console.log( acs.getQueueStatus() );
return 0;
