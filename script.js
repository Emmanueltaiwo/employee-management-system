//All EMPLOYEES VARIABLES
let employee1El = document.getElementById("employee1-el")
let employee2El = document.getElementById("employee2-el")
let employee3El = document.getElementById("employee3-el")
let employee4El = document.getElementById("employee4-el")

//ALL TIME VARIABLES
let time1El = document.getElementById("time1-el")
let time2El = document.getElementById("time2-el")
let time3El = document.getElementById("time3-el")
let time4El = document.getElementById("time4-el")

//ALL DATES VARIABLES
let date1El = document.getElementById("date1-el")
let date2El = document.getElementById("date2-el")
let date3El = document.getElementById("date3-el")
let date4El = document.getElementById("date4-el")

//ADDING CURRENT DATE
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`


//ADDING CURRENT TIME
let time = new Date();
let currentTime = time.getHours() + " - " + time.getMinutes() + " - " + time.getSeconds() + ("am");


//ADDING FUNCTIONS TO EACH OF THE TIME BUTTON
function time1() {
    time1El.textContent = currentTime
}

function time2() {
    time2El.textContent = currentTime
}

function time3() {
    time3El.textContent = currentTime
}

function time4() {
    time4El.textContent = currentTime
}




//ADDING FUNCTIONS TO EACH OF THE DATE BUTTON
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


//ADDING AN IF TO SEND AN ALERT IF THE EMPLOYEE IS EARLY OR LATE FOR WORK
if (time.getHours() <= 9) {
    alert("Wohoo! You are early for work")
}

else {
    alert("You are Late for work")
}

//GIVING EACH EMPLOYEES A NAME THROUGH TEXTCONTENT
let employee1Name = employee1El.textContent = "Desire"
let employee2Name = employee2El.textContent = "Samuel"
let employee3Name = employee3El.textContent = "Yemisi"
let employee4Name = employee4El.textContent = "Emmanuel"


//ADDING FUNCTIONS TO EACH OF THE SEND BUTTON
function send1() {
    console.log(employee1Name + " resumed work by " + currentTime + " on the " + currentDate)
}

function send2() {
    console.log(employee2Name + " resumed work by " + currentTime + " on the " + currentDate)
}

function send3() {
    console.log(employee3Name + " resumed work by " + currentTime + " on the " + currentDate)
}

function send4() {
    console.log(employee4Name + " resumed work by " + currentTime + " on the " + currentDate)
}