//qui inserisco prima parola e la mostrerò in console
const  firstWord = prompt('inserisci parola a caso');
console.log(firstWord);

//qui inserisco seconda parola e la mostrerò in console
const secondWord = prompt('inserisci seconda parola a caso');
console.log(secondWord);
//qui inserisco numero
let a = 1;
//visualizzarlo in console
console.log(a);
//qui prenderò id pass nell'html e metterò dentro gli input scritti sopra
let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `Password : ${firstWord}${secondWord}${a}`

//inserisco due numeri interi e una stringa con scritta 22
let number1 = 20;//intero
let number2 = 2;//intero
let number4 ='22';//stringa
//test1 farà la somma tra il numero 1 e il numero 2
let test1 = number1 + number2;
//controllo test1 in console
console.log(test1);
//voglio che in html verrà scritto h1 rosso con prima parola + somma + numero4 stringa
console.log(firstWord + test1 + number4);
document.getElementById('key').innerHTML = `key : ${firstWord}${test1}${number4} `





