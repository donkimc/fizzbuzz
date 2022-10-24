
let array = [];
document.getElementById("restartBtn").disabled = true;
function fizzBuzz() {
    let s = '';
    if ((array.length+1)%3 === 0) {
        s += 'fizz';
    } 
    if ((array.length+1)%5 === 0) {
        s += 'buzz';
    }
    if (s !== '') {
        array.push(s);
    } else {
        array.push(array.length+1);
    }
}

function printFizzBuzz() {
    fizzBuzz();
    let tag = document.createElement("p");
    let text = document.createTextNode(array[array.length-1]);
    tag.appendChild(text);
    let element = document.getElementById("num");
    element.appendChild(tag);
}

 
let intervalId;
let progress = true;
function myStartFunction() {
    console.log('Started')
    document.getElementById("startBtn").disabled = true;
    document.getElementById("clearBtn").disabled = true;
    document.getElementById("restartBtn").disabled = true;
    intervalId = setInterval(printFizzBuzz, 1000);

}

function myClearFunction() {
    array = [];
    document.getElementById("num").innerHTML = "";
    document.getElementById("restartBtn").disabled = true;
}

function myRestartFunction() {
    myClearFunction();
    myStartFunction();
}

function myStopFunction() {
    document.getElementById("startBtn").disabled = false;
    document.getElementById("clearBtn").disabled = false;
    document.getElementById("restartBtn").disabled = false;
    clearInterval(intervalId);
    console.log('Stopped');
}






