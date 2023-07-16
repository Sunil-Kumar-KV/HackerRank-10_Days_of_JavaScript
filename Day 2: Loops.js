'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const array = [...s];
    const vowel = [];
    const consonant = [];
    
array.forEach(word=>{
if(word==='a' || word==='e' || word==='i' || word==='o' || word==='u'){
    vowel.push(word);
    }
else{
    consonant.push(word);
    }
})
    const finalWords  =[...vowel,...consonant];
        finalWords.map(alphabate=>{
        console.log(alphabate);
    })
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
