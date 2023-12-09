function calculateProbability() {
    var numberOfDice = parseInt(prompt("Enter the number of dice:"));
    var targetSum = parseInt(prompt("Enter the sum of the eyes:"));
    var simulations = 10000;
    var successfulRolls = 0;

    for (var i = 0; i < simulations; i++) {
        var sum = 0;
        for (var j = 0; j < numberOfDice; j++) {
            sum += Math.floor(Math.random() * 6) + 1; // Random roll of a die (1-6)
        }
        if (sum === targetSum) {
            successfulRolls++;
        }
    }

    var probability = (successfulRolls / simulations) * 100;
    document.getElementById("result").innerHTML = 
        "Probability to get sum " + targetSum + " with " + numberOfDice + 
        " dice is " + probability.toFixed(2) + "%";
}

window.onload = calculateProbability;
