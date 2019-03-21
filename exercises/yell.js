'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */


function yell (StringReturn){
    return StringReturn.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('hello les gens'), 'HELLO LES GENS')
assert.deepStrictEqual(yell('je suis ko'), 'JE SUIS KO')

 
// End of tests */
