function printNumbersInReverse() {
    var numbers = [];
    for (var i = 0; i < 5; i++) {
        var number = parseInt(prompt("Enter number " + (i + 1) + ":"));
        numbers.push(number);
    }

    console.log("Numbers in reverse order:");
    for (var j = numbers.length - 1; j >= 0; j--) {
        console.log(numbers[j]);
    }
}

window.onload = printNumbersInReverse;
