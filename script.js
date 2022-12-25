let mainDiv = document.getElementById("main")
let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let button = document.getElementById("bttn")
let rowContainer = document.getElementById("rowContainer")
button.addEventListener("click",()=> grid())
button.addEventListener("click",()=> document.getElementById("bttn").outerHTML = "")
button.addEventListener("click",()=> document.getElementById("button").outerHTML = "")
//when i click at the row container
rowContainer.addEventListener("click",()=> {
    //select all divs with class card2
    let divNodeList = document.querySelectorAll("div.card2")
    //change the nodelist into an array
    let divList = Array.from(divNodeList)
    //console log the array's length to see if it got the elements it was supposed to
    console.log(divList.length)
    //for each element in the array add an event listener
    divList.forEach(divList => divList.addEventListener("mouseover",()=> {
        //create a node list with all the elements in it
        let trueDivNodeList = document.getElementsByClassName("card2")
        //check if it works
        console.log(trueDivNodeList.length)
        //change the nodelist into an array
        let trueDivList = Array.from(trueDivNodeList)
        //for each element of an array when the mouse is over it 
        trueDivList.forEach(trueDivListItem => trueDivListItem.addEventListener("mouseover",()=>
        {   //change its color to black (IT WORKS IM SO HAPPY IT WORKS)
            trueDivListItem.setAttribute("style","background-color:black;")
        }))

        }))

})

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
