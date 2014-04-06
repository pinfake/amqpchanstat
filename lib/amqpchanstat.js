'use strict';
var AmqpChanStat = function( brokerUrl ) {
    this.amqp = require('amqplib');
    this.brokerUrl = brokerUrl;
};

AmqpChanStat.prototype.getQueueStatus = function( queueName )
{
    var open = this.amqp.connect( this.brokerUrl );
    open.then(function(conn) {
        conn.createChannel().then( function( channel ) {
            channel.assertQueue( queueName ).then( function( qData ) {
                conn.close();
                console.log( qData );
            });
        });
    })
    .then(null, console.warn );
    return open;
};

module.exports = AmqpChanStat;
