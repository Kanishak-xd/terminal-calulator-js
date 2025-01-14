// Division logic
function div(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }
    return a / b;
}

module.exports = div;
