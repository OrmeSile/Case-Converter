document.getElementById("upper-case").addEventListener("click",function (){
    const initialText = document.querySelector("textarea").value;
    document.querySelector("textarea").value=initialText.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click",function (){
    const initialText = document.querySelector("textarea").value;
    document.querySelector("textarea").value=initialText.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click",function (){

    const initialText = document.querySelector("textarea").value;
    const words = initialText.split(" ");
    const returnWords = words.map(word=>{
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return firstLetter + rest;

    });
    document.querySelector("textarea").value=returnWords.join(" ");
});
document.getElementById("sentence-case").addEventListener("click",function(){

    const initialText = document.querySelector("textarea").value;
    const phrases = initialText.split(". ");
    const returnPhrases = phrases.map(phrase=>{
        const firstLetter = phrase.charAt(0).toUpperCase();
        const rest = phrase.slice(1).toLowerCase();
        return firstLetter + rest;
    });
    document.querySelector("textarea").value=returnPhrases.join(". ");
});

document.getElementById("save-text-file").addEventListener("click",function(){
    download("text.txt",document.querySelector("textarea").value);
});

function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    element.setAttribute('download',filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}