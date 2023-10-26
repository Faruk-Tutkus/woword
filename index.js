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
//filtreleme
const filteredWords = {};
for (const word in wordlist) {
    if (wordlist[word].level === 'A1') {
        filteredWords[word] = wordlist[word];
    }
}
//sıralı bir şekilde erişim sağlama
const keys = Object.keys(filteredWords)
var keysNum = keys[75]
console.log(filteredWords[keysNum].english.length)
var queue = 0
const englishWord = document.querySelector('#english')
const meaningWord = document.querySelector('#meaning')
const buttonright = document.querySelector('#buttonright')
const buttonleft = document.querySelector('#buttonleft')
window.onload = (event) => {
    englishWord.innerHTML = filteredWords[keysNum].english
    meaningWord.innerHTML = filteredWords[keysNum].turkish
}
buttonright.addEventListener('click', ()=> {
    queue++;
    keysNum = keys[queue]
    if (filteredWords[keysNum].english.length > 7 && filteredWords[keysNum].english.length < 11 && window.innerWidth < 600) {
        englishWord.style.fontSize = '50px';
    }
    else if (filteredWords[keysNum].english.length > 11 && window.innerWidth < 600){
        englishWord.style.fontSize = '40px';
    }
    else
        englishWord.style.fontSize = '60px';
    englishWord.innerHTML = filteredWords[keysNum].english
    meaningWord.innerHTML = filteredWords[keysNum].turkish
})
buttonleft.addEventListener('click', ()=> {
    queue--;
    keysNum = keys[queue]
    englishWord.innerHTML = filteredWords[keysNum].english
    meaningWord.innerHTML = filteredWords[keysNum].turkish
})