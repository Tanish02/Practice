// Count the Vowels in string

const s = "Tanish Sharma";
const vowels = "aeiou";
let count = 0;

for (let i = 0; i < s.length; i++) {
  const ch = s[i].toLowerCase();
  if (vowels.includes(ch)) {
    count++;
  }
}

console.log(s);
console.log(`Number of vowels "${s}" is`, count);
