let mainDiv = document.getElementById("main")
let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let button = document.getElementById("bttn")
let eraserContainer = document.getElementById("eraserContainer")
let pencilContainer = document.getElementById("pencilContainer")
let rowContainer = document.getElementById("rowContainer")
let gridChangeContainer = document.getElementById("gridChangeContainer")
let gridChange = document.createElement("button")
let gridChangeTXT = document.createTextNode("Change grid")
let amountOfsquares = ""
gridChange.classList.add("button")
button.addEventListener("click",()=>{
    let eraser = document.createElement("button")
    let eraserTXT = document.createTextNode("Eraser")
    eraser.classList.add("button")
    eraser.append(eraserTXT)
    eraserContainer.append(eraser)
    //ERASER
    eraser.addEventListener("click",()=>{

        
            //select all divs with class card2
            let divNodeList = document.querySelectorAll("div.card2")
            //change the nodelist into an array
            let divList = Array.from(divNodeList)
            //for each element in the array add an event listener
            divList.forEach(divList => divList.addEventListener("mouseover",()=> {
                //create a node list with all the elements in it
                let trueDivNodeList = document.getElementsByClassName("card2")
                //change the nodelist into an array
                let trueDivList = Array.from(trueDivNodeList)
                //for each element of an array when the mouse is over it 
                trueDivList.forEach(trueDivListItem => trueDivListItem.addEventListener("mouseover",()=>
                {   //change its color to white cuz its an eraser (IT WORKS IM SO HAPPY IT WORKS)
                    trueDivListItem.setAttribute("style","background-color:white;")
                }))
        
                }))
        
        })
    }) 
    

button.addEventListener("click",()=>{
    gridChange.append(gridChangeTXT)
    gridChangeContainer.append(gridChange)
})
gridChange.addEventListener("click",()=>{
     amountOfsquares = prompt("How big do you want your grid to be?")
     deleteGrid()
     grid(amountOfsquares)

     }

)
button.addEventListener("click",()=> grid())
button.addEventListener("click",()=> document.getElementById("bttn").outerHTML = "")
button.addEventListener("click",()=> document.getElementById("button").outerHTML = "")
//when i click at the row container
button.addEventListener("click",()=>{
    let pencil = document.createElement("button")
    let pencilTXT = document.createTextNode("Pencil")
    pencil.classList.add("button")
    pencil.append(pencilTXT)
    pencilContainer.append(pencil)
    //pencil
    pencil.addEventListener("click",()=>{

        
            //select all divs with class card2
            let divNodeList = document.querySelectorAll("div.card2")
            //change the nodelist into an array
            let divList = Array.from(divNodeList)
            //for each element in the array add an event listener
            divList.forEach(divList => divList.addEventListener("mouseover",()=> {
                //create a node list with all the elements in it
                let trueDivNodeList = document.getElementsByClassName("card2")
                //change the nodelist into an array
                let trueDivList = Array.from(trueDivNodeList)
                //for each element of an array when the mouse is over it 
                trueDivList.forEach(trueDivListItem => trueDivListItem.addEventListener("mouseover",()=>
                {   //change its color to white cuz its an eraser (IT WORKS IM SO HAPPY IT WORKS)
                    trueDivListItem.setAttribute("style","background-color:black;")
                }))
        
                }))
        
        })
    }) 

function grid(amountOfsquares = 16){
    if(amountOfsquares > 100 || isNaN(amountOfsquares)){
        return alert("The value is too high, or its not a number. Try again.")
    }
    else if(amountOfsquares != 1){
        for(let i = 0;i<Math.ceil((amountOfsquares/2)) ;i++){
            let subDiv1 = document.createElement("div")
            subDiv1.className = "card"
    
            row1.appendChild(subDiv1)
            for(let j = 0; j < amountOfsquares; j++){
                let subDiv2 = document.createElement("div")
                subDiv2.className = "card2"
    
                subDiv1.appendChild(subDiv2)
            }    
        }
        for(i = 0;i<Math.ceil((amountOfsquares/2));i++){
            let subDiv1 = document.createElement("div")
            subDiv1.className = "card"
    
            row2.appendChild(subDiv1)
            for(let j = 0; j < amountOfsquares; j++){
                let subDiv2 = document.createElement("div")
                subDiv2.className = "card2"
    
                subDiv1.appendChild(subDiv2)
                
            }    
            
        }
    }else if(amountOfsquares === 1){
        for(let i = 0;i< amountOfsquares/2  ;i++){
            let subDiv1 = document.createElement("div")
            subDiv1.className = "card"
    
            row1.appendChild(subDiv1)
            for(let j = 0; j < amountOfsquares; j++){
                let subDiv2 = document.createElement("div")
                subDiv2.className = "card2"
    
                subDiv1.appendChild(subDiv2)
            }    
        }
        for(i = 0;i<amountOfsquares/2;i++){
            let subDiv1 = document.createElement("div")
            subDiv1.className = "card"
    
            row2.appendChild(subDiv1)
            for(let j = 0; j < amountOfsquares; j++){
                let subDiv2 = document.createElement("div")
                subDiv2.className = "card2"
    
                subDiv1.appendChild(subDiv2)
                
            }    
            
        }
        
    }
}
function deleteGrid(amountOfsquares = 8){
    let cardNodeList = document.getElementsByClassName("card")
    let cardList = Array.from(cardNodeList)
    for(let i = 0; i < amountOfsquares; i++){


        cardList.forEach(item => item.remove())
        
    }
}