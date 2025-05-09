const menuButton = document.querySelector('.botton'); // Corretto il nome della variabile
const menuContainer = document.getElementById('link'); // Nome più descrittivo

const menuPizze = [
  { nome: "Margherita", prezzo: 6.00 },
  { nome: "Diavola", prezzo: 7.50 },
  { nome: "Quattro Formaggi", prezzo: 8.00 },
  { nome: "Capricciosa", prezzo: 8.50 },
  { nome: "Vegetariana", prezzo: 7.00 }
];

// Funzione per riempire il menù
function riempiMenu() {
  menuContainer.innerHTML = ''; // Svuota il contenitore (div)
  menuPizze.forEach(pizza => {
    const pizzaElement = document.createElement('p');
    pizzaElement.textContent = `${pizza.nome}: €${pizza.prezzo.toFixed(2)}`;
    menuContainer.appendChild(pizzaElement); // Aggiunge l'elemento al contenitore
  });
}

// Gestione del click sul bottone
menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('visible'); // Mostra o nasconde il menù
  if (menuContainer.classList.contains('visible')) {
    riempiMenu(); // Riempie il menù se è visibile
  }
});