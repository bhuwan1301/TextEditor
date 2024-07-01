document.addEventListener('DOMContentLoaded', ()=>{
    let editorPanel = document.getElementById("editor");
    editorPanel.style.fontSize = "18px";

    let displayFontSize = document.getElementById("displayFontSize");
    displayFontSize.innerHTML = `Font Size: 18px`;

    // editorPanel.addEventListener('input', ()=>{
    //     const text = editorPanel.innerHTML;
    //     localStorage.setItem('content', text);
    // })

    // let screenText = localStorage.getItem('content');
    // if(screenText){
    //     editorPanel.innerHTML = screenText;
    // }

    //EVENT LISTENERS
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

    document.getElementById("fontInc").addEventListener("click",()=>{
        increaseFontSize();
    })
    document.getElementById("fontDec").addEventListener("click",()=>{
        decreaseFontSize();
    })

    const boldBtn = document.getElementById("makeBold")
    boldBtn.addEventListener("click", ()=>{
        if(boldBtn.classList.contains("active")) boldBtn.classList.remove("active");
        else boldBtn.classList.add("active");
        document.execCommand("bold");
    })
    
  const itBtn = document.getElementById("makeItalic")
    itBtn.addEventListener("click", ()=>{
        if(itBtn.classList.contains("active")) itBtn.classList.remove("active");
        else itBtn.classList.add("active");
        document.execCommand("italic");
    })

    document.getElementById("save").addEventListener("click",()=>{
        let filename = window.prompt("Enter file name to save: ");
        if(filename.trim() === ""){
            alert("File name cannot be empty");
        }else{
            saveFile(filename);
            alert("File saved succesfully!")
        }
    })

    document.getElementById('load').addEventListener("click", ()=>{
        let filename = window.prompt("Enter file name to load: ");
        if(filename.trim() === ""){
            alert("File name cannot be empty");
        }else{
            loadFile(filename);
        }
    })


    //FUNCTIONS
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

    function saveFile(filename){
        let text = editorPanel.innerHTML;
        localStorage.setItem(filename, text);
    }

    function loadFile(filename){
        let text = localStorage.getItem(filename);
        if(text===null){
            alert("File not found");
        }else{
            editorPanel.innerHTML = text;
            alert("File loaded succesfully!")
        }
    }
    
})
