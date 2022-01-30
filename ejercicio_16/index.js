const links = document.getElementsByTagName('a');
const tercerParrafo = document.getElementById("third-paragraph");
const linksTercerParrafo = tercerParrafo.getElementsByTagName('a');

var newDiv = document.createElement("div");
newDiv.innerHTML = `Número total de enlaces: ${links.length}.<br/>
    Link del penúltimo enlace: ${links[links.length-2].href}.<br/>
    Número de enlaces del tercer párrafo: ${linksTercerParrafo.length}.`;
newDiv.style = "color: green";
document.body.appendChild(newDiv);
