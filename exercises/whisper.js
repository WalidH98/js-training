'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(takeAstring){
    const star = '*';
    return star + takeAstring.toLowerCase() + star;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('hello les gens'), '*hello les gens*')
assert.deepStrictEqual(whisper('je suis ko'), '*je suis ko*')


 
// End of tests */
