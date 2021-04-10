/* 
We ask to read a sentence, which ends with a point character by character and to determine :
  * The length of the sentence (number of characters)
  * The number of words in the senctence (Assuming that the words are separated by a single space)
  * The number of the Vowels in the sentence.
  *
Instruction:
  * Each character will be treated separately
  * The last character is the
  * Use three variables as counters
*/

const sentence =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsam atque.";

const length = sentence.length;
const words = sentence.split(" ");
console.log(words.length);

function vowel_count(sentence) {
  const vowel_list = "aeiouAEIOU";
  let vcount = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (vowel_list.indexOf(sentence[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count(sentence));
