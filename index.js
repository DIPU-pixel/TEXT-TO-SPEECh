let mic = document.getElementById("mic");
mic.addEventListener("click" ,()=>{
    window.SpeechRecognition =window.SpeechRecognition || webkitSpeechRecognition; 
//window is global objects in browser
//inside window is has speech recogonation properties
// create new instance
let recogonition = new SpeechRecognition();
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);
//call dom event for listening voice
recogonition.addEventListener("result", (e) =>{
    let transcript = e.results[0] [0].transcript;
    if (e.results[0].isFinal) {
        p=document.createElement("p");
        words.appendChild(p);
    }
    
p.innerHTML = transcript;
p.style.background = transcript;
});
// Event name is SpeechRecognitionevent
//continous listen voice
recogonition.addEventListener("end", recogonition.start);
// unable mic or giving permission to mic
recogonition.start();
});
