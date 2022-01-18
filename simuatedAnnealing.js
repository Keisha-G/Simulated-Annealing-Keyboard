var SimulatedAnnealing = (function () {
    var coolingFactor            = 0.0,
        stabilizingFactor        = 0.0,
        freezingTemperature      = 0.0,
        currentSystemEnergy      = 0.0,
        currentSystemTemperature = 0.0,
        currentStabilizer        = 0.0,

        generateNewSolution      = null,
        generateNeighbor         = null,
        acceptNeighbor           = null,
        newSolution              = null;

    function _init (options) {
        coolingFactor            = options.coolingFactor;
        stabilizingFactor        = options.stabilizingFactor;
        generateNewSolution      = options.generateNewSolution;
        generateNeighbor         = options.generateNeighbor;
        acceptNeighbor           = options.acceptNeighbor;
        newSolution              = options.newSolution;

        currentSystemEnergy      = Keyboards.CalcCost(newSolution); // ? possibly int value of number of attacks (cost) - NOT temperature
        currentSystemTemperature = 35;
        currentStabilizer        = options.initialStabilizer;
    }

    function _probabilityFunction (temperature, delta) {
        if (delta < 0) {
            return true;
        }

        var C = Math.exp(-delta / temperature);
        var R = Math.random();

        if (R < C) {
            return true;
        }

        return false;
    }

    function _doSimulationStep () {
        return null;
    }

    return {
        Initialize: function (options) {
            _init(options);
        },

        Step: function () {
            return _doSimulationStep();
        },

        GetCurrentEnergy: function () {
            return currentSystemEnergy;
        },

        GetCurrentTemperature: function () {
            return currentSystemTemperature;
        }
    };
})();
