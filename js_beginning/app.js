console.log("Hello from our first JS file");

const dayOfWeek = "Friday";

if (dayOfWeek === "Monday"){
    console.log("I hate mondays 😭")
} else if (dayOfWeek === "Saturday"){
    console.log("I Love Saturdays! 🥰")
} else if (dayOfWeek === "Friday"){
    console.log("Fridays are decent, especially after work! 🙃")
} else {
    console.log("MEH")
}


// Age 0-5 : Free
// Age 5-10 : Child $10
// Age 10-65 : Adult $20
// Age 65+ : Senior $10

const age = parseInt(prompt("Please enter your age: "))
let ticketPrice;
let ageGroup = "";

console.log(`Age: ${age}`)

if (age < 5) {
    ticketPrice = "Free"
    ageGroup = "Young Child"
} else if (age < 10) {
    ticketPrice = "$10"
    ageGroup = "Child"
} else if (age < 65) {
    ticketPrice = "$20"
    ageGroup = "Adult"
} else {
    ticketPrice = "$10"
    ageGroup = "Senior"
}

if (ageGroup === "Adult"){
    console.log(`You are an ${ageGroup}. You get in for ${ticketPrice}`)
} else {
    console.log(`You are a ${ageGroup}. You get in for ${ticketPrice}`)
}

// Password must be 6+ chars
// Password cannot include space 

const pass = prompt("Enter a password").trim();

if (pass.length >= 6 && pass.indexOf(" ") === -1){
    console.log("Valid password")
} else {
    console.log("Invalid password")
}

// Switch Syntax
const day = prompt("Enter a day of the week: ").toLowerCase();
switch(day){
    case "monday":
        console.log("UGHHHH I HATE MONDAYSSSSSS 😭");
        break;
    case "wednesday":
        console.log("HUMPDAYYYYYYYY 🐫")
        break;
    case "friday":
        console.log("Thank god it's Friday, gonna get down on Friday 🥳")
        break;
    case "saturday":
        console.log("YAYYYYYYYYY 🥰")
        break;
    default:
        console.log("MEHHHH I'm not a huge fan of that day")
}