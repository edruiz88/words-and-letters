/*

Hello! Thanks for taking the time to complete this exercise.

To start, clone this project (you need to create an account),
and add your answer in your copy. If you don't feel comfortable
with NodeJS, feel free to create a project with the language
of your choice (please copy over these comments).

Once you finish, share the project to matias@kocomo.com

Go coding!!

-------------------------------------------------------

Hola! Gracias por tu tiempo para completar este ejercicio.

Para empezar, clona este proyecto (necesitas crear una cuenta),
y agrega tu respuesta en tu copia. Si no te sientes cómodo
con NodeJS, puedes crear un proyecto con el lenguage que
prefieras (por favor copia estos comentarios).

Cuando termines, comparte este proyecto con matias@kocomo.com

Go coding!!

=======================================================

Words and letters

Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.

Indicate time and space complexity.

e.g.
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------

Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------

Answer: 5

Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'

*/


// 'Bag' of words
const words = ['kellogg', 'go', 'hola', 'lego', 'hug', 'kocomo', 'hello'];
// 'Bag' of letters
const letters = ['a', 'h', 'l', 'e', 'l', 'o', 'g', 'k'];

// Function to find duplicated characters
const findDuplicates = (arr: Array<any>) => arr.filter((item, index) => arr.indexOf(item) != index)

// Function to find the words
function findWord(wrd: Array<any>, lttr: Array<any>) {
    // Variable where the valid words will be stored
    var long: string[] = [];

    // Function to analyze the words
    const analyzeWord = (word: string, letter: Array<any>) => {
        // Detect repeated characters in 'bags' of letters and words
        let duplicateInWords = findDuplicates(word.split(''))
        let duplicateInLetters = findDuplicates(letter)

        // Receive the words one by one to be analyzed
        for (var i = 0; i < word.length; i++) {
            // Discard word if it contains repeated characters AND these characters are not repeated in the 'bag' of letters
            if (/(.).*\1/.test(word) && duplicateInWords.some(item => !duplicateInLetters.includes(item)) 
            || duplicateInLetters.length < duplicateInWords.length) {
                return;
            }
            // Discard word if one of its characters is not in the 'bag' of letters
            if (letter.indexOf(word[i]) < 0) {
                return;
            }
            // Create an array with all valid words
            long.push(word)
        }
    }
    // Send the words one by one to be analyzed
    for (var i = 0; i < wrd.length; i++) {
        analyzeWord(wrd[i], lttr);
    }
    // Get the longest valid word
    let longestWord = long.reduce((a, b) => a.length <= b.length ? b : a)

    // Show the long answer to the exercise.
    console.log(`The longest valid word is: ${longestWord} and its length is: ${longestWord.length}`);
    // Show the short answer to the exercise.
    console.log(longestWord.length);
}

findWord(words, letters);
