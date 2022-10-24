// Basic Function in JS

function singSong(){
    console.log("DO")
    console.log("RE")
    console.log("MI")
    console.log("FA")
    console.log("SO")
    console.log("LA")
    console.log("TE")
    console.log("DO 🎶")
}

// Function that take 0-n arguments as parameters.
function greet(){
    if(arguments.length === 0){
        let name = prompt("What is your name?")
        console.log(`Hi, ${name}!!! 👋`)
    }
    else if (arguments.length >= 1){
        final_str = "Hi There, "
        for (name_arg of arguments){
            final_str = final_str + name_arg + " "
        }
        console.log(final_str + "👋")

    }

}

greet();
singSong();
greet("Harry", "Potter");

// Function that takes another function as input
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${roll}`)
}

callTwice(rollDie);

// Function returned from another function as output

function makeMysteryFunction() {
    const rand = Math.random();

    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function! YAY!")
        }
    }
    else {
        return function() {
            console.log("Sorry I'm a mean function, I hope you step on a rock... :(")
        }
    }
}

const mystery = makeMysteryFunction();
mystery();


// Useful version of function that returns a function

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num < max;
    }
} 

const isChild = makeBetweenFunc(0, 18)

const isAdult = makeBetweenFunc(18, 65)

const isSenior = makeBetweenFunc(65, 100)

// Method vs Function - applys a function to an object = method

const myMath = {
    square: function(num) { return num * num},
    add: function(num1, num2) { return num1 + num2},
    cube: function(num) { return num * num * num }
}

console.log(myMath.square(2))
console.log(myMath.cube(2))
console.log(myMath.add(myMath.square(2), myMath.cube(2)))

const dog = {
    name: 'Cher',
    color: 'black and white',
    breed: 'sheepadoodle',
    bark(){
        console.log(`${this.name} says, "bark bark bark"`)
    }
}

dog.bark()


// Try / Catch Syntax

try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!!!!!!!")
}

console.log("Phew, I'm glad we caught that (see what I did there...)")
