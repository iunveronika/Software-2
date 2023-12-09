function randomDiceRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDiceUntilMax() {
    var sides = parseInt(prompt("Enter the number of sides on the dice:"));
    var result;
    var listHtml = "<ul>";

    do {
        result = randomDiceRoll(sides);
        listHtml += "<li>" + result + "</li>";
    } while (result !== sides);

    listHtml += "</ul>";
    document.getElementById("diceRolls").innerHTML = listHtml;
}

window.onload = rollDiceUntilMax;
