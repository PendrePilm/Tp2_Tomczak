let compteur = 0;

function deplacer() {
    let clavier = document.getElementById("clavier");
    let texte = clavier.value;

    if (texte.trim() !== "") {
        let nouvelDiv = document.createElement('div');
        nouvelDiv.classList.add('texte');

        if (compteur % 2 === 0) {
            nouvelDiv.classList.add('droite');
        } else {
            nouvelDiv.classList.add('gauche');
        }

        nouvelDiv.innerHTML = texte;

        let affichage = document.getElementById("affichage");
        affichage.appendChild(nouvelDiv);

        compteur++;

        clavier.value = "";
    }
}
