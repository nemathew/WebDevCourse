const btn_2 = document.querySelector('#v2')

btn_2.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked...")
}

function scream() {
    console.log("AAAAAAHHHHHH")
    console.log("Stop Touching meeeeee")
}

btn_2.onmouseenter = scream;

const btn_3 = document.querySelector('#v3')

btn_3.addEventListener('click', () => {
    alert("Clicked V3 Activate")
})