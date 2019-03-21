'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(takeAstring){
    return takeAstring[0] + takeAstring[1];
}

function keepLast(takeAstring){
    return takeAstring.slice(takeAstring.length-2);
}

function keepFirstLast(takeAstring){
    return takeAstring.slice(3, 5);
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(keepFirst('je suis un poulet'), 'je')
assert.deepStrictEqual(keepFirst('vive la biere'), 'vi')

assert.strictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(keepLast('je suis un poulet'), 'et')
assert.deepStrictEqual(keepLast('vive la biere'), 're')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirstLast('je suis un poulet'), 'su')
assert.deepStrictEqual(keepFirstLast('vive la biere'), 'e ')
// End of tests */
 