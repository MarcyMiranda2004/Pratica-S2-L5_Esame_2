/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("----------------Esercizio 1----------------");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
  Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("----------------Esercizio 2----------------");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("----------------Esercizio 3----------------");
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("----------------Esercizio 4----------------");
let element1 = pets.shift();
let element2 = pets.pop(element1);

pets.push(element1);
pets.unshift(element2);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("----------------Esercizio 5----------------");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars[0].licensePlate = "AB123CD";
cars[1].licensePlate = "EF456GH";
cars[2].licensePlate = "IJ789KL";
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("----------------Esercizio 6----------------");
const newCar = {
  brand: "Fiat",
  model: "500",
  color: "white",
  trims: ["titanium", "life", "allure"],
  licensePlate: "MN123OP",
};
cars.push(newCar);
console.log(cars);

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("----------------Esercizio 7----------------");
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("----------------Esercizio 8----------------");
for (i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("----------------Esercizio 9----------------");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let j = 0;

while (numericArray[j] !== 66) {
  console.log(numericArray[j]);
  j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]  
*/
console.log("----------------Esercizio 10----------------");
const charactersArray = ["g", "n", "u", "z", "d", "k"]; //ho aggiunto k per verificare il funzionamento del default

const alphabetPositions = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alphabetPositions.push(1);
      break;
    case "b":
      alphabetPositions.push(2);
      break;
    case "c":
      alphabetPositions.push(3);
      break;
    case "d":
      alphabetPositions.push(4);
      break;
    case "e":
      alphabetPositions.push(5);
      break;
    case "f":
      alphabetPositions.push(6);
      break;
    case "g":
      alphabetPositions.push(7);
      break;
    case "h":
      alphabetPositions.push(8);
      break;
    case "i":
      alphabetPositions.push(9);
      break;
    case "l":
      alphabetPositions.push(10);
      break;
    case "m":
      alphabetPositions.push(11);
      break;
    case "n":
      alphabetPositions.push(12);
      break;
    case "o":
      alphabetPositions.push(13);
      break;
    case "p":
      alphabetPositions.push(14);
      break;
    case "q":
      alphabetPositions.push(15);
      break;
    case "r":
      alphabetPositions.push(16);
      break;
    case "s":
      alphabetPositions.push(17);
      break;
    case "t":
      alphabetPositions.push(18);
      break;
    case "u":
      alphabetPositions.push(19);
      break;
    case "v":
      alphabetPositions.push(20);
      break;
    case "z":
      alphabetPositions.push(21);
      break;
    default:
      alphabetPositions.push("Lettera no presente nell'alfabeto Italiano");
  }
}

console.log(alphabetPositions);
