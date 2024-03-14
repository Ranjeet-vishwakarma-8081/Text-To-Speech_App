let speech = new SpeechSynthesisUtterance();


let voices = [];
let voiceSelectEle = document.querySelector("select");
// console.log(voiceSelectEle);

window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        voiceSelectEle.options[i] = new Option(voice.name, i);

    })
}


voiceSelectEle.addEventListener('change',() => {
    speech.voice = voices[voiceSelectEle.value];
    
})


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    console.log("speeking..");
})