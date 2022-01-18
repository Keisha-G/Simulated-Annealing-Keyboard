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
        //DOMKeys = document.getElementsByTagName('key--letter');
        //_swapKeyTest('A', 'B');
        /*
        do {
            var swaps = 0;
            for (var key in standardLetters) {
                for (var i in board) {
                    if (board[i].toString()===standardLetters[key].toString() && key!==i) {
                        _swapKeyText(key, i);
                        console.log('swapping' + key + ' and ' + i);
                        swaps++;
                    }
                }
            }
        } while (swaps > 0);
        */
       var counts = 0;
       while (counts<13) {
           delete standardLetters[_drawBoard(standardLetters, board)];
           counts++;
       }
    }
    

    function _drawBoard (oldboard, newboard) { // swap the one different key 
        for (var key in oldboard) {
            for (var i in newboard) {
                if (!(oldboard[key].toString()===newboard[i].toString()) && key===i) {
                    _swapKeyText(key, _getAttribute(newboard[i].toString(), key));
                    console.log('swapping ' + key + ' and ' + i);
                    return key;
                }
            }
        }
        return null;
    }

    function _getAttribute(coord, orginalKey) {
        for (var key in standardLetters) {
            if (standardLetters[key].toString()===coord) {
                return key;
            }
        }
        return orginalKey;
    }

    function _swapKeyText(charOne, charTwo) {
        var keyOne = document.querySelector('[data-char*="' + charOne + '"]');
        var keyTwo = document.querySelector('[data-char*="' + charTwo + '"]');
        console.log('charOne: ' + charOne + ' charTwo: ' + charTwo + ' keyOne: ' + keyOne + ' keyTwo: ' + keyTwo);
    
        keyOne.textContent = charTwo;
        keyTwo.textContent = charOne;
    }

    function _swapKeyTest(charOne, charTwo) {
        var keyOne = document.querySelector('[data-char*="' + charOne + '"]');
        var keyTwo = document.querySelector('[data-char*="' + charTwo + '"]');
    
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