'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(sentence){
    sentence = sentence.substring(2);
    return sentence
 }

function cutLast(sentence){
    sentence = sentence.slice(0,-2);
    return sentence
}

function cutFirstLast(sentence){
    sentence = sentence.slice(2, -2);
    return sentence
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, "function")
assert.strictEqual(cutFirst('Je suis une poule'), ' suis une poule')
assert.strictEqual(cutFirst('Je suis une poulaine'), ' suis une poulaine')

assert.strictEqual(typeof cutLast, "function")
assert.strictEqual(cutLast('Vive la biere'), 'Vive la bie')
assert.strictEqual(cutLast('Boire ou Conduire, il faut choisir'), 'Boire ou Conduire, il faut chois')

assert.strictEqual(typeof cutFirstLast, "function")
assert.strictEqual(cutFirstLast('xXLeCauchemarXx'), 'LeCauchemar')
assert.strictEqual(cutFirstLast('kayak'), 'y')
// End of tests */