'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(takeAstring){
    let word = takeAstring.split(' ')
    for(let i = 0; i < word.length; i++){
        word[i] = capitalize(word[i]);
    }
    return word.join(' ');
}

function capitalize(sentence){
    let FirstLetter = sentence.substring(0, 1);
    let restSentence = sentence.substring(1);
    return FirstLetter.toUpperCase() + restSentence.toLowerCase();
}

//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('salut toi'), 'Salut Toi')
assert.strictEqual(jadenCase('je suis malade'), 'Je Suis Malade')

 