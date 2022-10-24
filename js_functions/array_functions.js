// forEach

const nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function print(element){
    console.log(element)
}

nums.forEach(print)

console.log("****************")

nums.forEach(function(el){ 
    if (el % 2 === 0) console.log(el)
})

// forEach more useful 

const songs = [
    {
        artist: "Green Day",
        song: "American Idiot"
    },
    {
        artist: "Taylor Swift",
        song: "You Belong With Me"
    },
    {
        artist: "Train",
        song: "Hey Soul Sister"
    },
    {
        artist: "Ashe",
        song: "Another Man's Jeans"
    },
    {
        artist: "King Princess",
        song: "1950"
    },
    {
        artist: "Katy Perry",
        song: "Roar"
    },
    {
        artist: "Barns Courtney",
        song: "1999"
    }
]

songs.forEach(function (el){
    console.log(`The song ${el.song} is by ${el.artist}`)
})


// Map Function
const doubledNums = nums.map(function (num){
    return num * 2
})

console.log(doubledNums)

const songTitles = songs.map(function (el){
    return el.song
})

console.log(songTitles)


// Arrow Functions

const add = (x, y) => {
    return x + y;
}

console.log(add(5,4))

const square = (num) => {
    return num * num
}

console.log(square(13))

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

console.log(rollDie())


// Map Function vs Map arrow function 


const songStrings = songs.map(function(song){
    return `${song.artist} sings the song ${song.song}`
})

console.log(songStrings)

const songStrings1 = songs.map( song => (
    `${song.artist} sings the song ${song.song}` 
))

console.log(songStrings1)


// Filter Function -> must return true or false. If true, element gets put into a new filtered array 
// * Helpful for when you want to filter where score is greater than or less than something
divisible_by_3 = nums.filter(num => {
    return num % 3 === 0
})

console.log(divisible_by_3)




// Every Function - all elements in array must return true for condition
const examScores = [80, 75, 90, 92, 83, 100, 87, 77, 96, 79]
const everyonePassed1 = examScores.every(score => score >= 75)
console.log(everyonePassed1)

const exam2Scores = [80, 75, 90, 92, 83, 100, 73, 77, 96, 79]
const everyonePassed2 = exam2Scores.every(score => score >= 75)
console.log(everyonePassed2)

// Some Function - at least one element passed condition as true
const someonePassed1 = examScores.some(score => score >= 75)
console.log(someonePassed1)

const someonePassed2 = exam2Scores.some(score => score >= 75)
console.log(someonePassed2)

// Reduce Function
const prices = [10, 2, 4, 7, 6, 13, 29, 50]

// for loop version
let total_for = 0
for (let price of prices){
    total_for += price
}
console.log(total_for)

// resuce version
const total = prices.reduce((sum, price) => {
    return sum + price
})

console.log(total)

const minPrice = prices.reduceRight((min, price) => {
    if(min > price) {return price}
    else {return min}
})

console.log(minPrice)