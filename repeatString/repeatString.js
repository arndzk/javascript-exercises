const repeatString = function(string, numberOfRepeats) {
    
    if (numberOfRepeats == -1) {
        return "ERROR";
    }
    
    let stringToRepeat = "";

    for(let i = 0; i < numberOfRepeats; i++) {
        stringToRepeat = stringToRepeat + string;
    }

    return stringToRepeat;
}

module.exports = repeatString
