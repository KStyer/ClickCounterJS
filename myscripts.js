window.onload = (e) => {
    // let message=sendGreetingTo("Crumbsby", "want a snack?")
    // window.alert(message)
    // let message2
    // message2=sendGreetingTo("Koto", "lets go fly a kite!")
    // console.log(message2)
    let clickTargetElement = document.getElementById("clickTarget");
    clickTargetElement.addEventListener("click", iterateCounter());

    let clickTargetElementLess = document.getElementById("clickTarget2");
    clickTargetElementLess.addEventListener("click", iterateCounter2());

}

function sendGreetingTo(to, greeting) {
    return "Hello There, " + to + " " + greeting;
}
function iterateCounter() {
    return () => {
        console.log("click event handled");
        let counterElement = document.getElementById("numberOfClicks");
        let currentCount = parseInt(counterElement.innerText);
        let newCount = currentCount + 1;
        counterElement.innerText = newCount;
        counterElement.appendChild
    }
}

function iterateCounter2() {
    return () => {
        console.log("less click event handled");
        let counterElement = document.getElementById("numberOfClicks");
        let currentCount = parseInt(counterElement.innerText);
        let newCount = currentCount - 1;
        counterElement.innerText = newCount;
        counterElement.appendChild;
    }
}