# Unit 3 Problem Set 1 - Problem Solving

- [Unit 3 Problem Set 1 - Problem Solving](#unit-3-problem-set-1---problem-solving)
- [Question 1: isUpperCase](#question-1-isuppercase)
- [Question 2: removeVowels](#question-2-removevowels)
- [Question 3: wordCap](#question-3-wordcap)
- [Question 4: swapCase](#question-4-swapcase)
- [Question 5: staggeredCase](#question-5-staggeredcase)
- [Question 6: wordLengths](#question-6-wordlengths)
- [Question 7: searchWord](#question-7-searchword)
- [Question 8: processReleaseData](#question-8-processreleasedata)

# Question 1: isUpperCase
Write a function that takes a string argument, and returns `true` if all of the alphabetic characters inside the string are uppercase; `false` otherwise. Ignore characters that are not alphabetic.

```javascript
isUpperCase('t');               // false
isUpperCase('T');               // true
isUpperCase('Four Score');      // false
isUpperCase('FOUR SCORE');      // true
isUpperCase('4SCORE!');         // true
isUpperCase('');                // true
```

# Question 2: removeVowels
Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

```javascript
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
```

# Question 3: wordCap
Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase. You may assume that a word is any sequence of non-whitespace characters.

```javascript
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
```

# Question 4: swapCase
Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

```javascript
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
```

# Question 5: staggeredCase
Write a function that takes a string argument and returns that string with alternating cases for letter characters. The first letter character should be capitalized and subsequent letter characters will be alternating between lower and upper case. **Non-alphabetic characters should not be counted toward the alternation pattern.**

```javascript
staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
```

# Question 6: wordLengths
Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array. You may assume that every pair of words in the string will be separated by a single space.

```javascript
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
```

# Question 7: searchWord
Write a function that takes a word and a string of text as arguments, and returns an integer representing the number of times the word appears in the text. This function should count word matches even if the case does not match. You may assume that the word and text inputs will always be provided. You may assume that a word is any collection of characters separated by whitespace, `,`, `.`, `!`, or `?`.

```javascript
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

searchWord('his', text);      // 4
searchWord('hip-hop', text);  // 1 (because "hip-hop's" !== "hip-hop")
searchWord('flow', text);           // 1
searchWord('is', text);           // 1
```

# Question 8: processReleaseData
Write a Function named `processReleaseData` that processes the following movie release data:

```javascript
const newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];
```
The function should return an Array of Objects that contain only the `id` and `title` key/value pairs. You may assume that `id`, when existing, is an integer greater than 0. Here are the rules:

- Keep only releases that have both `id` and `title` data present.
- Keep only the `id` and `title` data for each release.

```javascript
processReleaseData(newReleases); // [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
```
