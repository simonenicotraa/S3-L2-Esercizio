 alert('Benvenuto!! Per iniziare ti chiederò di inserire qualche dato. Intanto clicca su OK')

var nome= prompt('Ciao! Inserisci il tuo nome');
document.getElementById('inser_nome').innerHTML=nome;

var cognome= prompt('Inserisci il tuo cognome');
document.getElementById('inser_cognome').innerHTML=cognome;

 
var val1= +prompt('Inserisci un numero: Valore 1');
document.getElementById('valore_1').innerHTML=val1;


var val2 = +prompt('Inserisci un altro numero: Valore 2');
document.getElementById('valore_2').innerHTML=val2;



const pi= 3.14

let moltes1= pi * val1;
document.getElementById('molt_val1').innerHTML=moltes1;

let moltes2= pi * val2;
document.getElementById('molt_val2').innerHTML=moltes2;

let divperpi= moltes1/val1
document.getElementById('valore_costante').innerHTML=divperpi;



var sommavar= val1 + val2;
document.getElementById('somma1').innerHTML=sommavar;
{
    var val3= 50
    var somval3= sommavar + val3
    document.getElementById('somma2').innerHTML=somval3;
}

var somval3= sommavar+val3
document.getElementById('somma3').innerHTML=somval3;

var recapval3= somval3 - sommavar;
document.getElementById('valore_preimp').innerHTML=recapval3;

{
    let num1= 6
    let somlet= sommavar + num1
    document.getElementById('let_es1').innerHTML=somlet;
}
let somletout= sommavar + num1
document.getElementById('let_es2').innerHTML=somletout;