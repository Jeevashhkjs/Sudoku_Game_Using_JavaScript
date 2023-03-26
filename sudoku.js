let mainBox = document.querySelector(".MainBox")
let userInput = document.querySelector(".UserInput")

let n1 = [1,2,3,10,11,12,19,20,21]
let n2 = [4,5,6,13,14,15,22,23,24]
let n3 = [7,8,9,16,17,18,25,26,27]

let n4 = [28,29,30,37,38,39,46,47,48]
let n5 = [31,32,33,40,41,42,49,50,51]
let n6 = [34,35,36,43,44,45,52,53,54]

let n7 = [55,56,57,64,65,66,73,74,75]
let n8 = [58,59,60,67,68,69,76,77,78]
let n9 = [61,62,63,70,71,72,79,80,81]

let crtNumbers = [...n1,...n2,...n3,...n4,...n5,...n6,...n7,...n8,...n9]

//elements created by js
window.addEventListener("DOMContentLoaded", () => {
    Elements()
    userInputsMethod()

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


    let sub = document.querySelectorAll(".subpara")
    for(let i=0;i<sub.length;i++){
        sub[i].addEventListener("click",(e)=>{
            for(let k=0;k<digitsNumbers.length;k++){
                if(digitsNumbers[k].classList.contains("select")){
                    e.target.innerText = digitsNumbers[k].innerText
                    digitsNumbers[k].classList.remove("select")
                }
            }
        })
    }


    for(let i=0;i<sub.length;i++){
        sub[i].innerText = crtNumbers[i]
    }

    for(let l=0;l<n1.length;l++){
        sub[l].classList.add("row")
    }

})

//subBoxex created by js
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

}

