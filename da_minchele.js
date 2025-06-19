// ...existing code...
const menuButton = document.getElementById('menu-btn');
const menuContainer = document.getElementById('link');
const chiButton = document.getElementById('chi-btn');
const chiContainer = document.getElementById('chi');

var menuPizze = [
  { nome: "Margherita", prezzo: 6.00 },
  { nome: "Diavola", prezzo: 7.50 },
  { nome: "Quattro Formaggi", prezzo: 8.00 },
  { nome: "Capricciosa", prezzo: 8.50 },
  { nome: "Vegetariana", prezzo: 7.00 }
];

// Funzione per riempire il menù
function riempiMenu() {
  menuContainer.innerHTML = '';
  menuPizze.forEach(pizza => {
    const pizzaElement = document.createElement('p');
    pizzaElement.textContent = `${pizza.nome}: €${pizza.prezzo.toFixed(2)}`;
    menuContainer.appendChild(pizzaElement);
  });
}

// Funzione per riempire "Chi siamo"
function riempiChi() {
  chiContainer.innerHTML = '';
  const chiText = document.createElement('p');
  chiText.textContent = "Siamo la pizzeria Da Michele, tradizione e qualità dal 1930. Ingredienti freschi e passione per la vera pizza napoletana!";
  chiContainer.appendChild(chiText);
}

// Gestione del click sul bottone Menù
menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('visible');
  // Nasconde l'altro sezione se visibile
  chiContainer.classList.remove('visible');
  if (menuContainer.classList.contains('visible')) {
    riempiMenu();
  }
});

// Gestione del click sul bottone Chi siamo
chiButton.addEventListener('click', () => {
  chiContainer.classList.toggle('visible');
  // Nasconde l'altro sezione se visibile
  menuContainer.classList.remove('visible');
  if (chiContainer.classList.contains('visible')) {
    riempiChi();
  }
});