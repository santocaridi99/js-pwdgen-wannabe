//qui inserisco prima parola e la mostrerò in console
const  firstWord = prompt('inserisci parola a caso');
console.log(firstWord);

//qui inserisco seconda parola e la mostrerò in console
const secondWord = prompt('inserisci seconda parola a caso');
console.log(secondWord);
//qui inserisco numero
let a = 1;
console.log(a);


//qui prenderò id pass nell'html e metterò dentro gli input scritti sopra
let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `Password : ${firstWord}${secondWord}${a}`
