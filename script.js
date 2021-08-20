const f_1 = document.querySelector("#f_1")
const f_2 = document.querySelector("#f_2")

function firstStar() {
    f_1.style.backgroundColor = "yellow"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'aqua'
    }
}

function secondStar() {
    f_1.style.backgroundColor = "yellow"
    f_2.style.backgroundColor = "yellow"
    for (let i = 3; i <= 5; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'aqua'
    }
}

function thirdStar() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'yellow'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'aqua'
    }
}

function fourthStar() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'yellow'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('f_' + i).style.backgroundColor = 'aqua'
    }
}

function fifthStar() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('f_' + i).style.backgroundColor = 'yellow'
    }
}