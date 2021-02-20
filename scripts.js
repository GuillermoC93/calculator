
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