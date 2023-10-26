var request = new XMLHttpRequest();
request.open("GET", "wordlist.json", false);
request.send(null)
var wordlistJson = JSON.parse(request.responseText);
const wordlist = {}
var object = wordlistJson[0];
var level = wordlistJson[1]
var num = 0
for (let propert in object) {
    wordlist[num] = {
        english: propert,
        turkish: object[propert],
        level: level[propert]
    }
    num++;
}
const englishWord = document.querySelector('#english')
//filtreleme
const filteredWords = {};
for (const word in wordlist) {
    if (wordlist[word].level === 'C1') {
        filteredWords[word] = wordlist[word];
    }
}
//sıralı bir şekilde erişim sağlama
const keys = Object.keys(filteredWords)
const keysNum = keys[32]
console.log(filteredWords[keysNum])