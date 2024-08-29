const board = document.getElementById("box");
for (let i = 1; i <= 76; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.textContent = i;
  cell.id = `cell-${i}`; //creo un id unico per ogni cella basato sul valore corrente di i e da qui poi posso manipolare facilmente ciascusa cella in seguito.
  board.appendChild(cell);
}

let availableNumbers = Array.from({ length: 76 }, (_, i) => i + 1);

document.getElementById("key").addEventListener("click", function () {
  if (availableNumbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const randomNumber = availableNumbers.splice(randomIndex, 1)[0]; // // estraggo un numero casuale dall'array dei numeri disponibili

    drawnNumbers.push(randomNumber); // Aggiungere il numero estratto all'array drawnNumbers

    document.getElementById(`cell-${randomNumber}`).classList.add("light"); // qui evidenzio le celle a random.
  }
});

const drawnNumbers = []; // controllo che siano stati esstratti i numeri
