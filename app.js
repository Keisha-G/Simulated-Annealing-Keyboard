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
            options.generateNewSolution = Keyboards.GenerateRandomPositions(); // number of attacks - int variable
            options.generateNeighbor    = Keyboards.GenerateNeighbor(); // change one queen from current and return number of attacks on neighbour - int variable
            options.acceptNeighbor      = Keyboards.AcceptNeighbor(); // fucntion to set current to new neighbour
            options.newSolution         = Keyboards.GetCurrentPositions();
            console.log(options.newSolution);

            Draw.Initialize(Keyboards.GetCurrentPositions()); // sets DOMQueens in the Draw object as an array of all the sqaures on the chess board - 'td'
            Graph.Initialize((35) / options.coolingFactor, Keyboards.QWERTYCost); // placeholder number for init-temp (35)
            Console.Initialize(); // assigns the DOMConsole attribute in the Console object to the 'console' div
            SimulatedAnnealing.Initialize(options); // passing options to simulated_annealing.js and calculating current 'temperature' (cost not actually temp)
            Console.Print('System energy: ', SimulatedAnnealing.GetCurrentEnergy()); // prints current cost to console
            Graph.Point(SimulatedAnnealing.GetCurrentEnergy()); // draws point on graph
            /*
            intervalId = setInterval(function () { // does a simulated annealing algorithm 'step' every 0.05 seconds
                var done = SimulatedAnnealing.Step();
                Draw.DrawBoard(Queens.GetCurrentPositions()); // places queens on board acccording to state
                Console.Print('System energy: ', SimulatedAnnealing.GetCurrentEnergy(),
                              '&nbsp;&nbsp;&nbsp;',
                              'System temperature:', SimulatedAnnealing.GetCurrentTemperature());
                Graph.Point(SimulatedAnnealing.GetCurrentEnergy());

                if (done === true) {
                    clearInterval(intervalId);
                    alreadyRunning = false;
                }

            }, 50);
            */

            alreadyRunning = true;
        }
    };
})();
