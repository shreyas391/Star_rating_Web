var num = "ntg";
const yesFun = () => {
    if (num == "no") {
        console.log("error");
    }
    else{
        $(".yes").css("backgroundColor", "#9DDAC6")
        num = "yes"
    } 
}

const noFun = () => {
    if (num == "yes") {
        console.log("error");
    }
    else{
        $(".no").css("backgroundColor", "#9DDAC6")
        num = "no"

    } 
}

const subFun = () => {
    if (num == "yes" || num == "no") {
    const btn = document.getElementById("btn")
    btn.style.transform = "rotate(180deg)"
    btn.style.backgroundColor = "green"
    btn.style.width = "80px"
    btn.style.borderRadius = "50%"
    btn.style.height = "80px"
    btn.style.position = "relative"
    btn.style.left = "41%"
    btn.innerHTML = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>"

    var all = 1;
    const func = () => {
        all++
        if (all == 2) {
           clearInterval(interval)
            if (num == "yes") {
                document.location.href="Pages/yesPage.html"
            }
            else if (num == "no") {
                document.location.href="Pages/noPage.html"
            }
        }
    }
    const interval = setInterval(func , 1000);        
    }
    else {
        console.log("error");
    }
}
