const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy");


//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch(`https://dummyjson.com/quotes/random`).then(res => res.json()).then(result =>{
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}


soundBtn.addEventListener("click", ()=>{
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak is a method of SpeechSynthesis to speak the utterance)
})


copyBtn.addEventListener("click", ()=>{
    
    //writeText() writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
})


quoteBtn.addEventListener("click", randomQuote);