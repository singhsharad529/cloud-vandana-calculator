var inputString = "";

function isAlreadyOp(tempInput) {
    let lastChar = inputString.charAt(inputString.length - 1);
    console.log(lastChar);

    if ((tempInput == "+" || tempInput == "-" || tempInput == "÷") && !NaN(parseInt(lastChar))) {
        console.log('true');
        return true;
    }

    return false;

}

function solveEqation() { //function to solve equation
    try {
        let equation = "";
        for (let i = 0; i < inputString.length; i++) {
            if (inputString[i] == "÷") {
                equation += '/';
            }
            else if (inputString[i] == "x")
                equation += "*";
            else
                equation += inputString[i];
        }

        return eval(equation);
    } catch (error) {
        return "Wrong Input";
    }
}

function inputButton(e) {// main function for inputs checking
    // if (isAlreadyOp(e.innerText)) {
    //     return;
    // }
    if (e.innerText == "=") {
        inputString = solveEqation();
    }
    else if (e.innerText === "AC") {
        inputString = ""
    }
    else
        inputString += e.innerText;

    document.getElementById("input-string").innerHTML = inputString;

}