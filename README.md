
░░░░░██╗░██████╗
░░░░░██║██╔════╝
░░░░░██║╚█████╗░
██╗░░██║░╚═══██╗
╚█████╔╝██████╔╝
░╚════╝░╚═════╝░
# learning-js
Repository of notes and beginner files for learning JavaScript and Node.js. Intended as an extremely quick guide for programmers who have had experience with any other popular language.

## 💻💻 INTRODUCTION 💻💻

### Some basics:
```js
// this is a comment
/* this is a comment as well */
console.log('Hello World'); // prints out result in console
alert('bruh'); // a pop up with message 'bruh'
```

You can use semicolons in most circumstances at end of statement but you don't have to.

```js
console.log('Wow this is cool');
console.log('Wow this is cool too')
console.log('this errors because statement did not end;
```

You can have a statement span multiple lines:

```js
console.log(1
+
2)  // does not error
```

## 💻💻 Variables 💻💻

Declaring a variable:

```js
let var;
```

Initializing a variable:

```js
var = 3;
```

Do both at the same time:

```js
let var = 3;
```

Erroring if you use "let" statement on an already declared variable

```js
let var = 3;
let var = 1; // error
```

## 💻💻 DATA TYPES 💻💻
### Numbers
Integers and floats; overflows once too big in the positives or negatives.
- 302
- 102
- 0.212 
- 3.1415 
- Infinity
- -Infinity
- NaN (not a number)

```js
alert(1 / 2); // 0.5
alert(1 / 0); // Infinity
alert(1 / 0 == Infinity); // true
alert("bruh" / 2); // NaN
```

### BigInt
Large numbers that can does not overflow at Number's limits (similar to long in Java). 

Type **n** at end of number

```js
alert(9999999999999999999999999999999) // 1e+31
alert(9999999999999999999999999999999n) // does not error
```


### Strings
Text. Can use single or double quotes for Strings.

Use backticks(`) to embed another string in another string. Put ${str} inside the backticks to embed.

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
alert(phrase);  // "can embed another Hello"
```

### Booleans
True or false.

```js
let isChecked = false;
let fourGreaterThanTwo = 4 > 2;
alert(fourGreaterThanTwo); // true
```

### Null
No type.

```js
let bruh = null;
alert(bruh); // null
```

### Undefined
What a variable is equal to if it is unassigned.

```js
let a;
alert(a); // undefined
alert(a == undefined); // true
let b = 11;
b = undefined;
alert(b); // undefined
```

### Objects
A type that can have multiple characteristics (discussed later).

### typeof Operator
Returns a **string** of the type of the operand/argument.

```js
typeof undefined // "undefined"
typeof(undefined) // also works
typeof 0 // "number"
typeof(0) // also works
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"; built in object for math operations
typeof null // "object"
typeof alert // "function"
```

## 💻💻 INTERACTIONS 💻💻

### alert
Shows a message and waits for the user to press “OK”.

***Returns*** true if OK pressed, returns false if esc/cancel pressed.

```js
result = alert("Hello there!");
```

### prompt

It shows a modal window with a text message, an input field for the visitor, and the buttons OK/cancel.

```js
result = prompt(title, [default]);
```

**title** = The text to show the visitor.\
**default** = An optional second parameter, the initial value for the input field.
value: if press OK. 

***Returns*** true if user pressed OK, then; if pressed cancel then return null.

```js
let age = prompt('How old are you?', 18);
alert(`You are ${age} years old!`); // You are 18 years old!
```

### confirm
Shows a modal window with a question and two buttons: OK and Cancel.

***Returns*** true if OK is pressed and false otherwise.

```js
let isAllenCanadian = confirm("Is Allen Cao a Canadian");
alert(isAllenCanadian); // true if OK is pressed
```

## 💻💻 TYPE CONVERSIONS 💻💻
Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

### String Conversion

**alert(value)** automatically converts value to string

**String(value)** converts value to string

```js
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
```

### Numeric Conversion

Numeric conversion happens in mathematical functions and expressions **AUTOMATICALLY**.

Can also use **Number(value)** to explicity convert value to Number.

NOTE:\
**Number(true) = 1**\
**Numer(false) = 0** 

```js
alert( "6" / "2" ); // 3, strings are converted to numbers
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
space123 = Number("   123   ") // 123
```

If conversion fails (i.e. Number("Hello World")), then **NaN** is returned.

```js
> let age = Number("an arbitrary string instead of a number");
> alert(age); // NaN, conversion failed
```

### Boolean Conversion

Empty values are false:
- 0
- null
- undefined
- NaN
- ""

Non-empty values are true:
- 1
- "Hello World"
- "0"
- "null"

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
```

```js
> alert( Boolean("hello") ); // true
> alert( Boolean("") ); // false
```

## 💻💻 Basic Operators and Math 💻💻
### Built-in math operators:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (*not floor*) (/)
- Remainder (%)
- Exponentiation (**)

### String Concatenation

```js
let s = "my" + "string";
alert(s); // mystring
```

If str1 is not a string and str2 is a string, then in str1 + str2, str1 will be converted to string (only if str1 is directly in front of or behind str2)

```js
alert('1' + 2); // "12"
alert(false + '1'); // false1
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
```

NOTE: String concactenation doesn't work with - or /. So when these operators are involved, all strings will be converted to Numbers.

```js
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
```

### Number Conversion Using +

Adding **+** behind a variable (without adding or string concating anything) will make it become a number. Basically does the SAME THING as Number(...)

i.e.: 
```js
// No effect on numbers
let x = 1;
alert( +x ); // 1
```

```js
let y = -2;
alert( +y ); // -2
```

```js
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```

### Assignment Returns a Value

Something to keep in mind: an assignment statement *ALWAYS RETURNS THE VALUE ON THE RIGHT HAND SIDE*:

```js
let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // a = b + 1 returns 3
alert( a ); // 3
alert( c ); // 0
```

### Incrementing/Modifying-in-Place

Same as any popular language.

```js
> let n = 2;
> n = n + 5;
> n = n * 2;
```

Same as:

```js
let n = 2;
n += 5;
n *= 2;
```

Incrementing by 1 up or 1 down: can do it in **suffix** form or **prefix** form.

The difference between suffix form and prefix form is that suffix form returns the value BEFORE it increments while suffix form returns the value AFTER it increments. The value that the variable increments to is still the same.

Suffix form:

```js
let n = 2;
a = n++; // n = 3, a = 2 (prev value of n)
b = n--; // n = 2, a = 3 (prev value of n)
```

Prefix form:
```js
let n = 2;
a = ++n; // n = 3, a = 3 (incremented value of n)
b = --n; (decremented value of n) // n = 2
```

### Commas

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

Rarely and only carefully used.

```js
let a = (1 + 2, 3 + 4, 5 + 7);
alert( a ); // 12 (the result of 3 + 4)
```

### Bitwise Operators
List:
- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )


## 💻💻 Comparisons 💻💻

Like any other popular language. Results in a boolean.

- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b.
- Not equals: a != b

### String Comparisons

Like any other popular language. Compares in lexicographical order.

```js
> alert( 'Z' > 'A' ); // true
> alert( 'Glow' > 'Glee' ); // true
> alert( 'Bee' > 'Be' ); // true
```

### Comparison of different types

JS tries to convert everything to a number.

When comparing a value val with a number, JavaScript converts val to number.

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert('s' == 1); // false, Number('s') == Nan != 1
alert('' == 0) // true, Number('') = 0
```

When comparing a number with a boolean, JS converts the boolean to a number; **true** becomes **1** and **false** becomes **0**

```js
alert( true == 1 ); // true
alert( false == 0 ); // true
```

### Strict Equality (**===**)

A strict equality operator === checks the equality without type conversion.

```js
alert( 0 === false ); // false, because the types are different
```

### Comparison with null and undefined

In strict equality, null is not equal to undefined
becomes both are different types.

```js
alert( null === undefined ); // false
```

However in non-strict equality, they ONLY EQUAL EACH OTHER.

```js
alert( null == undefined ); // true
```

For other math comparisons (<, >, <=, =>):
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

### Strange result: null vs 0

```js
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

### Never Compare Undefined

Number(undefined) always results in NaN, which always returns false when compared to another value.

```js
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

## 💻💻 Conditional Branching 💻💻

### 'If' statement

Executes block of code in bracket if the 'if' statement is truthy.

```js
if (1 > 0) {
  alert('This will always alert');
}
```

### Boolean Conversion

Everything in the 'if' paranthesis will always be converted to boolean.

```js
if (0 || null) { // 0, null is falsy
  ...
}
if (1 || 'Hello') { // 1, 'Hello' is truthy
  ...
}
```

### Else If and Else

Same as Java.

```js
if (condition1) {
  alert('condition1 is true');
} else if (condition2) {
  alert('condition1 is false but condition2 is true');
} else {
  alert('condition1 and condition2 are both false');
}
```

### Conditional Operator '?'

In the following, given a condition on the left of '?,' is true, then return value1, else return value2:

```js
let result = condition ? value1 : value2;
```
This is the same as:
```js
let result;
if (condition) {
  result = true;
} else {
  result = false;
}
```

For example:

```js
let canDrink = (age > 21) ? true : false;
```

### Multiple '?'

If multiple '?' exist, then there are else if statements. The following is an example.\ 
NOTE: multiple (condition ? value) are separated by ':'

```js
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
```

This is equivalent to:

```js
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```

Another example:

```js
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
```

### Logical Operators

- Or = ``` || ```
- And = ``` && ```
- not = ``` ! ``` (NOTE: **!something** converts something to boolean then inverses it, so **!!something** simply converts something to boolean)  
- Nullish Coalescing = ``` ?? ``` (will be discussed in next section)
