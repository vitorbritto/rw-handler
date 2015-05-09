'use strict';

// FUNCTION
var rwHandler = function(message, condition, expression) {

    try {

        if (condition) {
            throw {
                name: 'RWHandler',
                message: message
            };
        }

        return expression;

    } catch (e) {

        console.log('Whoops! ' + e.name + ' detects an error: ' + e.message);

    }

};

// INIT
var a       = 8,
    b       = 10,
    sum     = a + b,
    msg     = 'You need to define a number type',
    check   = typeof a !== 'number' || typeof b !== 'number';

rwHandler(msg, check, sum);
