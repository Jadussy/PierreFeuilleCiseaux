// Recupe le <p> pour écrire la valeur du bouton cliquer actuel
const pNodeJ = document.getElementById("ecritJ")
const pNodeO = document.getElementById("ecritO")

// Ajouts des variables des boutons
const Pierre = document.getElementById("Pierre");
const Feuille = document.getElementById("Feuille");
const Ciseaux = document.getElementById("Ciseaux");

var tour = 1;
var stop;
var victoire = 0;

// Fonction qui permet de recuperer le choix aléatoire de l'ordi entre les P,F et C
function OrdiChoixRandom() {
    var choix = Math.floor(Math.random() * 3);
    if (choix === 0 ) {
        return "Pierre"
    }
    else if (choix === 1) {
        return "Feuille"
    }
    else if (choix === 2) {
        return "Ciseaux"
    }
}

// Ecriture du choix de l'ordi dans la page



alert("tour "+tour);
tour = tour + 1;

Pierre.addEventListener("click", (event) => {
        pNodeJ.innerText = "Pierre";
        pNodeO.innerText = OrdiChoixRandom();
});
Feuille.addEventListener("click", (event) => {
        pNodeJ.innerText =  "Feuille";
        pNodeO.innerText = OrdiChoixRandom();
});
Ciseaux.addEventListener("click", (event) => {
        pNodeJ.innerText =  "Ciseaux";
        pNodeO.innerText = OrdiChoixRandom();
});



