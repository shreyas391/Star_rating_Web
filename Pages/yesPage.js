const text = document.getElementById("c")
const python = document.getElementById("python")
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

var all = 1;

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
        btn.style.left = "44%"
        btn.style.marginTop = "10%"
        btn.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        
        const func = () => {
            all++
            if (all == 2) {
                clearInterval(interval)
                // const responsive = x => {
                //     if (x.matches) {
                //         container.style.transform = "translateX(-560%)"
                //     }
                // }
                // var x = window.matchMedia("max-width: 699px")
                // responsive(x)
                // x.addEventListener(responsive)
                container.style.transform = "translateX(-160%)"
                container2.style.transform = "translateX(-300%)"
            }
        }
        const interval = setInterval(func , 1000);
    }   
}


function first() {
    calStars = 6
    Star11.style.color = "#F5FDB0"
    Star11.style.opacity = "1"
    python.innerHTML = "Beginner!"
    container2.style.height = "450px"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('Star' + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '0.3'
    }
}

function second() {
    calStars = 7
    python.innerHTML = "Beginner!"
    container2.style.height = "450px"
    for (let i = 1; i <= 2; i++) {
        document.getElementById('Star' + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '1'
    }
    for (let i = 3; i <= 5; i++) {
        document.getElementById('Star' + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '0.3'
    }
}

function third() {
    calStars = 8
    python.innerHTML = "Intermediate!"
    container2.style.height = "450px"
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Star' + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '1'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('Star' + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '0.3'
    }
}

function fourth() {
    calStars = 9
    python.innerHTML = "Intermediate!"
    container2.style.height = "450px"
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Star' + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '1'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('Star' + i + i).style.color = '#F5FDB0'
       document.getElementById('Star' + i + i).style.opacity = '0.3'
    }
}

function fifth() {
    calStars = 10
    python.innerHTML = "Guru!"
    container2.style.height = "450px"
    for (let i = 1; i <= 5; i++) {
        document.getElementById('Star' + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i).style.opacity = '1'
    }
}

const subFun2 = () => {
    if (calStars <= 5) {
       console.log("error");
    }
    else {
        btn2.style.transform = "rotate(360deg)"
        btn2.style.backgroundColor = "green"
        btn2.style.width = "80px"
        btn2.style.borderRadius = "50%"
        btn2.style.height = "80px"
        btn2.style.position = "relative"
        btn2.style.left = "44%"
        btn2.style.marginTop = "10%"
        btn2.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        const fun2 = () => {
            all++
            if (all == 3) {
                clearInterval(interval2)
                container2.style.transform = "translateX(-500%)"
                container3.style.transform = "translateX(-400%)"
            }
        }
        const interval2 = setInterval(fun2 , 1000);
    }   
}

function fir() {
    calStars = 11
    Star111.style.color = "#F5FDB0"
    Star111.style.opacity = "1"
    java.innerHTML = "Beginner!"
    container3.style.height = "450px"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('Star' + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i).style.opacity = '0.3'
    }
}

function sec() {
    calStars = 12
    java.innerHTML = "Beginner!"
    container3.style.height = "450px"
    for (let i = 1; i <= 2; i++) {
        document.getElementById('Star' + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i).style.opacity = '1'
    }
    for (let i = 3; i <= 5; i++) {
        document.getElementById('Star' + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i).style.opacity = '0.3'
    }
}

function thi() {
    calStars = 13
    java.innerHTML = "Intermediate!"
    container3.style.height = "450px"
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Star' + i + i + i ).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i ).style.opacity = '1'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('Star' + i + i + i ).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i ).style.opacity = '0.3'
    }
}

function fou() {
    calStars = 14
    java.innerHTML = "Intermediate!"
    container3.style.height = "450px"
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Star' + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i).style.opacity = '1'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('Star' + i + i + i).style.color = '#F5FDB0'
       document.getElementById('Star' + i + i + i).style.opacity = '0.3'
    }
}

function fif() {
    calStars = 15
    java.innerHTML = "Guru!"
    container3.style.height = "450px"
    for (let i = 1; i <= 5; i++) {
        document.getElementById('Star' + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i).style.opacity = '1'
    }
}

const subFun3 = () => {
    if (calStars <= 10) {
       console.log("error");
    }
    else {
        btn3.style.transform = "rotate(360deg)"
        btn3.style.backgroundColor = "green"
        btn3.style.width = "80px"
        btn3.style.borderRadius = "50%"
        btn3.style.height = "80px"
        btn3.style.position = "relative"
        btn3.style.left = "44%"
        btn3.style.marginTop = "10%"
        btn3.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        const fun3 = () => {
            all++
            if (all == 4) {
                clearInterval(interval3)
                container3.style.transform = "translateX(-590%)"
                container4.style.transform = "translateX(-500%)"
            }
        }
        const interval3 = setInterval(fun3 , 1000);
    }   
}

function fi() {
    calStars = 16
    Star1111.style.color = "#F5FDB0"
    Star1111.style.opacity = "1"
    css.innerHTML = "Beginner!"
    container4.style.height = "450px"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '0.3'
    }
}

function se() {
    calStars = 17
    css.innerHTML = "Beginner!"
    container4.style.height = "450px"
    for (let i = 1; i <= 2; i++) {
        document.getElementById('Star' + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '1'
    }
    for (let i = 3; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '0.3'
    }
}

function th() {
    calStars = 18
    css.innerHTML = "Intermediate!"
    container4.style.height = "450px"
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Star' + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '1'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '0.3'
    }
}

function fo() {
    calStars = 19
    css.innerHTML = "Intermediate!"
    container4.style.height = "450px"
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Star' + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '1'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('Star' + i + i + i + i).style.color = '#F5FDB0'
       document.getElementById('Star' + i + i + i + i).style.opacity = '0.3'
    }
}

function fift() {
    calStars = 20
    css.innerHTML = "Guru!"
    container4.style.height = "450px"
    for (let i = 1; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i).style.opacity = '1'
    }
}

const subFun4 = () => {
    if (calStars <= 15) {
       console.log("error");
    }
    else {
        btn4.style.transform = "rotate(360deg)"
        btn4.style.backgroundColor = "green"
        btn4.style.width = "80px"
        btn4.style.borderRadius = "50%"
        btn4.style.height = "80px"
        btn4.style.position = "relative"
        btn4.style.left = "44%"
        btn4.style.marginTop = "10%"
        btn4.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        const fun4 = () => {
            all++
            if (all == 5) {
                clearInterval(interval4)
                container4.style.transform = "translateX(-690%)"
                container5.style.transform = "translateX(-600%)"
            }
        }
        const interval4 = setInterval(fun4 , 1000);
    }   
}

function f() {
    calStars = 21
    Star11111.style.color = "#F5FDB0"
    Star11111.style.opacity = "1"
    programmer.innerHTML = "newbie!"
    container5.style.height = "450px"
    for (let i = 2; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '0.3'
    }
}

function s() {
    calStars = 22
    programmer.innerHTML = "newbie!"
    container5.style.height = "450px"
    for (let i = 1; i <= 2; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '1'
    }
    for (let i = 3; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.fill = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '0.3'
    }
}

function t() {
    calStars = 23
    programmer.innerHTML = "Intermediate!"
    container5.style.height = "450px"
    for (let i = 1; i <= 3; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '1'
    }
    for (let i = 4; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '0.3'
    }
}

function four() {
    calStars = 24
    programmer.innerHTML = "Intermediate!"
    container5.style.height = "450px"
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '1'
    }
    for (let i = 5; i <= 5; i++) {
       document.getElementById('Star' + i + i + i + i + i).style.color = '#F5FDB0'
       document.getElementById('Star' + i + i + i + i + i).style.opacity = '0.3'
    }
}

function fifthf() {
    calStars = 25
    programmer.innerHTML = "Best!"
    container5.style.height = "450px"
    for (let i = 1; i <= 5; i++) {
        document.getElementById('Star' + i + i + i + i + i).style.color = '#F5FDB0'
        document.getElementById('Star' + i + i + i + i + i).style.opacity = '1'
    }
}

const subFun5 = () => {
    if (calStars <= 20) {
       console.log("error");
    }
    else {
        btn5.style.transform = "rotate(360deg)"
        btn5.style.backgroundColor = "green"
        btn5.style.width = "80px"
        btn5.style.borderRadius = "50%"
        btn5.style.height = "80px"
        btn5.style.position = "relative"
        btn5.style.left = "44%"
        btn5.style.marginTop = "10%"
        btn5.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

        const fun5 = () => {
            all++
            if (all == 6) {
                clearInterval(interval5)
                container5.style.transform = "translateX(-770%)"
            }
        }
        const interval5 = setInterval(fun5 , 1000);
    }   
}
