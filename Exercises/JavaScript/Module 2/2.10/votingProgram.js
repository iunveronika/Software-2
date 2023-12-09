function createCandidates(numberOfCandidates) {
    var candidates = [];
    for (var i = 0; i < numberOfCandidates; i++) {
        var name = prompt("Name for candidate " + (i + 1) + ":");
        candidates.push({ name: name, votes: 0 });
    }
    return candidates;
}

function conductVoting(candidates, numberOfVoters) {
    for (var i = 0; i < numberOfVoters; i++) {
        var vote = prompt("Vote for (enter candidate name), voter " + (i + 1) + ":");
        var candidate = candidates.find(c => c.name === vote);
        if (candidate) {
            candidate.votes++;
        }
    }
}

function announceResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    var winner = candidates[0];
    console.log("The winner is " + winner.name + " with " + winner.votes + " votes.");
    console.log("Results:");
    candidates.forEach(c => {
        console.log(c.name + ": " + c.votes + " votes");
    });
}

function main() {
    var numberOfCandidates = parseInt(prompt("Enter the number of candidates:"));
    var candidates = createCandidates(numberOfCandidates);

    var numberOfVoters = parseInt(prompt("Enter the number of voters:"));
    conductVoting(candidates, numberOfVoters);

    announceResults(candidates);
}

window.onload = main;
