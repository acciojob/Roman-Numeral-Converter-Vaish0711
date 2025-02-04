function intToRoman(num) {
    const val = [
        100000, 90000, 50000, 40000, 10000, 9000, 5000, 4000,
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    const syb = [
        "C", "XC", "L", "XL", "X", "IX", "V", "IV", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    let romanNum = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            romanNum += syb[i];
            num -= val[i];
        }
    }
    return romanNum;
}

// Test cases
console.log(intToRoman(14));  // Output: XIV
console.log(intToRoman(798)); // Output: DCCXCVIII

