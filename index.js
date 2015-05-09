/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

'use strict';

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
