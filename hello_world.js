/* Intro */
"use strict"; // When coding using modern JS syntax
console.log('bruh');  // equivalent to print or System.out.println()
alert('Hello World!');
alert('Boo! Second alert!'); // check out this comment
/*
Check out this one too
*/


/** Declaring variables
 * After "let var," can reassign "var = ..." to any other data type
 */
let message; // declare variable (local), cannot type "let message = ..." again below else errors
message = "Hello World!";
let message2 = "Boo! Second alert!"; 
let user = 'John', three = 3, isSmart = true; 
user = 4 // dynamically typed: redeclare variable can change type

var greeting = 'sup'; // global variable

console.log(message);
console.log(message2);
console.log(user);

const MY_BIRTHDAY = '08.09.2002'; // constant (final variable in java); never changes



/* DATA TYPES */

/** Numbers
 * 
 * Integers and floats (302, 102, 0.212, 3.1415, Infinity, -Infinity, NaN)
 *      NaN = not a number
 *      Overflows at (2^53 - 1) or -(2^53 - 1)
 */
alert(1 / 2); // 0.5
alert(1 / 0); // Infinity
alert(1 / 0 == Infinity); // true
alert("bruh" / 2); // NaN


/** BigInt
 * 
 * Large numbers that can does not overflow at Number limits
 *      type n at end of BigInt to indicate it is BigInt
 */
alert(9999999999999999999999999999999) // 1e+31
alert(9999999999999999999999999999999n) // does not error

/** STRINGS
 * Text
 * can use single or double quots
 * Use backticks(` `) to embed another string in another string
 * ** There is not character data type
 */

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; // == "can embed another Hello"
alert(phrase);

/** BOOLEANS
 * true or false
 */
let isChecked = false;
let fourGreaterThanTwo = 4 > 2; // true
alert(fourGreaterThanTwo);

/** null
 * no type
 */
let bruh = null;
alert(bruh); // null

/** undefined
 * What a variable is equal to if it is unassigned
 */

let a;
alert(a); // undefined
alert(a == undefined); // true
let b = 11;
b = undefined;
alert(b); // undefined

/** Objects
 * A type that can have multiple characteristics (TBD later)
*/

/** typeof operator/function
 * Returns a STRING of what the type is of the operand/argument
*/

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"; built in object for math operations

typeof null // "object" 

typeof alert // "function"