// Recupe le <p> pour écrire la valeur du bouton cliquer actuel
const pNode = document.getElementById("ecritJ")

// Ajouts des variables des boutons
const Pierre = document.getElementById("Pierre");
const Feuille = document.getElementById("Feuille");
const Ciseaux = document.getElementById("Ciseaux");

var tour = 0;
var stop = prompt("Stop pour arreter")
var victoire = 0;

// Les boutons P F C
while stop != "stop" {
    tour += 1;
     

Pierre.addEventListener("click", (event) => {
    pNode.innerText = "Pierre";
    temp.push("P");
});

Feuille.addEventListener("click", (event) => {
    pNode.innerText =  "Feuille";
    temp.push("F");
});
Ciseaux.addEventListener("click", (event) => {
    pNode.innerText =  "Ciseaux";
    temp.push("C");
});


}
alert("tour 1");
// random


