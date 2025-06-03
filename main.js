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
const BATTLEAXE_SWING =

 "./images/axe4.png";
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
