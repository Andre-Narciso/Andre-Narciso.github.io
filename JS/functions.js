let arrowImg = document.getElementById("arrow-img")
let menuOptions = document.querySelectorAll("a span")
let nav = document.querySelector('nav')



arrowImg.style.transition = "1s"
nav.style.transition = "1s"

arrow.onclick = function(){

    if(arrowImg.getAttribute("active") === "no"){
        arrowImg.style.transform = "rotate(180deg)"
        menuOptions.forEach(span => {
            span.style.width = "90px"
            nav.style.left = "0"
        })
        arrowImg.setAttribute("active","yes")
    }else{
        arrowImg.style.transform = "rotate(0deg)"
        menuOptions.forEach(span => {
            span.style.width = "0px"
            nav.style.left = "-75px"
        })
        arrowImg.setAttribute("active","no")
    }
}

window.onload = function(){
    document.querySelector("nav").style.visibility = "visible"
    document.querySelector("main").removeAttribute("style")
    document.querySelector("header").removeAttribute("style")
}
    
