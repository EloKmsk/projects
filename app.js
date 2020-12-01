/* Déclaration de mes éléments */
const base = document.querySelector(".randomColor");
const container = document.querySelector("#container");
const btn = document.querySelector("#quote");

/* Fonction pour mettre une couleur aléatoire */
function getRandomColor() {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    const color = `rgb(${red}, ${green}, ${blue})`;

    base.style.background = `${color}`;
    container.style.color = `${color}`;
    btn.style.background = `${color}`;
}


/* Fonction qui permet l'aléatoire des citations */
function getRandomQuote() {
    const array = ["Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.", "Chuck Norris peut faire des ronds avec une équerre", "Chuck Norris peut écrire un traitement de texte avec la souris.", "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris", "Chuck Norris se souvient très bien de son futur", "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", "Google, c'est le seul endroit où tu peux taper Chuck Norris...", "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.", "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.", "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon."];
    const element = array[Math.floor(Math.random() * array.length)];
    const li = document.querySelector('#citation');
    li.textContent = `"${element}"`;
}




/*Evenements lorsque je clique sur le bouton */
const quote = document.querySelector("#quote");
quote.addEventListener("click", getRandomColor);
quote.addEventListener("click", getRandomQuote);