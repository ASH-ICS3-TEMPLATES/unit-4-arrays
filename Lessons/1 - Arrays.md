# Unit 4 - Arrays and Displays

###### ICS3 - Mr. J 🐯

## 1 - Arrays

##### Table of Contents
- [Lesson: Arrays](#the-lesson-arrays)
- [Practice Tasks](#practice-tasks)
- [Challenge Tasks](#challenge-tasks)
- 🔙 [Back to the README](../README.md)

### The Lesson: Arrays

`Strings` are a very special type of variable. They are **an array**. Almost every programming language in the world has Arrays - at least as an add-on. Arrays let us package multiple values together in one variable. Kind of like a string of letters but instead it could be numbers or booleans or whatever data you need to store.

Imagine creating a contact list program. Every contact that gets added is another piece of data that has to go in a variable. But if you don't know how many contacts there will be - how do you know how many variables to make? `contact1, contact2, ... contact999`?

**Examples**:
```JS
// Make an array of numbers
let someNumbers = [2,4,5,0,-9,5,2,1,2,4];
console.log(someNumbers.length);  // 10
console.log(someNumbers[2]);      // What gets printed?
```

---

One of the biggest differences between _Strings_ and _Arrays_ - you **can** modify an array. 

```JS
console.log(someNumbers[1]);  // 4
someNumbers[1] = 17;
console.log(someNumbers[1]);  // 17
```

---

In _JavaScript_ and _Python_, an Array can contain a mixture of any type of data. (Python calls them _lists_). Other programming languages can only hold one _type_ of data in an array - due to memory security and restrictions.

```JS
let myArray = ["This is text", 4, 5, true];
```
---
We can loop through arrays just like we did with Strings!

```JS
for (let i = 0; i < myArray.length; i++)
  `Do something with` myArray[i];
```
---
We can add an element to the **end** of an existing array with `.push()`

```JS
myArray.push("Some more text");
```

We can also _remove_ the last element with `.pop()` ([read about it here](https://www.w3schools.com/jsref/jsref_pop.asp))

---

We can declare an empty array two ways:
```JS
let my_array_for_later = [];     // Don't know the size

let my_other_array = new Array(20);  // Empty array of 20 slots
```

#### There are other built-in functions as well, [that you can look up online](https://www.w3schools.com/js/js_arrays.asp).



## Practice Tasks

[🔝 Back Up](#1---arrays)

```JS
/** Here are some sample arrays, if you want them for testing */
let test_array1 = [1, 3, 9, 7, -5, 7, 9, 9, -3.14];  // Numbers
let test_array2 = ["3", "castle", "-98", "cookie", "sandwich", "Hi"];  // Strings
let test_array3 = [9, -7, "Deadpool", true, 1, false, "pizza", -3];  // Mix

// We can put anything in a JavaScript array and use new-lines after a comma:
let test_array4 = [0, 0, 10, 0, test_array2, 0,
                   true, test_array3, "Mr. Squirrel",
                   -50, test_array1, "💩", [1,2]];
```

### `print_array( )`

1. Create the function `print_array(arr)` that prints the elements of the array `arr` to the console one-by-one, each on a new line. _This will be very similar to printing each letter of a String_.
<br>**Example:**

    ```JS
    let my_array = [56, 34, -99, "Hello", true, "Good bye", 0, -1, 42];

    print_array(my_array);  // Should print all the contents, each on a new line

    // OR:
    print_array([1, 1, 2, 3, 5, 8, 13]);  // Again, should print each on a new line
    ```

### `min( )`

2. Create the function `min(arr)` that goes through a _numeric_ array and **_returns_ the lowest numeric value** in the array. It's safe to assume that the input parameter `arr` is an array of numbers and has at least one value.
<br>**Examples:**

    ```JS
    let my_array = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
    min(my_array);            // returns -8
    min([6,5,4,3,2,3,4,5,6])  // returns 2
    min([5,5,5,5,5,5,5]);     // returns 5
    ```

### `longest_string( )`

3. Create the function `longest_string(arr)` that goes through an array of _Strings_ and returns the _**length**_ of the longest String in the array. It should return the _length_, not the string. It's safe to assume that the input parameter `arr` is an array of only Strings and has at least one value in it.


### `contains( )`

4. Arrays have a built-in `.includes()` that will tell you if the given element exists in the array. We're going to recreate that function. Create the function `contains(arr, value)` that returns `true` if the `arr` contains a copy of the given `value`. It should return `false` otherwise.
  <br>**Examples:**

    ```JS
    let someValues = [1, 2, 3, 4, "hello"];
    contains(someValues, "hello");   // Returns true
    contains(someValues, 5);         // Returns false
    contains(someValues, "HELLO");   // Returns false
    contains(someValues, 2);         // Returns true
    contains(someValues, "2");       // Returns false
    ```

    **Remember:**
    The double-equals only compares _value_ and JavaScript thinks `2` and `"2"` are equal in value. The triple-eqauls also compares _data type_.
    ```JS
    2 == "2"    // true
    2 === "2"   // false
    ```

<br>

## Challenge Tasks

[🔝 Back Up](#1---arrays)

5.  Create the function `min_max(arr)` that returns _an array_ with two elements: `[min, max]`
  <br>**Examples:**
    ```JS
    let my_array = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
    minMax(my_array);  // returns [-8, 9]

    minMax[5,5,5,5,5,5,5]);  // returns [5, 5]
    ```
<br>

6. Create the function `sum(arr)` that returns the sum of _any element that could be considered a number_ in the array. For the purposes of this task, anything that can be _converted_ to a number is good. For example the value "9" **is** considered numeric. So is `true` (equates to 1). Hint: we have learned about the [isNaN( )](https://www.w3schools.com/jsref/jsref_isnan.asp) function in previous work.
    <br>**Examples:**
    ```JS
    sum([1,2,3,4,5]);  // returns 15

    let x = ["Hello", "4", 3, "s'up?", true];
    sum(x);  // returns 8 because of "4", 3, and true

    // The boolean keyword true equates to a numeric value!
    ```
    **Hint:** for this you _might_ need such things as [isNaN](https://www.w3schools.com/jsref/jsref_isnan.asp), [Number](https://www.w3schools.com/jsref/jsref_number.asp), and [typeof](https://www.w3schools.com/js/js_typeof.asp).

<br>

7. Create the function `reverse_strings(arr)` that goes through the given `arr` of Strings and does the following:
   - Print each string to the console _reversed_ (without using any built-in reverse functionality or `.split()` or `.join()`)
   - _Returns_ an _array_ of the reversed strings --> _also in reverse_.
    
    <br>**Example:**
    ```JS
    let my_strings = ["Hello", "Goodbye", "Coding is fun!", "Strings are easy.", "zzzzzzz"]
    reverse_strings(my_strings);
    // Prints the following:
    olleH
    eybdooG
    !nuf si gnidoC
    .ysae era sgnirtS
    zzzzzzz

    // Returns the following:
    ["zzzzzzz", ".ysae era sgnirtS", "!nuf si gnidoC", "eybdooG", "olleH"]
    ```
    

---

<br>

🐿️
