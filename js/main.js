//random int function off of w3 school. this takes a max integer and returns it from 0-max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//building the array for random characters with numbers
var arrFinal = []
var strFinal = ''
let ninthVar;
function numbers() {
    let strCompare = "!@#$%^&*"
    ninthVar = strCompare.charAt(getRandomInt(strCompare.length))
    for (i = 0; i <= 99; i++) {
        arrFinal.push(i + " = " + strCompare.charAt(getRandomInt(strCompare.length))); //using above function to get a random character from above string
        if (i % 9 == 0) {
            arrFinal[i] = i + ' = ' + ninthVar; //setting every divisible by nine to specific character to make magic work
        }
    }

    strFinal = ''
    for (i = 0; i <= 98; i++) {
    strFinal += arrFinal[i] + '<br>'
}
}

//setting string to be new line to display on 5th pane and building the list to display


//function for reset button to actually reset mind reader. 
function resetMR() {
    if (document.getElementById("botRightBtn").onclick && currState > 1) {
        currState = 0;

        //five points below to set up first page on reset. switching state only didn't fix it to original page
        document.getElementById("botRightBtn").innerHTML = "Go!";
        document.getElementById("bigText").innerHTML = "I can read your mind!";
        document.getElementById("mainBtn").style.display = "none";
        document.getElementById("mainBtn").innerHTML = "Next";
        document.getElementById("subTxt").innerHTML = "Click go!";
    }
}

//function to change state on click
let currState = 0;
document.getElementById("mainBtn").style.display = "none";
function stateChange() {
    //state should go 0 to 5 and reset after clicking on 5
    currState += 1;
    if (currState === 6) {
        currState = 0;
    }
    
    // console.log(currState);
    //switch case updates page based on current state. this updates using on click in html
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
            // if (document.getElementById("mainBtn").onclick) console.log('it worked') -- this didn't work as expected -- tried to use this and below one to reset function but it listened for all clicks?
            break;
        case 2:
            //add numbers together
            document.getElementById("bigText").innerHTML = "Add both digits together to get a new number";
            document.getElementById("subTxt").innerHTML = "Ex: 14 is 1 + 4 = 5";
            // if (document.getElementById("botRightBtn").onclick) console.log('it worked') -- this didn't work as expected
            break;
        case 3:
            //subtract new number from original
            document.getElementById("bigText").innerHTML = "Subtract your new number from the original number";
            document.getElementById("subTxt").innerHTML = "Ex: 14 - 5 = 9";
            break;
        case 4:
            //find new number
            numbers();
            document.getElementById("bigText").innerHTML = strFinal;
            document.getElementById("subTxt").innerHTML = "Find your new number. Take note of the associated symbol.";
            document.getElementById("mainBtn").innerHTML = "Reveal";
            break;
        case 5:
            //reveal answer
            document.getElementById("bigText").innerHTML = ninthVar;
            document.getElementById("mainBtn").style.display = "none";
            document.getElementById("subTxt").innerHTML = "Your symbol is " + ninthVar;
            break;
        default: numbers();
    
    
    }
}