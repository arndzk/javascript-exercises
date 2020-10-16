const caesar = function(string, shift) {
    let encodedString = "";
    let ascii = 0;
    let encodedLetter = "";

    for (let i = 0; i < string.length; i++) {
            if (shift > 26 || shift < -26) {
                shift = shift % 26;
            }
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                ascii = string.charCodeAt(i);
                if (ascii + shift > 90) {
                    ascii = (ascii + shift) - 26;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                } else if (ascii + shift < 65) {
                    ascii = (ascii + shift) + 26;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                } else {
                    ascii += shift;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                }
            }
            else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
                ascii = string.charCodeAt(i);
                if (ascii + shift > 122) {
                    ascii = (ascii + shift) - 26;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                } else if (ascii + shift < 97) {
                    ascii = (ascii + shift) + 26;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                } else {
                    ascii += shift;
                    encodedLetter = String.fromCharCode(ascii);
                    encodedString += encodedLetter;
                }
            } else {
                encodedString += string[i];
            }
    }
    return encodedString;
}

module.exports = caesar
