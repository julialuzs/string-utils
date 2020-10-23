/**
 * Checks if the string is a palindrome and returns 
 * a boolean value with the result.
 * 
 * @param {string} word
 * @return {boolean}  
 */
export function isPalindrome(word: string): boolean {
  const reversedWord = reverse(word);
  return word === reversedWord;
}

/**
 * Reverses a given string.
 * 
 * @param {string} word
 * @return {string}
 */
export function reverse(word: string): string {
  const letters = word.split('');
  const reversedLetters = letters.reverse();
  return reversedLetters.join('');
}

/**
 * Filters the duplicate words of a given array, leaving only distinct values.
 * 
 * @param {string[]} words
 * @return {string[]}
 */
export function distinct(words: string[]): string[] {
  return words.filter((word, index) => words.indexOf(word) === index);
}

/**
 * Joins the given array into a single string
 * @param {string[]} words 
 * @returns {string}
 */
export function join(words: string[]): string {
  return words.join(', ');
}

/**
 * Returns an <a> tag with the given url and word.
 * @param {string} word 
 * @param {string} url 
 * @returns {string} <a> tag
 */
export function linkify(word: string, url: string): string {
  return `<a href=${url}>${word}</a>`;
}
