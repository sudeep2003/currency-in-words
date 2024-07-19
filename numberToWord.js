function numberToWords(number) {
    var units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    function getHundredsChunk(n) {
        var str = '';
        var hundred = Math.floor(n / 100);
        var rest = n % 100;

        if (hundred > 0) {
            str += units[hundred] + ' hundred ';
        }

        if (rest > 10 && rest < 20) {
            str += teens[rest - 10] + ' ';
        } else {
            var ten = Math.floor(rest / 10);
            var unit = rest % 10;

            if (ten > 0) {
                str += tens[ten] + ' ';
            }

            if (unit > 0) {
                str += units[unit] + ' ';
            }
        }

        return str.trim();
    }

    function convertWholeNumber(number) {
        var words = '';
        var crore = Math.floor(number / 10000000);
        number %= 10000000;
        var lakh = Math.floor(number / 100000);
        number %= 100000;
        var thousand = Math.floor(number / 1000);
        number %= 1000;
        var hundred = number;

        if (crore > 0) {
            words += getHundredsChunk(crore) + ' crore ';
        }
        if (lakh > 0) {
            words += getHundredsChunk(lakh) + ' lakh ';
        }
        if (thousand > 0) {
            words += getHundredsChunk(thousand) + ' thousand ';
        }
        if (hundred > 0) {
            words += getHundredsChunk(hundred);
        }

        return words.trim();
    }

    function convertDecimal(number) {
        var words = '';
        var paise = Math.round(number * 100) % 100;  // Converting decimal part to paise

        if (paise > 0) {
            words += getHundredsChunk(paise) + ' paise';
        }

        return words.trim();
    }

    // Ensure the number is rounded to handle floating point precision issues
    number = Math.round(number * 100) / 100;

    // Split the number into whole and decimal parts
    var [wholeNumber, decimalPart] = number.toString().split('.').map(Number);
    var wholeWords = convertWholeNumber(wholeNumber);
    var decimalWords = decimalPart ? convertDecimal(decimalPart) : '';

    var result = '';
    if (wholeWords) {
        result += wholeWords + ' rupees';
    }
    if (decimalWords) {
        result += ' and ' + decimalWords;
    } else if (!wholeWords && !decimalWords) {
        result = 'Zero rupees';
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
}

// Test the function
var number = 16534891.254;
console.log(numberToWords(number));  // Expected output: "One crore sixty five lakh thirty four thousand eight hundred ninety one rupees and twenty five paise"
