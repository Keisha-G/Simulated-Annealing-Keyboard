var App = (function () {
    var intervalId     = 0,
        alreadyRunning = false;

    function GetOptions () {
        return {
            initialStabilizer:   35.0,
            coolingFactor:       0.05,
            stabilizingFactor:   1.005,
        };
    }

    return {
        Start: function() {
            if (alreadyRunning) {
                clearInterval(intervalId);
            }
            
            // user inputted data
            var options = GetOptions();
            
            // getting states
            options.generateNewSolution = keyboards.GenerateRandomPositions; // number of attacks - int variable
            options.generateNeighbor    = keyboards.GenerateNeighbor; // change one queen from current and return number of attacks on neighbour - int variable
            options.acceptNeighbor      = keyboards.AcceptNeighbor; // fucntion to set current to new neighbour

            // sets DOMQueens in the Draw object as an array of all the sqaures on the chess board - 'td'
            // assigns the DOMConsole attribute in the Console object to the 'console' div
            // passing options to simulated_annealing.js and calculating current 'temperature' (cost not actually temp)
            // places queens on board acccording to state
            // prints current cost to console
            // draws point on graph

            // does a simulated annealing algorithm 'step' every 0.05 seconds
                // places queens on board acccording to state
        }
    };
})();
