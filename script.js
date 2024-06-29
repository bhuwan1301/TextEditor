document.addEventListener('DOMContentLoaded', ()=>{
    let editorPanel = document.getElementById("editor");
    editorPanel.style.fontSize = "18px";

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
            let ftSize = editorPanel.style.fontSize;
            let newSize = parseFloat(ftSize) + 1;
            editorPanel.style.fontSize = newSize + "px";
            e.preventDefault();
        }

        if(e.ctrlKey && e.key==='ArrowDown'){
            let ftSize = editorPanel.style.fontSize;
            let newSize = parseFloat(ftSize) - 1;
            editorPanel.style.fontSize = newSize + "px";
            e.preventDefault();
        }
    })
})