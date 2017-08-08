# R/W Handler

"Read" data types and "Write" a message for an exception.


## Requires

- [Node.JS](http://nodejs.org/)


## Usage

```javascript
var a       = 8,
    b       = 10,
    sum     = a + b,
    msg     = 'You need to define a number type',
    check   = typeof a !== 'number' || typeof b !== 'number';

rwHandler(msg, check, sum);

```


## Includes

- [Mocha](http://mochajs.org/)
- [Chai](http://chaijs.com/)


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
