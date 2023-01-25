let arrowLeft = document.getElementById("toleft")
let arrowRight = document.getElementById("toright")
let images = document.querySelectorAll(".slider img")

let maxIndex = images.length - 1
let index = 0

arrowRight.onclick = function(){
    
    if(index >= maxIndex){
        index = 0
    }
    else{
        index += 1
    }
    document.getElementById("slider").scrollTo({
        top: 0,
        left: images[index].offsetLeft,
        behavior: "smooth"
    })
}

arrowLeft.onclick = function(){
    if(index <= 0){
        index = maxIndex
    }
    else{
        index += -1
    }
    document.getElementById("slider").scrollTo({
        top: 0,
        left: images[index].offsetLeft,
        behavior: "smooth"
    })
}

window.onresize = function(){
    document.getElementById("slider").scrollTo({
        top: 0,
        left: images[index].offsetLeft,
        behavior: "auto"
    })
}