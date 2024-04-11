const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
};

const reverseMorseCode = {};
for(const key in morseCode){
    if(morseCode.hasOwnProperty(key)){
        const value = morseCode[key];
        reverseMorseCode[value]=key;
    }
}
const inputField =  document.getElementById("input");
const translateButton = document.getElementById("translate");
const outputField = document.getElementById("output");
translateButton.addEventListener("click", ()=>{
    const inputText = inputField.value.trim().toUpperCase();
    if(inputField=== ""){
        outputField.textContent = "No input provided";
        return ;
    }
if(inputText.includes(".")){
    //inputs containing dots , assuming it's morse code and translating to text
    const morseWords = inputText.split("/");
    const translatedWords = morseWords.map((morseWord) =>{
        const moreseChars = morseWord.split(" ");
        return moreseChars.map((moreseChar )=>{
            return reverseMorseCode[moreseChar] || moreseChar;
        }).join(" ");
    });
    outputField.textContent = translatedWords.join(" ");
}else{
    //input is text , translating to morse code
    const words = inputText.split(" ");
    const translatedWords=words.map((words)=>{
        const chars = words.split("");
        const moreseChars = chars.map((char)=>{
            return morseCode[char] || char;
        });
        return moreseChars.join(" ");
    });
    outputField.textContent = translatedWords.join("/");
}
});