// Selezioniamo l'elemento HTML che rappresenta l'input di tipo "date"
const inputDate = document.getElementById('data');

// Impostiamo la data odierna come valore di default dell'input
const today = new Date().toISOString().split('T')[0];
inputDate.value = today;

// Calcoliamo la data massima consentita (20 giorni dopo la data odierna)
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 20);
const maxDateString = maxDate.toISOString().split('T')[0];

// Impostiamo la data massima come attributo "max" dell'input
inputDate.setAttribute('max', maxDateString);

// Aggiungiamo un listener all'input per impedire la selezione di date precedenti a quella odierna o successive a quella massima consentita
inputDate.addEventListener('input', function() {
  const selectedDate = new Date(inputDate.value);
  if (selectedDate < new Date(today)) {
    inputDate.value = today;
  } else if (selectedDate > maxDate) {
    inputDate.value = maxDateString;
  }
});

// Aggiungiamo un listener al click sull'input per far comparire il calendario predefinito
inputDate.addEventListener('click', function() {
  this.type = 'date';
  this.focus();
});

// controllo numero telefonico input
const phoneInput = document.getElementById('cellnumber');
let alertcompilatutticampi = document.querySelector('.alertcompilatutticampi');
let alertnomecognome = document.querySelector('.alertnomecognome');
let alerttelefono = document.querySelector('.alerttelefono');

phoneInput.addEventListener('input', function() {
  const phoneRegex = /^\d+$/; // espressione regolare per controllare che l'input sia composto solo da numeri
  const phoneNumber = phoneInput.value.trim(); // eliminiamo eventuali spazi vuoti all'inizio e alla fine dell'input

  if (phoneRegex.test(phoneNumber)) { // se l'input contiene solo numeri
    // qui puoi inserire eventuali altre azioni da eseguire se l'input è valido
  } else { // se l'input contiene anche del testo
    alerttelefono.classList.remove("d-none");
    phoneInput.value = ''; // cancelliamo l'input errato
  }
});

// controllo nome e cognome input
const input = document.getElementById("username");
input.addEventListener("input", function() {
  const regex = /^[a-zA-Z\s]*$/;
  const value = input.value.trim();
  if (!regex.test(value)) {
    alertnomecognome.classList.remove("d-none");
    input.value = "";
  }
});

// Aggiungiamo un listener al submit del form
document.querySelector('form').addEventListener('submit', function(event) {
    // Verifichiamo se i campi sono stati compilati
    if (!input.value || !phoneInput.value) {
      // Se uno o entrambi i campi non sono stati compilati, impediamo l'invio del modulo
      event.preventDefault();
      alertcompilatutticampi.classList.remove("d-none");
    }
  });