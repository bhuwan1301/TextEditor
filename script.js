document.addEventListener('DOMContentLoaded', ()=>{
    let editorPanel = document.getElementById("editor");
    editorPanel.style.fontSize = "18px";

    let displayFontSize = document.getElementById("displayFontSize");
    displayFontSize.innerHTML = `Font Size: 18px`;

    editorPanel.addEventListener('input', ()=>{
        const text = editorPanel.innerHTML;
        localStorage.setItem('content', text);
    })

    let screenText = localStorage.getItem('content');
    if(screenText){
        editorPanel.innerHTML = screenText;
    }

    document.addEventListener('keydown', (e)=>{

        if(e.ctrlKey && e.key==='ArrowUp'){
            increaseFontSize();
            e.preventDefault();
        }

        if(e.ctrlKey && e.key==='ArrowDown'){
            decreaseFontSize();
            e.preventDefault();
        }

    })

    function increaseFontSize(){
        let ftSize = editorPanel.style.fontSize;
        let newSize = parseFloat(ftSize) + 1;
        editorPanel.style.fontSize = newSize + "px";
        displayFontSize.innerHTML = "Font Size: " + newSize + "px";
    }
    function decreaseFontSize(){
        let ftSize = editorPanel.style.fontSize;
        let newSize = parseFloat(ftSize) - 1;

        if(newSize < 8){
            newSize = 8;
        }

        editorPanel.style.fontSize = newSize + "px";
        displayFontSize.innerHTML = "Font Size: " + newSize + "px";
    }



    document.getElementById("fontInc").addEventListener("click",()=>{
        increaseFontSize();
    })
    document.getElementById("fontDec").addEventListener("click",()=>{
        decreaseFontSize();
    })

    document.getElementById("makeBold").addEventListener("click", ()=>{
        document.execCommand("bold");
    })
    document.getElementById("makeItalic").addEventListener("click", ()=>{
        document.execCommand("italic");
    })
})