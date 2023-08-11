// alt 124

let sentence = "this website is aw3som3";

let vowels = 0;
let consonants = 0;
let digits = 0;
let whiteSpaces = 0;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    
    if (char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    } else if (char >= '0' && char <= '9') {
        digits++;
    } else if (char === ' ') {
        whiteSpaces++;
    }
}

console.log("Number of vowels:", vowels);
console.log("Number of consonants:", consonants);
console.log("Number of digits:", digits);
console.log("Number of white spaces:", whiteSpaces);
