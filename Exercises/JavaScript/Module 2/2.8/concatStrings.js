function concat(arrayOfStrings) {
    var result = '';
    for (var i = 0; i < arrayOfStrings.length; i++) {
        result += arrayOfStrings[i];
    }
    return result;
}

function displayConcatenatedString() {
    var names = ["Johnny", "DeeDee", "Joey", "Marky"];
    var concatenatedString = concat(names);
    document.getElementById("concatResult").innerHTML = concatenatedString;
}

window.onload = displayConcatenatedString;
