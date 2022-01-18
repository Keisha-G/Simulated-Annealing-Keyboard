var Keyboards = (function () {
    var standardLetters = {'Q':[1, 3], 'W':[2, 3], 'E':[3, 3],
    'R':[4, 3], 'T':[5, 3], 'Y':[6, 3],
    'U':[7, 3], 'I':[8, 3], 'O':[9, 3],
    'P':[10, 3], 'A':[1.5, 2], 'S':[2.5, 2],
    'D':[3.5, 2], 'F':[4.5, 2], 'G':[5.5, 2],
    'H':[6.5, 2], 'J':[7.5, 2], 'K':[8.5, 2],
    'L':[9.5, 2], 'Z':[2, 1], 'X':[3, 1],
    'C':[4, 1], 'V':[5, 1], 'B':[6, 1],
    'N':[7, 1], 'M':[8, 1], ' ':[6,0]};
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
    var QWERTYCost = _calculateCost(standardLetters);
    /* 

    let fr = new FileReader();
    fileData = fr.readAsText('Frankenstein.txt');
    
    for (let i of keys) {
        for (let j of keys) {
            frequency[i + j] = 0;
        }
    }

    */

    var frequency = {'AA': 1, 'AB': 655, 'AC': 769, 'AD': 1261, 'AE': 3, 'AF': 252, 'AG': 644, 'AH': 7, 'AI': 964, 'AJ': 8, 'AK': 274, 'AL': 1709, 'AM': 694, 'AN': 5687, 'AO': 2, 'AP': 585, 'AQ': 1, 'AR': 2511, 'AS': 2582, 'AT': 3741, 'AU': 281, 'AV': 764, 'AW': 236, 'AX': 4, 'AY': 497, 'AZ': 23, 'A ': 1353, 'BA': 141, 'BB': 11, 'BC': 0, 'BD': 6, 'BE': 1698, 'BF': 0, 'BG': 0, 'BH': 24, 'BI': 186, 'BJ': 57, 'BK': 0, 'BL': 661, 'BM': 2, 'BN': 1, 'BO': 328, 'BP': 0, 'BQ': 0, 'BR': 223, 'BS': 96, 'BT': 45, 'BU': 779, 'BV': 2, 'BW': 0, 'BX': 0, 'BY': 463, 'BZ': 0, 'B ': 18, 'CA': 768, 'CB': 0, 'CC': 243, 'CD': 0, 'CE': 1803, 'CF': 0, 'CG': 0, 'CH': 1412, 'CI': 385, 'CJ': 0, 'CK': 233, 'CL': 317, 'CM': 1, 'CN': 0, 'CO': 1836, 'CP': 0, 'CQ': 40, 'CR': 379, 'CS': 17, 'CT': 750, 'CU': 328, 'CV': 0, 'CW': 0, 'CX': 0, 'CY': 41, 'CZ': 0, 'C ': 56, 'DA': 372, 'DB': 0, 'DC': 0, 'DD': 100, 'DE': 2361, 'DF': 16, 'DG': 80, 'DH': 5, 'DI': 929, 'DJ': 2, 'DK': 1, 'DL': 102, 'DM': 39, 'DN': 87, 'DO': 379, 'DP': 0, 'DQ': 0, 'DR': 223, 'DS': 434, 'DT': 19, 'DU': 270, 'DV': 43, 'DW': 20, 'DX': 0, 'DY': 111, 'DZ': 0, 'D ': 8798, 'EA': 2492, 'EB': 22, 'EC': 982, 'ED': 4828, 'EE': 1110, 'EF': 486, 'EG': 187, 'EH': 82, 'EI': 542, 'EJ': 18, 'EK': 64, 'EL': 1694, 'EM': 849, 'EN': 4124, 'EO': 49, 'EP': 439, 'EQ': 62, 'ER': 5263, 'ES': 3156, 'ET': 1080, 'EU': 13, 'EV': 871, 'EW': 263, 'EX': 511, 'EY': 451, 'EZ': 14, 'E ': 11475, 'FA': 528, 'FB': 0, 'FC': 0, 'FD': 0, 'FE': 955, 'FF': 301, 'FG': 0, 'FH': 0, 'FI': 653, 'FJ': 0, 'FK': 0, 'FL': 190, 'FM': 0, 'FN': 0, 'FO': 1266, 'FP': 0, 'FQ': 0, 'FR': 684, 'FS': 5, 'FT': 233, 'FU': 322, 'FV': 0, 'FW': 1, 'FX': 0, 'FY': 14, 'FZ': 0, 'F ': 2834, 'GA': 362, 'GB': 0, 'GC': 0, 'GD': 1, 'GE': 983, 'GF': 1, 'GG': 33, 'GH': 885, 'GI': 252, 'GJ': 0, 'GK': 0, 'GL': 194, 'GM': 15, 'GN': 112, 'GO': 198, 'GP': 0, 'GQ': 0, 'GR': 411, 'GS': 175, 'GT': 43, 'GU': 253, 'GV': 0, 'GW': 0, 'GX': 0, 'GY': 6, 'GZ': 0, 'G ': 1336, 'HA': 3302, 'HB': 12, 'HC': 0, 'HD': 3, 'HE': 8210, 'HF': 9, 'HG': 0, 'HH': 1, 'HI': 2482, 'HJ': 0, 'HK': 0, 'HL': 19, 'HM': 23, 'HN': 5, 'HO': 1524, 'HP': 0, 'HQ': 2, 'HR': 139, 'HS': 65, 'HT': 684, 'HU': 254, 'HV': 0, 'HW': 9, 'HX': 0, 'HY': 117, 'HZ': 0, 'H ': 1858, 'IA': 264, 'IB': 175, 'IC': 1235, 'ID': 664, 'IE': 999, 'IF': 502, 'IG': 687, 'IH': 3, 'II': 0, 'IJ': 0, 'IK': 81, 'IL': 1195, 'IM': 871, 'IN': 5463, 'IO': 1343, 'IP': 120, 'IQ': 2, 'IR': 990, 'IS': 2618, 'IT': 2603, 'IU': 33, 'IV': 548, 'IW': 0, 'IX': 99, 'IY': 0, 'IZ': 131, 'I ': 2575, 'JA': 3, 'JB': 0, 'JC': 0, 'JD': 0, 'JE': 91, 'JF': 0, 'JG': 0, 'JH': 0, 'JI': 0, 'JJ': 0, 'JK': 0, 'JL': 0, 'JM': 0, 'JN': 0, 'JO': 157, 'JP': 0, 'JQ': 0, 'JR': 0, 'JS': 0, 'JT': 0, 'JU': 161, 'JV': 0, 'JW': 0, 'JX': 0, 'JY': 0, 'JZ': 0, 'J ': 0, 'KA': 9, 'KB': 3, 'KC': 0, 'KD': 0, 'KE': 541, 'KF': 6, 'KG': 0, 'KH': 0, 'KI': 204, 'KJ': 0, 'KK': 0, 'KL': 40, 'KM': 1, 'KN': 188, 'KO': 0, 'KP': 0, 'KQ': 0, 'KR': 10, 'KS': 90, 'KT': 0, 'KU': 0, 'KV': 0, 'KW': 0, 'KX': 0, 'KY': 17, 'KZ': 0, 'K ': 374, 'LA': 1041, 'LB': 7, 'LC': 20, 'LD': 920, 'LE': 2172, 'LF': 309, 'LG': 16, 'LH': 0, 'LI': 1490, 'LJ': 0, 'LK': 52, 'LL': 1421, 'LM': 89, 'LN': 26, 'LO': 984, 'LP': 25, 'LQ': 0, 'LR': 39, 'LS': 218, 'LT': 315, 'LU': 173, 'LV': 68, 'LW': 28, 'LX': 0, 'LY': 1120, 'LZ': 0, 'L ': 1314, 'MA': 1112, 'MB': 179, 'MC': 0, 'MD': 0, 'ME': 2630, 'MF': 10, 'MG': 0, 'MH': 1, 'MI': 926, 'MJ': 0, 'MK': 0, 'ML': 11, 'MM': 165, 'MN': 49, 'MO': 961, 'MP': 459, 'MQ': 0, 'MR': 19, 'MS': 149, 'MT': 12, 'MU': 285, 'MV': 0, 'MW': 0, 'MX': 0, 'MY': 1962, 'MZ': 0, 'M ': 948, 'NA': 516, 'NB': 11, 'NC': 1057, 'ND': 4746, 'NE': 2098, 'NF': 186, 'NG': 2423, 'NH': 64, 'NI': 648, 'NJ': 78, 'NK': 184, 'NL': 208, 'NM': 17, 'NN': 198, 'NO': 1376, 'NP': 16, 'NQ': 54, 'NR': 41, 'NS': 1019, 'NT': 2262, 'NU': 138, 'NV': 105, 'NW': 17, 'NX': 15, 'NY': 238, 'NZ': 9, 'N ': 4333, 'OA': 154, 'OB': 171, 'OC': 277, 'OD': 337, 'OE': 44, 'OF': 2786, 'OG': 60, 'OH': 31, 'OI': 186, 'OJ': 4, 'OK': 201, 'OL': 621, 'OM': 1419, 'ON': 3666, 'OO': 649, 'OP': 283, 'OQ': 6, 'OR': 2659, 'OS': 723, 'OT': 1132, 'OU': 3476, 'OV': 544, 'OW': 1146, 'OX': 11, 'OY': 199, 'OZ': 7, 'O ': 2788, 'PA': 862, 'PB': 0, 'PC': 0, 'PD': 1, 'PE': 1060, 'PF': 0, 'PG': 0, 'PH': 94, 'PI': 346, 'PJ': 0, 'PK': 0, 'PL': 538, 'PM': 1, 'PN': 0, 'PO': 676, 'PP': 501, 'PQ': 0, 'PR': 866, 'PS': 102, 'PT': 192, 'PU': 161, 'PV': 0, 'PW': 0, 'PX': 0, 'PY': 70, 'PZ': 0, 'P ': 137, 'QA': 0, 'QB': 0, 'QC': 0, 'QD': 0, 'QE': 0, 'QF': 0, 'QG': 0, 'QH': 0, 'QI': 0, 'QJ': 0, 'QK': 0, 'QL': 0, 'QM': 0, 'QN': 0, 'QO': 0, 'QP': 0, 'QQ': 0, 'QR': 0, 'QS': 0, 'QT': 0, 'QU': 312, 'QV': 0, 'QW': 0, 'QX': 0, 'QY': 0, 'QZ': 0, 'Q ': 0, 'RA': 1264, 'RB': 53, 'RC': 225, 'RD': 607, 'RE': 5406, 'RF': 100, 'RG': 104, 'RH': 43, 'RI': 1431, 'RJ': 2, 'RK': 167, 'RL': 234, 'RM': 347, 'RN': 488, 'RO': 1536, 'RP': 101, 'RQ': 0, 'RR': 423, 'RS': 1030, 'RT': 812, 'RU': 252, 'RV': 187, 'RW': 66, 'RX': 0, 'RY': 609, 'RZ': 0, 'R ': 3130, 'SA': 723, 'SB': 10, 'SC': 400, 'SD': 9, 'SE': 2665, 'SF': 61, 'SG': 10, 'SH': 1104, 'SI': 1021, 'SJ': 0, 'SK': 79, 'SL': 134, 'SM': 86, 'SN': 46, 'SO': 1156, 'SP': 516, 'SQ': 14, 'SR': 1, 'SS': 1228, 'ST': 2476, 'SU': 819, 'SV': 2, 'SW': 109, 'SX': 0, 'SY': 67, 'SZ': 0, 'S ': 5756, 'TA': 936, 'TB': 0, 'TC': 120, 'TD': 0, 'TE': 2816, 'TF': 26, 'TG': 0, 'TH': 9291, 'TI': 2148, 'TJ': 0, 'TK': 0, 'TL': 311, 'TM': 43, 'TN': 40, 'TO': 2914, 'TP': 3, 'TQ': 0, 'TR': 874, 'TS': 565, 'TT': 542, 'TU': 759, 'TV': 0, 'TW': 77, 'TX': 0, 'TY': 411, 'TZ': 17, 'T ': 5743, 'UA': 223, 'UB': 102, 'UC': 314, 'UD': 262, 'UE': 277, 'UF': 92, 'UG': 399, 'UH': 2, 'UI': 356, 'UJ': 0, 'UK': 1, 'UL': 1027, 'UM': 261, 'UN': 1287, 'UO': 14, 'UP': 349, 'UQ': 0, 'UR': 2076, 'US': 1033, 'UT': 1216, 'UU': 0, 'UV': 1, 'UW': 0, 'UX': 9, 'UY': 1, 'UZ': 1, 'U ': 456, 'VA': 323, 'VB': 0, 'VC': 0, 'VD': 0, 'VE': 2595, 'VF': 0, 'VG': 0, 'VH': 0, 'VI': 511, 'VJ': 0, 'VK': 0, 'VL': 0, 'VM': 0, 'VN': 0, 'VO': 272, 'VP': 0, 'VQ': 0, 'VR': 1, 'VS': 0, 'VT': 0, 'VU': 8, 'VV': 0, 'VW': 0, 'VX': 0, 'VY': 7, 'VZ': 0, 'V ': 0, 'WA': 1539, 'WB': 0, 'WC': 0, 'WD': 8, 'WE': 1050, 'WF': 11, 'WG': 1, 'WH': 1633, 'WI': 1265, 'WJ': 0, 'WK': 0, 'WL': 43, 'WM': 1, 'WN': 232, 'WO': 589, 'WP': 0, 'WQ': 0, 'WR': 122, 'WS': 57, 'WT': 3, 'WU': 0, 'WV': 0, 'WW': 0, 'WX': 0, 'WY': 9, 'WZ': 0, 'W ': 635, 'XA': 26, 'XB': 0, 'XC': 104, 'XD': 0, 'XE': 79, 'XF': 5, 'XG': 0, 'XH': 25, 'XI': 73, 'XJ': 0, 'XK': 0, 'XL': 0, 'XM': 0, 'XN': 0, 'XO': 5, 'XP': 160, 'XQ': 6, 'XR': 0, 'XS': 0, 'XT': 83, 'XU': 14, 'XV': 0, 'XW': 0, 'XX': 0, 'XY': 2, 'XZ': 0, 'X ': 47, 'YA': 24, 'YB': 5, 'YC': 1, 'YD': 3, 'YE': 441, 'YF': 5, 'YG': 0, 'YH': 2, 'YI': 51, 'YJ': 0, 'YK': 0, 'YL': 6, 'YM': 61, 'YN': 2, 'YO': 943, 'YP': 4, 'YQ': 0, 'YR': 9, 'YS': 260, 'YT': 14, 'YU': 0, 'YV': 0, 'YW': 2, 'YX': 0, 'YY': 0, 'YZ': 0, 'Y ': 4575, 'ZA': 99, 'ZB': 0, 'ZC': 0, 'ZD': 0, 'ZE': 73, 'ZF': 0, 'ZG': 0, 'ZH': 0, 'ZI': 9, 'ZJ': 0, 'ZK': 0, 'ZL': 3, 'ZM': 0, 'ZN': 0, 'ZO': 6, 'ZP': 0, 'ZQ': 0, 'ZR': 0, 'ZS': 0, 'ZT': 0, 'ZU': 1, 'ZV': 1, 'ZW': 0, 'ZX': 0, 'ZY': 5, 'ZZ': 5, 'Z ': 1, ' A': 7923, ' B': 3032, ' C': 2518, ' D': 2264, ' E': 1791, ' F': 2862, ' G': 821, ' H': 4104, ' I': 5874, ' J': 205, ' K': 243, ' L': 1397, ' M': 4825, ' N': 1463, ' O': 4401, ' P': 1851, ' Q': 115, ' R': 1480, ' S': 4231, ' T': 9751, ' U': 712, ' V': 523, ' W': 4918, ' X': 0, ' Y': 1035, ' Z': 3, '  ': 53}

    function _init () { // jumble the letters up
        for (var i = 0; i < 27; i++) {
            currentLetters = _generateNeighborTwo();
        }
        newLetters = currentLetters;
        return _calculateCost(_getCurrentPositions());
    }

    function distance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

      function _calculateCost (board) { // cost fun
        cost = 0;
        for (let key in frequency) {
            var keyOne = key.charAt(0);
            var keyTwo = key.charAt(1);
            var x1 = board[keyOne][0];
            var x2 = board[keyTwo][0];
            var y1 = board[keyOne][1];
            var y2 = board[keyTwo][1];
            cost += distance(x1, y1, x2, y2);
        }
        return cost;
    }

    function pickRandomProperty(obj) {
        var result;
        var count = 0;
        for (var prop in obj)
            if (Math.random() < 1/++count)
                result = prop;
        return result;
    }

    function _generateNeighborTwo () { // want to return objectinstead of cost
        var keyOne = pickRandomProperty(newLetters);
        var keyTwo = pickRandomProperty(newLetters);
    
        while (keyOne===keyTwo || keyOne==' ' || keyTwo==' ') {
            var keyOne = pickRandomProperty(newLetters);
            var keyTwo = pickRandomProperty(newLetters);
        }
        var keyOneCoord = newLetters[keyOne];
        var keyTwoCoord = newLetters[keyTwo];
    
        newLetters[keyOne] = keyTwoCoord;
        newLetters[keyTwo] = keyOneCoord;
    
        return newLetters;
    }

    function _generateNeighbor () { // swap one key
        var keyOne = pickRandomProperty(newLetters);
        var keyTwo = pickRandomProperty(newLetters);
    
        while (keyOne===keyTwo && keyOne!==' ' && keyTwo!==' ') {
            var keyOne = pickRandomProperty(newLetters);
            var keyTwo = pickRandomProperty(newLetters);
        }
        var keyOneCoord = newLetters[keyOne];
        var keyTwoCoord = newLetters[keyTwo];
    
        newLetters[keyOne] = keyTwoCoord;
        newLetters[keyTwo] = keyOneCoord;
    
        return _calculateCost(newLetters);
    }

    function _acceptNeighbor () {
        for (let key in newLetters) {
            currentLetters[key] = newLetters[key];
        }
    }

    function _getCurrentPositions () {
        return currentLetters;
    }

    return {
        GenerateRandomPositions: function () {
            return _init();
        },

        GetCurrentPositions: function () {
            return _getCurrentPositions();
        },

        GenerateNeighbor: function () {
            return _generateNeighbor();
        },

        AcceptNeighbor: function () {
            _acceptNeighbor();
        },
        CalcCost: function (board) {
            return _calculateCost(board);
        }
    };
})();
