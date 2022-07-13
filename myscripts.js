window.onload=(e)=>{
    let message=sendGreetingTo("Crumbsby", "want a snack?")
    window.alert(message)
    let message2=sendGreetingTo("Koto", "lets go fly a kite!")
    console.log(message2)
    let clickTargetElement = document.getElementById("clickTarget")
    clickTargetElement.addEventListener("click", iterateCounter())
}

function sendGreetingTo(to, greeting){
    return "Hello There, " + to + " " + greeting;
}
function iterateCounter(){
    return ()=>{
        console.log("click event handled")
    }
    
}