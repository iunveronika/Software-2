function collectUniqueNumbers() {
    var numbers = [];
    var number;
    var isDuplicate = false;

    while (!isDuplicate) {
        number = parseInt(prompt("Enter a number:"));
        if (numbers.includes(number)) {
            isDuplicate = true;
            console.log("The number " + number + " has already been given.");
        } else {
            numbers.push(number);
        }
    }

    numbers.sort(function(a, b) { return a - b; });
    console.log("All entered numbers in ascending order:");
    numbers.forEach(function(num) {
        console.log(num);
    });
}

window.onload = collectUniqueNumbers;
