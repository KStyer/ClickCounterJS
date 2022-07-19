window.onload = (e) => {
    // let message=sendGreetingTo("Crumbsby", "want a snack?")
    // window.alert(message)
    // let message2
    // message2=sendGreetingTo("Koto", "lets go fly a kite!")
    // console.log(message2)
    let clickTargetElement = document.getElementById("clickTarget");
    clickTargetElement.addEventListener("click", incrementCounter());

    let clickTargetElementLess = document.getElementById("clickTarget2");
    clickTargetElementLess.addEventListener("click", decrementCounter());

    let moveUpButton = document.getElementById("moveUp");
    moveUpButton.addEventListener("click", upAction());

    let moveDownButton = document.getElementById("moveDown");
    moveDownButton.addEventListener("click", downAction());

    let moveLeftButton = document.getElementById("moveLeft");
    moveLeftButton.addEventListener("click", leftAction());

    let moveRightButton = document.getElementById("moveRight");
    moveRightButton.addEventListener("click", rightAction());

}

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

function upAction() {
    return () => {
        let circleElement = document.getElementById("blueCircle");
        // let currentTopMarginString = circleElement.style.marginTop;
        let currentTopMargin = parseInt(circleElement.style.marginTop);
        // currentTopMargin = parseInt(currentTopMarginString);
        let newTopMargin = currentTopMargin -5;
        console.log("circle moved from " + currentTopMargin + " to " + newTopMargin);
        circleElement.style.marginTop = newTopMargin;
    }
}

function downAction() {
    return () => {
        let circleElement = document.getElementById("blueCircle");
        let currentBottomMargin = parseInt(circleElement.style.marginTop);
        let newBottomMargin = currentBottomMargin +5;
        console.log("circle moved from " + currentBottomMargin + " to " + newBottomMargin);
        circleElement.style.marginTop = newBottomMargin;
    }

}

function leftAction() {
    return () => {
        let circleElement = document.getElementById("blueCircle");
        let currentLeftMargin = parseInt(circleElement.style.marginLeft);
        let newLeftMargin = currentLeftMargin -5;
        console.log("circle moved from " + currentLeftMargin + " to " + newLeftMargin);
        circleElement.style.marginLeft = newLeftMargin;
    }

}

function rightAction() {
    return () => {
        let circleElement = document.getElementById("blueCircle");
        let currentRightMargin = parseInt(circleElement.style.marginLeft);
        let newRightMargin = currentRightMargin +5;
        console.log("circle moved from " + currentRightMargin + " to " + newRightMargin);
        circleElement.style.marginLeft = newRightMargin;
    }

}