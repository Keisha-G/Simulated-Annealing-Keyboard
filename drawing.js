var Draw = (function () {
    var LAST_KEY        = 25,
        FIRST_KEY       = 0,
        DOMKeys          = null;
    var standardLetters = {'Q':[1, 3], 'W':[2, 3], 'E':[3, 3],
        'R':[4, 3], 'T':[5, 3], 'Y':[6, 3],
        'U':[7, 3], 'I':[8, 3], 'O':[9, 3],
        'P':[10, 3], 'A':[1.5, 2], 'S':[2.5, 2],
        'D':[3.5, 2], 'F':[4.5, 2], 'G':[5.5, 2],
        'H':[6.5, 2], 'J':[7.5, 2], 'K':[8.5, 2],
        'L':[9.5, 2], 'Z':[2, 1], 'X':[3, 1],
        'C':[4, 1], 'V':[5, 1], 'B':[6, 1],
        'N':[7, 1], 'M':[8, 1], ' ':[6,0]};

    function _init (board) { // big sort
        _swapKeyTest();
    }
    

    function _drawBoard (oldboard, newboard) { // swap the one different key 
        //
    }

    function _swapKeyText(charOne, charTwo) {
        var keyOne = document.querySelector('[data-char*="' + charOne + '"]');
        var keyTwo = document.querySelector('[data-char*="' + charTwo + '"]');
    
        keyOne.textContent = charTwo;
        keyTwo.textContent = charOne;
    }

    function _swapKeyTest() {
        var keyOne = document.querySelector('[data-char*="' + 'K' + '"]');
        var keyTwo = document.querySelector('[data-char*="' + 'J' + '"]');
    
        keyOne.textContent = charTwo;
        keyTwo.textContent = charOne;
    }

    return {
        Initialize: function (board) {
            _init(board);
        },

        DrawBoard: function (oldboard, newboard) {
            _drawBoard(oldboard, newboard);
        }
    };
})();