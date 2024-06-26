const bodyEL = document.querySelector('body')
bodyEL.style.display = `flex`
bodyEL.style.justifyContent = `center`
bodyEL.style.alignItems = `center`
bodyEL.style.gap = `10px`
bodyEL.style.fontSize = `5rem`
bodyEL.style.height = `100vh`


let greeting = [
    {iceBreaker: `hi`},
    {preposition: `I'm`},
    {name: `BENJI`}
    
]


function renderWords() {
    const animationUtilities = document.createElement('style')
    animationUtilities.innerHTML = `
                        .animate {
                            animation: pop .1s linear 1;
                            transform-origin: bottom;
                        }
                        @keyframes pop {
                            0% {transform: scaleY(0); opacity:0;}
                            100% {transform: scaleY(1); opacity:1;}
                            }
                        div {
                            height: auto;
                        }
                        
                            `
    document.body.appendChild(animationUtilities)

    let one = document.createElement('div')
    one.classList = `animate`
    one.innerHTML = greeting[0].iceBreaker
    
    let two = document.createElement('div')
    two.classList= `animate`
    two.innerHTML = greeting[1].preposition
    
    let three = document.createElement('div')
    three.classList = `animate`
    three.innerHTML= greeting[2].name

    
    setTimeout(() => {bodyEL.appendChild(one)},1000)
    setTimeout(() => {bodyEL.appendChild(two)},2000)
    setTimeout(() => {bodyEL.appendChild(three)},2200)
}

document.addEventListener('DOMContentLoaded', renderWords)

