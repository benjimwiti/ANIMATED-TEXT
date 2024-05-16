
const bodyEL = document.querySelector('body')
let greeting = [
    {iceBreaker: `hi`},
    {preposition: `I'm`},
    {name: `BENJI`}
    
]

let one = setTimeout( ()=> {
    renderWords()
},1000)

clearInterval(
    setInterval(() => {
        renderWords()
    },1000)
)

function renderWords() {
    const animationUtilities = document.createElement('style')
    animationUtilities.innerHTML = `
                        <style>
                        .animate {
                            animation: pop 1s linear 1;
                            transform-origin: bottom;
                        }
                        @keyframes pop {
                            0% {transform: scaleY(0); opacity:0;}
                            100% {transform: scaleY(1); opacity:1;}
                            }
                        </style>
                            `
    document.body.appendChild(animationUtilities)
    let one = `
                <div class="animate">
                ${greeting[0].iceBreaker}
                </div>
                `
    let two = `
                <div class="animate">
                ${greeting[1].preposition}
                </div>
                `
    let three = `
                <div class="animate">
                ${greeting[2].name}
                </div>
                `
    
    setTimeout(bodyEL.appendChild(one),1000)
    setTimeout(bodyEL.appendChild(two),2000)
    setTimeout(bodyEL.appendChild(three),3000)
}