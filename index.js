const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => { 

const bubble = document.createElement('span');




// classList permet de gérer les classes d'un élément
bubble.classList.add('bubble');
// appendChild permet d'ajouter un élément à la fin d'un élément parent
document.body.appendChild(bubble);

// Math.random() renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
const size = Math.random() * 200 + 100 + 'px';


bubble.style.width = size;
bubble.style.height = size;

// permet de définir la position de l'élément en fonction de son parent
bubble.style.top = Math.random() * 100 + 50 + '%';
bubble.style.left = Math.random() * 100 + '%';

const plusMinus = Math.random() > 0.5 ? 1 : -1;


// permet de définir la couleur de fond de l'élément
bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + '%');

bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
 });

//permet de supprimer un élément après un certain temps
setTimeout(() => {
    bubble.remove();
 }, 8000);
};

setInterval(bubbleMaker, 300);