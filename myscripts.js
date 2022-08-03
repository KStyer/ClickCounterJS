let honeyBadgerExists = false;
let honeyBadgerInterval;
let honeyBadgerElement;

window.onload = (e) => {
    // let message=sendGreetingTo("Crumbsby", "want a snack?")
    // window.alert(message)
    // let message2
    // message2=sendGreetingTo("Koto", "lets go fly a kite!")
    // console.log(message2)
    // let clickTargetElement = document.getElementById("clickTarget");
    // clickTargetElement.addEventListener("click", incrementCounter());

    // let clickTargetElementLess = document.getElementById("clickTarget2");
    // clickTargetElementLess.addEventListener("click", decrementCounter());

    let moveUpButton = document.getElementById("moveUp");
    moveUpButton.addEventListener("click", upAction(document.getElementById("hyenaPixel")));

    let moveDownButton = document.getElementById("moveDown");
    moveDownButton.addEventListener("click", downAction(document.getElementById("hyenaPixel")));

    let moveLeftButton = document.getElementById("moveLeft");
    moveLeftButton.addEventListener("click", leftAction(document.getElementById("hyenaPixel")));

    let moveRightButton = document.getElementById("moveRight");
    moveRightButton.addEventListener("click", rightAction(document.getElementById("hyenaPixel")));

    honeyBadgerInterval = setInterval(handleHoneyBadger(), 500);






}



window.addEventListener("keydown", (e) => {
    // changeCounterValueBy(e.code)
    if (e.code == "KeyQ"){
        let circleElement = document.getElementById("hyenaPixel");
        circleElement.getElementsByTagName("img")[0].src="Img/PixelRock1.png";
    }
})



// function sendGreetingTo(to, greeting) {
//     return "Hello There, " + to + " " + greeting;
// }
// function incrementCounter() {
//     return () => {
//         console.log("click event handled");
//         changeCounterValueBy(1);
//     }
// }

// function decrementCounter() {
//     return () => {
//         console.log("less click event handled");
//         changeCounterValueBy(-1);
//     }
// }

function changeCounterValueBy(changeAmount) {
    let counterElement = document.getElementById("numberOfClicks");
    let currentCount = parseInt(counterElement.innerText);
    let newCount = currentCount + changeAmount;
    counterElement.innerText = newCount;
    // counterElement.appendChild;
}

function handleHoneyBadger() {
    return () => {
        let randomizer = Math.floor(Math.random() * 10);
        // console.log("the random number generated was " + randomizer)
        if (randomizer == 0 && honeyBadgerExists == false) {
            honeyBadgerExists = true
            honeyBadgerElement = document.createElement("div");
            let imgElement = document.createElement("img");
            imgElement.src = "Img/honeybadger.png";
            honeyBadgerElement.appendChild(imgElement);
            honeyBadgerElement.style.position = "absolute";
            // to do: the logic will be different for each side so may need to use a different random number generator to determine side he appears on
            // will need to use if else like starting at line 100 (in upAction) to select which random number relates to which wall
           
            let directionRandomizer = Math.floor(Math.random() * 2);
            if (directionRandomizer == 1) {
                 honeyBadgerElement.style.marginLeft = 0;
            honeyBadgerElement.style.marginTop = Math.floor(Math.random() * 175);
            }
            else {
                honeyBadgerElement.style.marginLeft = 260;
            honeyBadgerElement.style.marginTop = Math.floor(Math.random() * 175);
            }
            
            let backgroundPlains = document.getElementById("plains");
            backgroundPlains.appendChild(honeyBadgerElement);
            
        

        
            if (honeyBadgerExists == true && directionRandomizer == 0) {
            // to do: use another random number to determine which direction to go
            // to do: refactor the other driections so that we can pass them the element to move as well because right now it can only move upwards
                leftActionHoneyBadger(honeyBadgerElement).call();
            }
            if (honeyBadgerExists == true && directionRandomizer == 1) {
                rightActionHoneyBadger(honeyBadgerElement).call();
            }
        }

      
        

    }

}
// function checkCollision(backgroundPlains) {
//     return () => {
//         if 
//     }




let quote = fetch("https://api.quotable.io/random").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})

function upAction(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        // let currentTopMarginString = circleElement.style.marginTop;
        let currentTopMargin = parseFloat(circleElement.style.marginTop);
        // currentTopMargin = parseInt(currentTopMarginString);
        let newTopMargin = currentTopMargin - 5;
        console.log("hyena moved from " + currentTopMargin + " to " + newTopMargin);
        if (newTopMargin >= 0) {
            circleElement.style.marginTop = newTopMargin + "px";
            if (circleElement.style.transform.includes("scaleX(1)")) {
                circleElement.style.transform = "rotate(-10deg)";
            } else if (circleElement.style.transform.includes("scaleX(-1)")) {
                circleElement.style.transform = "scaleX(-1) rotate(-10deg)";
            } else {
                circleElement.style.transform = "rotate(-10deg)";
            }

        } 
        // else {
        //     circleElement.getElementsByTagName("img")[0].src = "Img/PixelRock1.png"
        // }

    }
}

function downAction(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        let currentBottomMargin = parseInt(circleElement.style.marginTop);
        let newBottomMargin = currentBottomMargin + 5;
        console.log("hyena moved from " + currentBottomMargin + " to " + newBottomMargin);
        if (newBottomMargin <= 175) {
            circleElement.style.marginTop = newBottomMargin + "px";
        }

    }

}

function leftAction(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        let currentLeftMargin = parseInt(circleElement.style.marginLeft);
        let newLeftMargin = currentLeftMargin - 5;
        console.log("hyena moved from " + currentLeftMargin + " to " + newLeftMargin);
        if (newLeftMargin >= 0) {
            circleElement.style.marginLeft = newLeftMargin + "px";
            circleElement.style.transform = "scaleX(-1)"
        }
    
    }

}

function rightAction(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        let currentRightMargin = parseFloat(circleElement.style.marginLeft);
        let newRightMargin = currentRightMargin + 5;
        console.log("hyena moved from " + currentRightMargin + " to " + newRightMargin);
        if (newRightMargin <= 260) {
            circleElement.style.marginLeft = newRightMargin + "px";
            circleElement.style.transform = "scaleX(1)"
        }

    }

}

function leftActionHoneyBadger(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        let currentLeftMargin = parseInt(circleElement.style.marginLeft);
        let newLeftMargin = currentLeftMargin - 5;
        console.log("badger moved from " + currentLeftMargin + " to " + newLeftMargin);
        if (newLeftMargin >= 0) {
            circleElement.style.marginLeft = newLeftMargin + "px";
            circleElement.style.transform = "scaleX(-1)"
        }
        let backgroundPlains = document.getElementById("plains");
            backgroundPlains.appendChild(honeyBadgerElement);
        if (newLeftMargin <= 1) {
            backgroundPlains.removeChild(honeyBadgerElement)
            honeyBadgerExists = false
        }

    }

}

function rightActionHoneyBadger(spriteToMove) {
    return () => {
        let circleElement = spriteToMove;
        let currentRightMargin = parseInt(circleElement.style.marginLeft);
        let newRightMargin = currentRightMargin + 5;
        console.log("badger moved from " + currentRightMargin + " to " + newRightMargin);
        if (newRightMargin <= 260) {
            circleElement.style.marginLeft = newRightMargin + "px";
            circleElement.style.transform = "scaleX(1)"
        }
        let backgroundPlains = document.getElementById("plains");
            backgroundPlains.appendChild(honeyBadgerElement);
        if (newRightMargin >= 261) {
            backgroundPlains.removeChild(honeyBadgerElement)
            honeyBadgerExists = false
        }

    }

}

window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowDown") {
        downAction(document.getElementById("hyenaPixel")).call()
    }

    if (e.code == "ArrowUp") {
        upAction(document.getElementById("hyenaPixel")).call()
    }

    if (e.code == "ArrowRight") {
        rightAction(document.getElementById("hyenaPixel")).call()
    }

    if (e.code == "ArrowLeft") {
        leftAction(document.getElementById("hyenaPixel")).call()
    }

})