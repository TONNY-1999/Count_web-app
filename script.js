//initialize the count
//listen for clicks on button
//increment
//change the count-el

let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

//create increment button

function increment(){
    count += 1
    countEL.textContent = count
    
}

//create save button

function save(){
let countStr = count + " _ "
saveEL.textContent += countStr
countEL.textContent = 0
count = 0
}
