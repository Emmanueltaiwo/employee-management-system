
let employee1El = document.getElementById("employee1-el")
let employee2El = document.getElementById("employee2-el")
let employee3El = document.getElementById("employee3-el")
let employee4El = document.getElementById("employee4-el")

let time1El = document.getElementById("time1-el")
let time2El = document.getElementById("time2-el")
let time3El = document.getElementById("time3-el")
let time4El = document.getElementById("time4-el")

let date1El = document.getElementById("date1-el")
let date2El = document.getElementById("date2-el")
let date3El = document.getElementById("date3-el")
let date4El = document.getElementById("date4-el")


let currentDate = "18 - 7 - 2022"

let currentTime = 9
let timeDetails = ":00am"

function time1() {
    time1El.textContent = currentTime + timeDetails
}

function time2() {
    time2El.textContent = currentTime + timeDetails
}

function time3() {
    time3El.textContent = currentTime + timeDetails
}

function time4() {
    time4El.textContent = currentTime + timeDetails
}

function date1() {
    date1El.textContent = currentDate
}

function date2() {
    date2El.textContent = currentDate
}

function date3() {
    date3El.textContent = currentDate
}

function date4() {
    date4El.textContent = currentDate
}


if (currentTime <= 9) {
    alert("Wohoo! You are early for work")``
}

else {
    alert("You are Late for work")
}

function send() {
    console.log("Emmanuel resumed work at " + currentTime + timeDetails + " on the" + currentDate)
}