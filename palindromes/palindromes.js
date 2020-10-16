const palindromes = function(string) {
    string = string.toLowerCase();
    let stringLetters = "";
    let reversedStringLetters = "";
    for (let i = 0; i < string.length; i++) {
        if ((/[a-z]/).test(string[i])) {
            stringLetters += string[i];
        }
    }
    for (let j = stringLetters.length - 1; j >= 0; j--) {
        reversedStringLetters += stringLetters[j];
    }
    for (let k = 0; k < stringLetters.length; k++) {
        if (stringLetters[k] == reversedStringLetters[k]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = palindromes
