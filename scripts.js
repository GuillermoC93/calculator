
let add = function(n1, n2) {
    return n1 + n2
}

let sub = function(n1, n2) {
    return n1 - n2
}

let multiply = function(n1, n2) {
    return n1 * n2
}

let divide = function(n1, n2) {
    return n1 / n2
}

let operate = function(op, n1, n2) {
    if (op === "+") {
        return add(n1, n2);
    } else if (op === "-") {
        return sub(n1, n2);
    } else if (op === "*") {
        return multiply(n1, n2);
    } else if (op === "/") {
        return divide(n1, n2);
    }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display-number");
let displayValue
let firstValue
let secondValue
let op

let populateDisplay = function() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.name) {
                displayValue = display.textContent += button.className;
            }
        })
    })
}

let getOperator = function() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.dataset.op) {
                firstValue = displayValue;
                displayValue = "";
                op = button.name;
                display.textContent = "";
            }
        })
    })
}

let clearCalc = function() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.name == "C") {
                firstValue = undefined;
                secondValue = undefined;
                op = undefined;
                display.textContent = "";
            }
        })
    })
}

let runCalcs = function() {
    populateDisplay();
    getOperator();
    clearCalc();
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.name == "=") {
                if (firstValue) {
                    secondValue = displayValue;
                }

                displayValue = display.textContent = (operate(op, Number(firstValue), Number(secondValue)));
            }
        })
    })
}

runCalcs();