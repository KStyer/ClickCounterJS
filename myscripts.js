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
    counterElement.appendChild;
}
