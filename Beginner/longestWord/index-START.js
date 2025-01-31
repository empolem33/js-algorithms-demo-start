/* CHALLENGE
Given a string of text, write an algorithm that return the longest word in the string. 

*/



function longestWord(text) {
    // Code goes here
    let wordArray = text.split(' ')
    let maxlength = 0 
    let result = ''

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > maxlength){
            maxlength= wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

function longestWord(text) {
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

module.exports = longestWord