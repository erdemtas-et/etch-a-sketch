

const createUI = () => {
    const containerDiv = document.getElementsByClassName("container")[0]
    for(let i=0;i<16;i++) {
        for(let j=0;j<16;j++) {
     const divSqr = document.createElement('div')
        divSqr.classList.add("ind-div")
        containerDiv.appendChild(divSqr)
        }
    }
}

createUI()

const getSquares = document.getElementsByClassName("ind-div")
console.log(getSquares.length)

let mySquareArray = Array.from(getSquares)
mySquareArray.forEach((div)=> {
    div.addEventListener("mouseenter",()=> {
        div.classList.add("black-back")
    })
})

