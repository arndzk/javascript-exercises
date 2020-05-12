const removeFromArray = function(array, ...args) {
    
    for(let j = 0; j <= args.length - 1; j++)
        for (let i = 0; i <= array.length - 1; i++) {
            if(array[i] === args[j]) {
                array.splice(i, 1);
                i--;
            }
        }

    return array;
}

module.exports = removeFromArray
