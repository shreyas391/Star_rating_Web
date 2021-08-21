const Star1 = document.querySelector("#Star1")
const Star2 = document.querySelector("#Star2")
const btn = document.getElementById("btn")
const container = document.getElementById("container")
const text = document.querySelector("h1")
var calStars = 0

function firstStar() {
    calStars = 1
    Star1.style.color = "#F5FDB0"
    Star1.style.opacity = "1"
    text.innerHTML = "Beginner!"
    container.style.height = "450px"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('Star' + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '0.3'
    }
}

function secondStar() {
    calStars = 2
    text.innerHTML = "Beginner!"
    container.style.height = "450px"
    for (let i = 1; i <= 2; i++) {
        document.getElementById('Star' + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '1'
    }
    for (let i = 3; i <= 5; i++) {
        document.getElementById('Star' + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '0.3'
    }
}

function thirdStar() {
    calStars = 3
    text.innerHTML = "Intermediate!"
    container.style.height = "450px"
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Star' + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '1'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('Star' + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '0.3'
    }
}

function fourthStar() {
    calStars = 4
    text.innerHTML = "Intermediate!"
    container.style.height = "450px"
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Star' + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '1'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('Star' + i).style.color = '#F5FDB0'
       document.getElementById('Star' + i).style.opacity = '0.3'
    }
}

function fifthStar() {
    calStars = 5
    text.innerHTML = "Guru!"
    container.style.height = "450px"
    for (let i = 1; i <= 5; i++) {
        document.getElementById('Star' + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i).style.opacity = '1'
    }
}

const subFun = () => {
    if (calStars == 0) {
       console.log("error");
    }
    else {
        btn.style.transform = "rotate(360deg)"
        btn.style.backgroundColor = "green"
        btn.style.width = "80px"
        btn.style.borderRadius = "50%"
        btn.style.height = "80px"
        btn.style.position = "relative"
        btn.style.left = "41%"
        btn.style.marginTop = "10%"
        btn.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        var all = 1;
        const func = () => {
            all++
            if (all == 2) {
            clearInterval(interval)
            container.style.transform = "translateX(-160%)"
            }
        }
        const interval = setInterval(func , 1000);
    }   
}