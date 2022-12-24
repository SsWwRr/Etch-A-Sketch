let mainDiv = document.getElementById("main")
let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let button = document.getElementById("bttn")
button.addEventListener("click",()=> grid())
button.addEventListener("click",()=> document.getElementById("bttn").outerHTML = "")
button.addEventListener("click",()=> document.getElementById("button").outerHTML = "")
function grid(){
    for(let i = 0;i<8;i++){
        let subDiv1 = document.createElement("div")
        subDiv1.className = "card"

        row1.appendChild(subDiv1)
        for(let j = 0; j < 16; j++){
            let subDiv2 = document.createElement("div")
            subDiv2.className = "card2"

            subDiv1.appendChild(subDiv2)
        }    
    }
    for(i = 0;i<8;i++){
        let subDiv1 = document.createElement("div")
        subDiv1.className = "card"

        row2.appendChild(subDiv1)
        for(let j = 0; j < 16; j++){
            let subDiv2 = document.createElement("div")
            subDiv2.className = "card2"

            subDiv1.appendChild(subDiv2)
        }    
        
    }
}