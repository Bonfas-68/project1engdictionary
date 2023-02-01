const inputEl = document.getElementById('input')
const titleEl = document.getElementById('title')
const meaningContainerEL = document.getElementById('meaning-container')
const meaningEl = document.getElementById('meaning')
const infoTextEl =  document.getElementById('info-text')
const audioEl = document.getElementById('audio')
const spinnerEl = document.querySelector('.spinner')


async function fetchAPI(word){
    // console.log(word);
    try {
        infoTextEl.innerText = `Searching the meaning of ${word}`
        infoTextEl.style.display = 'block'
        meaningContainerEL.style.display = 'none'
        spinnerEl.style.display = 'inline-flex'

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).
        then(res => res.json())
        if(result.title){
            titleEl.innerText = word
            meaningEl.innerText = "N/A"
            audioEl.style.display = "none" 
            infoTextEl.style.display = 'none'
            meaningContainerEL.style.display = 'block'
        }else{
            infoTextEl.style.display = 'none'
        meaningContainerEL.style.display = 'block'
        titleEl.innerText = result[0].word
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition
        audio.style.display = "inline-flex"
        audioEl.src = result[0].phonetics[0].audio
        spinnerEl.style.display = 'none'
        }

        
    } catch (error) {
        infoTextEl.innerText = `An error occured, try again later`;
        // console.log(error);
    }
   
    
}

inputEl.addEventListener('keyup', (e)=>{
    // console.log(e.target.value);
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value)
    }
})