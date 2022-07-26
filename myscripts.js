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
    moveDownButton.addEventListener("click", downAction());

    let moveLeftButton = document.getElementById("moveLeft");
    moveLeftButton.addEventListener("click", leftAction());

    let moveRightButton = document.getElementById("moveRight");
    moveRightButton.addEventListener("click", rightAction());

    honeyBadgerInterval = setInterval(handleHoneyBadger(), 500);


}



window.addEventListener("keydown", (e) => {
    // changeCounterValueBy(e.code)
    if (e.code == "KeyQ"){
        let circleElement = document.getElementById("hyenaPixel");
        circleElement.getElementsByTagName("img")[0].src="Img/PixelRock1.png";
    }
})

function sendGreetingTo(to, greeting) {
    return "Hello There, " + to + " " + greeting;
}
function incrementCounter() {
    return () => {
        console.log("click event handled");
        changeCounterValueBy(1);
    }
}

function decrementCounter() {
    return () => {
        console.log("less click event handled");
        changeCounterValueBy(-1);
    }
}

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
            imgElement.src="Img/honeybadger.png";
            honeyBadgerElement.appendChild(imgElement);
            honeyBadgerElement.style.posistion = "absolute";
            // to do: the logic will be different for each side so may need to use a different random number generator to determine side he appears on
            // will need to use if else like starting at line 100 (in upAction) to select which random number relates to which wall
            honeyBadgerElement.style.marginTop = Math.floor(Math.random() * 175);
            let backgroundPlains = document.getElementById("plains");
            backgroundPlains.appendChild(honeyBadgerElement);
        }
        if (honeyBadgerExists == true) {
            // to do: use another random number to determine which direction to go
            // to do: refactor the other driections so that we can pass them the element to move as well because right now it can only move upwards
            upAction(honeyBadgerElement).call()
        }
    }
}

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
        
        } else {
            circleElement.getElementsByTagName("img")[0].src="Img/PixelRock1.png"
        }

    }
}

function downAction() {
    return () => {
        let circleElement = document.getElementById("hyenaPixel");
        let currentBottomMargin = parseInt(circleElement.style.marginTop);
        let newBottomMargin = currentBottomMargin + 5;
        console.log("hyena moved from " + currentBottomMargin + " to " + newBottomMargin);
        if (newBottomMargin <= 175) {
            circleElement.style.marginTop = newBottomMargin + "px";
        }

    }

}

function leftAction() {
    return () => {
        let circleElement = document.getElementById("hyenaPixel");
        let currentLeftMargin = parseInt(circleElement.style.marginLeft);
        let newLeftMargin = currentLeftMargin - 5;
        console.log("hyena moved from " + currentLeftMargin + " to " + newLeftMargin);
        if (newLeftMargin >= 0) {
            circleElement.style.marginLeft = newLeftMargin + "px";
            circleElement.style.transform = "scaleX(-1)"
        }

    }

}

function rightAction() {
    return () => {
        let circleElement = document.getElementById("hyenaPixel");
        let currentRightMargin = parseInt(circleElement.style.marginLeft);
        let newRightMargin = currentRightMargin + 5;
        console.log("hyena moved from " + currentRightMargin + " to " + newRightMargin);
        if (newRightMargin <= 260) {
            circleElement.style.marginLeft = newRightMargin + "px";
            circleElement.style.transform = "scaleX(1)"
        }

    }

}