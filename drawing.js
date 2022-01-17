var Draw = (function () {
    var LAST_KEY        = 25,
        FIRST_KEY       = 0,
        DOMKeys          = null;

    function _init () {
        DOMKeys = document.getElementsByTagName('key--letter');
    }

    function _drawBoard (board) {
        //
    }

    return {
        Initialize: function () {
            _init();
        },

        DrawBoard: function (board) {
            _drawBoard(board);
        }
    };
})();