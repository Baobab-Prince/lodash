let sentence = '          Coding          is fun          ';

console.log('Sentence before trimming:');
console.log('<START>', sentence, '<END>');
console.log('Amount of characters in the sentence: ' + sentence.length);

console.log();

let result = _.trimStart(sentence);
console.log('Sentence after trimming:');
console.log('<START>', result, '<END>');
console.log('Amount of characters in the sentence: ' + result.length);
