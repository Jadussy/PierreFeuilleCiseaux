// Recupe le <p> pour écrire la valeur du bouton cliquer actuel
const pNode = document.getElementById("ecrit")

// Ajouts des variables des boutons
const Pierre = document.getElementById("Pierre");
const Feuille = document.getElementById("Feuille");
const Ciseaux = document.getElementById("Ciseaux");

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


