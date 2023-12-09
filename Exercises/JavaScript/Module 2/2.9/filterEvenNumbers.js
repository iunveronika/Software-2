function even(numbersArray) {
    var evenNumbers = [];
    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenNumbers.push(numbersArray[i]);
        }
    }
    return evenNumbers;
}

function displayResults() {
    var originalArray = [2, 7, 4];
    var filteredArray = even(originalArray);

    console.log("Original Array:", originalArray);
    console.log("Even Numbers Array:", filteredArray);
}

window.onload = displayResults;
