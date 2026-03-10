/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 4;
let num2 = 18;
if (num1 > num2) {
  console.log("exercise 1: "+ num1 + " is greater than " + num2);
} else if ( num2>num1) {
  console.log("exercise 1: " + num2 + " is greater than " + num1);
} else {
  console.log("exercise 1: " + "the two numbers are equal");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 10;
if (num !== 5) {
  console.log("exercise 2: " + "not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 25;
if (x % 5 === 0) {
  console.log("exercise 3: " + "divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 32;
let z = 26;
if (y === 8 || z === 8 || y-z === 8 || z-y === 8){
  console.log("exercise 4: " + "true");
} else {
  console.log("exercise 4: " + "false")
} 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 58;
let shipping = 10;
let totalFinalCost;
if (totalShoppingCart >= 50) {
  totalFinalCost = totalShoppingCart;
  console.log("exercise 5: " + "total amount: " + totalFinalCost)
} else {
  totalFinalCost = totalShoppingCart + 10;
  console.log("exercise 5: " + "total amount: " + totalFinalCost + " (10€ shipping)")
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = totalShoppingCart - ((totalShoppingCart/100)*20);
if (totalShoppingCart >= 50) {
  totalFinalCost = totalShoppingCart;
  console.log("exercise 6: " + "total amount: " + totalFinalCost)
} else {
  totalFinalCost = totalShoppingCart + 10;
  console.log("exercise 6: " + "total amount: " + totalFinalCost + " (10€ shipping)")
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 3;
let b = 1;
let c = 7;
let arr = [];
if (a <= b && a <= c) {
  arr.push(a);
  if (b <= c) {
    arr.push(b);
    arr.push(c);
  } else if (c <= b) {
    arr.push(c);
    arr.push(b);
  }
} else if (b <= a && b <= c) {
    arr.push(b);
    if (a <= c) {
      arr.push(a);
      arr.push(c);
    } else if (c <= a) {
      arr.push(c);
      arr.push(a);
    }
} else if (c <= b && c <= a) {
    arr.push(c);
    if (b <= a) {
      arr.push(b);
      arr.push(a);
    } else if (a <= b) {
      arr.push(a);
      arr.push(b);
    }
  }
console.log("exercise 7: ", arr);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let input = 9;
if (typeof input === "number") {
  console.log("exercise 8: " + "It's a number!")
} else {
  console.log("exercise 8: " + "Not a number!")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let k = 24;
if (k % 2 === 0) {
  console.log("exercise 9: " + "è pari");
} else {
  console.log("exercise 9: " + "è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/  
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val > 5 && val < 10) {
      console.log("exercise 10: " + "Meno di 10");
  } else {
      console.log("exercise 10: " + "Uguale a 10 o maggiore");
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let oneToTen = [];
oneToTen.push(1);
oneToTen.push(2);
oneToTen.push(3);
oneToTen.push(4);
oneToTen.push(5);
oneToTen.push(6);
oneToTen.push(7);
oneToTen.push(8);
oneToTen.push(9);
oneToTen.push(10);
console.log(oneToTen);

let fastOneToTen = [];
for (let i = 1 ; i <= 10 ; i++) {
  fastOneToTen.push(i);
}
console.log(fastOneToTen);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let lastIndex = oneToTen.length - 1
oneToTen[lastIndex] = 100;
console.log(oneToTen)
