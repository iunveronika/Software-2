function sortNumbers() {
    var numbers = [];
    var number;

    do {
        number = parseInt(prompt("Enter a number (enter 0 to finish):"));
        if (number !== 0) {
            numbers.push(number);
        }
    } while (number !== 0);

    numbers.sort(function(a, b) { return b - a; });

    console.log("Numbers from largest to smallest:");
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

window.onload = sortNumbers;
