//random int function off of w3 school
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//building the array for random characters with numbers
var arrFinal = []
function numbers() {
    let strCompare = "!@#$%^&*"
    for (i = 0; i <= 99; i++) {
        arrFinal.push(i + " = " + strCompare.charAt(getRandomInt(8)));
        if (i % 9 == 0) {
            arrFinal[i] = i + ' = &';
        }
    }
    return arrFinal;
}
numbers();

//setting string to be new line to display on 5th pane
let strFinal = ''
for (i = 0; i <= 98; i++) {
    strFinal += arrFinal[i] + '<br>'
}

//function for reset button to actually reset mind reader
function resetMR() {
    if (document.getElementById("botRightBtn").onclick && currState > 1) {
        currState = 0;
        document.getElementById("botRightBtn").innerHTML = "Go!";
        document.getElementById("bigText").innerHTML = "I can read your mind!";
        document.getElementById("mainBtn").style.display = "none";
        document.getElementById("mainBtn").innerHTML = "Next";
        document.getElementById("subTxt").innerHTML = "Click go!";
    }
}

//function to 
let currState = 0;
document.getElementById("mainBtn").style.display = "none";
function stateChange() {
    //state should go 0 to 5 and reset after clicking on 5
    currState += 1;
    if (currState === 6) {
        currState = 0;
    }

    console.log(currState);
    switch (currState) {
        case 0:
            //default page. needs go button, switches after this state
            document.getElementById("botRightBtn").innerHTML = "Go!";
            document.getElementById("bigText").innerHTML = "I can read your mind!";
            document.getElementById("mainBtn").style.display = "none";
            document.getElementById("subTxt").innerHTML = "Click go!";
            document.getElementById("mainBtn").innerHTML = "Next";

            break;
        case 1:
            //pick a number from 1-99
            document.getElementById("botRightBtn").innerHTML = "Restart!";
            document.getElementById("bigText").innerHTML = "Choose a number from 1-99";
            document.getElementById("mainBtn").style.display = "block";
            document.getElementById("subTxt").innerHTML = "When you have your number click next!";
            // if (document.getElementById("mainBtn").onclick) console.log('it worked')
            break;
        case 2:
            //add numbers together
            document.getElementById("bigText").innerHTML = "Add both digits together to get a new number";
            document.getElementById("subTxt").innerHTML = "Ex: 14 is 1 + 4 = 5";
            // if (document.getElementById("botRightBtn").onclick) console.log('it worked')
            break;
        case 3:
            //subtract new number from original
            document.getElementById("bigText").innerHTML = "Subtract your new number from the original number";
            document.getElementById("subTxt").innerHTML = "Ex: 14 - 5 = 9";
            break;
        case 4:
            //find new number
            document.getElementById("bigText").innerHTML = strFinal;
            document.getElementById("subTxt").innerHTML = "Find your new number. Take note of the associated symbol.";
            document.getElementById("mainBtn").innerHTML = "Reveal";
            break;
        case 5:
            //reveal answer
            document.getElementById("bigText").innerHTML = "&";
            document.getElementById("mainBtn").style.display = "none";
            document.getElementById("subTxt").innerHTML = "Your symbol is &";
            break;
        default:
    
    
    }
}