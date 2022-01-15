var Keyboards = (function () {
    var currentLetters = {'Q':[1, 3], 'W':[2, 3], 'E':[3, 3],
    'R':[4, 3], 'T':[5, 3], 'Y':[6, 3],
    'U':[7, 3], 'I':[8, 3], 'O':[9, 3],
    'P':[10, 3], 'A':[1.5, 2], 'S':[2.5, 2],
    'D':[3.5, 2], 'F':[4.5, 2], 'G':[5.5, 2],
    'H':[6.5, 2], 'J':[7.5, 2], 'K':[8.5, 2],
    'L':[9.5, 2], 'Z':[2, 1], 'X':[3, 1],
    'C':[4, 1], 'V':[5, 1], 'B':[6, 1],
    'N':[7, 1], 'M':[8, 1], ' ':[6,0]};
    var newLetters = {'Q':[1, 3], 'W':[2, 3], 'E':[3, 3],
    'R':[4, 3], 'T':[5, 3], 'Y':[6, 3],
    'U':[7, 3], 'I':[8, 3], 'O':[9, 3],
    'P':[10, 3], 'A':[1.5, 2], 'S':[2.5, 2],
    'D':[3.5, 2], 'F':[4.5, 2], 'G':[5.5, 2],
    'H':[6.5, 2], 'J':[7.5, 2], 'K':[8.5, 2],
    'L':[9.5, 2], 'Z':[2, 1], 'X':[3, 1],
    'C':[4, 1], 'V':[5, 1], 'B':[6, 1],
    'N':[7, 1], 'M':[8, 1], ' ':[6,0]};
    lettersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];

    let fr = new FileReader();
    fileData = fr.readAsText('Frankenstein.txt');

    frequency = {};

    for (let i of keys) {
        for (let j of keys) {
            frequency[i + j] = 0;
        }
    }

    //

    function _generateRandomPositions () {
        for (var i = 0; i < 27; i++) {
            _generateNeighbor();
        }
        return _calculateCost(_getCurrentPositions());
    }

    function _calculateCost (board) { // cost fun
        var cost = 0;

        for (var iQueen = 0; iQueen < NUM_QUEENS - 1; iQueen++) {
            for (var iAttackingQueen = iQueen + 1; iAttackingQueen < NUM_QUEENS; iAttackingQueen++) {
                if (board[iQueen].x == board[iAttackingQueen].x) {
                    cost++;
                }
                else if (board[iQueen].y == board[iAttackingQueen].y) {
                    cost++;
                }
                else if (board[iQueen].x + board[iQueen].y ==
                         board[iAttackingQueen].x + board[iAttackingQueen].y) {
                    cost++;
                }
                else if (board[iQueen].y - board[iQueen].x ==
                         board[iAttackingQueen].y - board[iAttackingQueen].x) {
                    cost++;
                }
            }
        }

        return cost;
    }

    function _generateNeighbor () { // swap one key
        //
    }

    function _acceptNeighbor () {
        for (var iQueen = 0; iQueen < NUM_QUEENS; iQueen++) {
            currentQueensPositions[iQueen] = { x: newQueensPositions[iQueen].x, y: newQueensPositions[iQueen].y } ;
        }
    }

    function _getCurrentPositions () {
        var positions = [];

        for (var iQueen = 0; iQueen < NUM_QUEENS; iQueen++) {
            positions[iQueen] = currentQueensPositions[iQueen].x + (currentQueensPositions[iQueen].y * 8);
        }

        return positions;
    }

    return {
        GenerateRandomPositions: function () {
            return _generateRandomPositions();
        },

        GetCurrentPositions: function () {
            return _getCurrentPositions();
        },

        GenerateNeighbor: function () {
            return _generateNeighbor();
        },

        AcceptNeighbor: function () {
            _acceptNeighbor();
        }
    };
})();
