document.getElementById("saveBtn").addEventListener("click", displayAlert);

function displayAlert() {
    alert("Botón de guardar pulsado");
}

document.getElementById("nameInput").addEventListener("focus", onFocus);
document.getElementById("nameInput").addEventListener("blur", onBlur);

function onFocus(e) {
    e.target.style = "background-color: yellow";
}

function onBlur(e) {
    e.target.style = "background-color: white";
}

document.getElementById("letterInput").addEventListener("input", updateLetter);

function updateLetter(e) {
    if(e.target.value){
        const lastLetter = e.target.value.toUpperCase().charAt(e.target.value.length - 1);
        if(["A","E","I","O","U"].includes(lastLetter)){
            e.target.style="color: blue";
        } else {
            e.target.style="color: orange";
        }
    }
}
