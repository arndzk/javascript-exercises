const getTheTitles = function(books) {
    arrayOfTitles = books.map(book => book.title);
    
    console.log(arrayOfTitles);

    return arrayOfTitles;
}

module.exports = getTheTitles;
