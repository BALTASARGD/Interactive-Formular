// Strings kann nicht addiert werden

/*
- Variabel name = ageToday
- Variabel Wert (Inhalt) = "38"
- Variabel Type (typeof) = string
*/
let ageToday = 38;
//let yearOfBirth = 1986;

/*
- Mann kann mit Operatoren ( +, -, /, oder *) Abrechnungen durchführen
*/

//console.log(ageToday + yearOfBirth);
//console.log("ageToday + yearOfBirth"); // mit Fehler

// Elemente aus HTML mit JavaScript ansprechen

const userName = document.getElementById("name");
const country = document.getElementById("country");
const yearOfBirth = document.getElementById("year");
const form = document.getElementById("user-form");
const messageContent = document.getElementById("message-content");

// Aktuelles Jahr
const currentYear = new Date().getFullYear();

// Funktion syntax

const consoleLogs = () => {
  console.log("Hellooo mein lieber Browser");
  console.log(messageContent);
};

// consoleLogs();

// console.log("Noch Mal loggen");

// consoleLogs();

// EventListener auf Formular zuweisen

// addEventListener("ereignis name","eine Funktion");

// Template Strings (String und Variabeln kombinieren)

//console.log(`Das Jahr ist ${currentYear}. Hurraaay!!!`);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // verhindert das Standardverhalten des Formulars (automatisches Neuladen der Seite)
  //consoleLogs();
  // Benutzerinformationen aus Formular ausgeben
  console.log(`Name: ${userName.value}`);
  console.log(`Country: ${country.value}`);

  // Alter berechnen
  console.log(`Alter: ${currentYear - yearOfBirth.value}`);

  // Variabeln in messageContent einfügen
  messageContent.textContent = `Hallo :wave::skin-tone-6:, du bist ${userName.value},
  du kommst aus ${country.value}, du bist ${
    currentYear - yearOfBirth.value
  } alt.

  :people_hugging: Herzlich Wilkommen!`;
});