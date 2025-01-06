/**
 * Unit 4 - Arrays and Displays
 * ICS3 - Mr. J 🐯
 * 
 * Make sure you read the README file.
 * 
 * If you run into Git or Github issues, call a friend over, Mr. J is not here.
 **/ 


'use strict';

/*** Sprite Filenames ***/
const AXE_STAND = "./images/axe1.png";
const AXE_SWING = "./images/axe2.png";
const BATTLEAXE_STAND = "./images/axe3.png";
const BATTLEAXE_SWING = "./images/axe4.png";
const WOLVERINE_STAND = "./images/wolverine1.png";
const WOLVERINE_SWING = "./images/wolverine2.png";
const HIT1 = "./images/hit1.png";
const HIT2 = "./images/hit2.png";
const DEAD = "./images/dead.png";


/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
    Sleep the code for a certain number of ms
    NOTE: Any function that will use this must be declared with async and
    this sleep function called with "await sleep(x)" where x is a number of ms
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Sample function that uses arrays and the sleep function
async function sample() {
    let arr = [1, 2, 3, "This", "is", "an", "array!", 99]
    // Print every value inside "arr" but wait 750ms between each
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        await sleep(750);
    }
 }

// Add output to the "output" section of the webpage
function output(str) {
    document.getElementById("output").innerHTML += "<br>" + str;
    document.getElementById("output").scrollTop = document.getElementById("output").scrollHeight;
}

// Simple Battle
// hero and villain are arrays of 
// [AC, HP, DAMAGE_DIE, NAME, IMG]
async function simple_battle(hero, villain) {
    while (hero[1] > 0 && villain[1] > 0) {
        // hero swing
        attack(hero, villain);
        await sleep(500);
        if (villain[1] == 0) {
            console.log(`${hero[3]} wins the battle!!!`);
            return;
        }
        // villain swing
        attack(villain, hero);
        await sleep(500);
        if (hero[1] == 0) {
            console.log(`${villain[3]} wins the battle!!!`);
            return;
        }
    }
}

// Pretend to have attacker attack defender
// sprites are arrays: [AC, HP, DAMAGE_DIE, NAME, IMG]
function attack(attacker, defender) {
    // Roll to see if attacker hit defender
    if (randInt(1, 20) >= defender[0]) {
        let damage = randInt(1, attacker[2]);
        defender[1] -= damage;
        if (defender[1] < 0) defender[1] = 0;
        
        console.log(`${attacker[3]} hit ${defender[3]} causing ${damage} damage. ${defender[3]} has ${defender[1]} hp remaining.`)
    } else {
        console.log(`${attacker[3]} missed ${defender[3]}...`)
    }
}

/* actual work below */

function print_array(arr){
    let element = 0;
    do{
        console.log(arr[element]);
        element++;
    } while (arr[element] != null);
    console.log("")
    return;
}
print_array([1, 1, 2, 3, 5, 8, 13]);

function min(arr){
    let element = 0;
    let lowest = Infinity;
    do{
        if (lowest >= arr[element]){
            lowest = arr[element]
        }
        element++;
    } while (arr[element] != null);
    console.log(lowest);
    console.log("");
    return;
}
min([6,5,4,3,2,3,4,5,6])   // returns 2
min([5,5,5,5,5,5,5]);      // returns 5

function longest_string(arr){
    let element = 0;
    let longest = 0;
    let string = "";
    do{
        if (longest <= string.length){
            longest = string;
        }
        element++;
        string = arr[element];
    } while (arr[element] != null);
    console.log(longest);
    console.log("");
    return;
}
longest_string(["ltsiru", "suehrgabsergi"]);

function contains(arr, value){
    let element = 0;
    let check = true;
    do{
        if ((value === arr[element]) && (value == arr[element])){
            check = true;
            element = Infinity;
        } else{
            check = false;
        }
        element++;
    } while (arr[element] != null);
    console.log(check);
    return;
}
let someValues = [1, 2, 3, 4, "hello"];
contains(someValues, "hello");   // Returns true
contains(someValues, 5);         // Returns false
contains(someValues, "HELLO");   // Returns false
contains(someValues, 2);         // Returns true
contains(someValues, "2");       // Returns false


/* challenging works (5, 6, 7) */

function min_max(arr){
    // make element to run through full array
    let element = 0;
    // lowest as infinity so it will always be replaced by something lower
    let lowest = Infinity;
    // highest as negative infinity for replacing purposes
    let highest = Number.NEGATIVE_INFINITY;
    let array;

    // find lowest while array lasts
    do{
        if (lowest >= arr[element]){
            lowest = arr[element]
        }
        element++;
    } while (arr[element] != null);

    //find highest while array lasts
    do{
        if (highest <= arr[element]){
            highest = arr[element]
        }
        element++;
    } while (arr[element] != null);

    array = [lowest, highest]
    console.log(array);
    console.log("");
    return array;
}
let my_array = [7,2,-4,5,2,9,8,0,1,3,9,-5,-1,5,-1,-8,2,3];
min_max(my_array);  // returns [-8, 9]
min_max[5,5,5,5,5,5,5];  // returns [5, 5]

function sum(arr){
    let element = 0;
    let sum = 0;
    do{
        if (isNaN(arr[element]) == false){
            sum = sum + Number(arr[element]);
        }
        element++
    } while (arr[element] != null)
    console.log(sum);
    return sum;
}
sum([1,2,3,4,5]);  // returns 15

let x = ["Hello", "4", 3, "s'up?", true];
sum(x);  // returns 8 because of "4", 3, and true

function reverse_strings(arr){
    //thing
}
