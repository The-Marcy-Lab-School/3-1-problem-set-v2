const path = require('path');
const ScoreCounter = require('score-tests');
const {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
  processReleaseData,
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  test('isUpperCase - returns true if there are no lowercase letter present', () => {
    expect(isUpperCase('t')).toBe(false);
    expect(isUpperCase('T')).toBe(true);
    expect(isUpperCase('Four Score')).toBe(false);
    expect(isUpperCase('ok neato 34')).toBe(false);
    expect(isUpperCase('189wow')).toBe(false);
    expect(isUpperCase('FOUR SCORE')).toBe(true);
    expect(isUpperCase('4SCORE!')).toBe(true);
    expect(isUpperCase('')).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removeVowels - removes all vowels from each string in the array', () => {
    expect(removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(['bcdfghjklmnpqrstvwxyz']);
    expect(removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(['grn', 'YLLW', 'blck', 'wht']);
    expect(removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(['BC', '', 'XYZ']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('wordCap - capitalizes the first character after the space if it is a letter, lowercases all else', () => {
    expect(wordCap('four score and seven')).toBe('Four Score And Seven');
    expect(wordCap('the javaScript language')).toBe('The Javascript Language');
    expect(wordCap('this is a "quoted" word')).toBe('This Is A "quoted" Word');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('swapCase - reverses the case of every letter in the string', () => {
    expect(swapCase('CamelCase')).toBe('cAMELcASE');
    expect(swapCase('Tonight on XYZ-TV')).toBe('tONIGHT ON xyz-tv');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('staggeredCase - alternates between upper and lower case, skips non letter characters', () => {
    expect(staggeredCase('I Love Launch School!')).toBe('I lOvE lAuNcH sChOoL!');
    expect(staggeredCase('ALL CAPS')).toBe('AlL cApS');
    expect(staggeredCase('ignore 77 the 444 numbers')).toBe('IgNoRe 77 ThE 444 nUmBeRs');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('wordLengths - prints the length of the string of characters before each space', () => {
    expect(wordLengths('cow sheep chicken')).toEqual(['cow 3', 'sheep 5', 'chicken 7']);
    expect(wordLengths('baseball hot dogs and apple pie')).toEqual(['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']);
    expect(wordLengths("It ain't easy, is it?")).toEqual(['It 2', "ain't 5", 'easy, 5', 'is 2', 'it? 3']);
    expect(wordLengths('Supercalifragilisticexpialidocious')).toEqual(['Supercalifragilisticexpialidocious 34']);
    expect(wordLengths('')).toEqual([]);
    expect(wordLengths()).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('searchWord - finds each match of the given word', () => {
    const text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
    expect(searchWord('his', text)).toBe(4);
    expect(searchWord('hip-hop', text)).toBe(1); // "hip-hop" SHOULD not match "hip-hop's"
    expect(searchWord('flow', text)).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('processReleaseData - correctly filters and formats the film data', () => {
    let newReleases = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 654356453,
        boxArt: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        title: 'The Chamber',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];
    expect(processReleaseData(newReleases)).toEqual([{ id: 70111470, title: 'Die Hard' }, { id: 675465, title: 'Fracture' }]);

    newReleases = [
      {
        id: 654356453,
        boxArt: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        title: 'The Chamber',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 70111471,
        title: 'Die Hard',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 675466,
        title: 'Fracture',
        boxArt: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];
    expect(processReleaseData(newReleases)).toEqual([{ id: 70111471, title: 'Die Hard' }, { id: 675466, title: 'Fracture' }]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
