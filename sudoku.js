let mainBox = document.querySelector(".MainBox")
let userInput = document.querySelector(".UserInput")

let array = [," ",1, " ", 3, " ", 5, 6, " ", 8, " "]

//elements created by js
window.addEventListener("DOMContentLoaded", () => {
    Elements()
    userInputsMethod()
})
function Elements() {
    for (let i = 1; i < 10; i++) {
        let boxex = document.createElement("div")
        boxex.setAttribute("id", "box" + i)
        boxex.setAttribute("class", "main")
        mainBox.append(boxex)

        for (let k = 1; k < 10; k++) {
            let subBox = document.createElement("p")
            subBox.setAttribute("id", "sub" + k)
            subBox.setAttribute("class", "subpara")
            subBox.innerText = array[k]
            boxex.append(subBox)
        }
    }
}

//digits created
function userInputsMethod() {
    let createDiv = document.createElement("div")
    createDiv.setAttribute("class", "digits")
    userInput.append(createDiv)

    for (let i = 1; i < 10; i++) {
        let createNumbers = document.createElement("p")
        createNumbers.setAttribute("class","Numbers"+i)
        createNumbers.setAttribute("id","Numbers")
        createNumbers.innerText = i
        createNumbers.classList.remove("select")
        createDiv.append(createNumbers)
    }

    //Number select and append on board

    let digitsNumbers = document.querySelectorAll("#Numbers")
    
    for(let k=0;k<digitsNumbers.length;k++){
        digitsNumbers[k].addEventListener("click",(e)=>{
            for(let a=0;a<digitsNumbers.length;a++){
                if(digitsNumbers[a].classList.contains("select")){
                    digitsNumbers[a].classList.remove("select")
                }
            }
            e.target.classList.add("select")
        })
    }
}

