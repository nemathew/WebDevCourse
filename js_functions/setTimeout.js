// ? setTimeout Function 
// ! It's important to know that the whole app doesn't just wait (it's not synchronous). Instead, it just moves onto the next command and then x amount of time later calls the setTimeout function. 

console.log("Hello....?")

setTimeout(() => {
    console.log("Are you still there...?")
}, 3000)

console.log("Goodbye :(")

// ? setInterval - similar to setTimeout except this repeatedly does the thing

const id = setInterval(() => {
    console.log(Math.random())
}, 3000);


// * You can stop the setInterval function by saving it's id into a variable (the id is returned when setInterval is called), and then passing the id into clearInterval()

setTimeout(() => {
    clearInterval(id);
}, 30000)
