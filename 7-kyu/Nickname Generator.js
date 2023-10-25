function nicknameGenerator(name) {
    if (name.length < 4) return "Error: Name too short";
    const vowels = ["a", "e", "i", "o", "u"];
    let n = 3;
    if (vowels.includes(name[2])) n = 4;
    return name.slice(0, n);
}

console.log(nicknameGenerator("Jimmy")); // "Jim"
console.log(nicknameGenerator("Samantha")); // "Sam"
console.log(nicknameGenerator("Sam")); // "Error: Name too short"
console.log(nicknameGenerator("Kayne")); // "Kay", "'y' is not a vowel"
console.log(nicknameGenerator("Melissa")); // "Mel"
console.log(nicknameGenerator("James")); // "Jam"
