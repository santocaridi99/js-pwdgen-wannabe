// qui chiedo di inserire nome con un prompt
const userName = prompt('inserisci il tuo nome')
//qui chiedo di inserire cognome con un prompt
const userLastname = prompt('inserisci il tuo cognome')
//qui chiedo di inserire colore preferito
const favoriteColor = prompt('inserisci il tuo colore preferito')
//qui inserisco numero 21
let number = 21;
//qui prenderò id pass nell'html e metterò dentro gli input scritti sopra
let htmlElement = document.getElementById('pass');
htmlElement.innerHTML = `Password : ${userName}${userLastname}${favoriteColor}${number}`