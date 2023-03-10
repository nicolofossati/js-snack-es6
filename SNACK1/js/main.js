/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

const bikes = [
    {
        'nome' : 'prima',
        'peso' : 24
    },
    {
        'nome' : 'seconda',
        'peso' : 10
    },
    {
        'nome' : 'terza',
        'peso' : 11
    },
    {
        'nome' : 'quarta',
        'peso' : 20
    },
    {
        'nome' : 'quinta',
        'peso' : 5
    }
];
let peso_minore = 0;
let nome_pm = "" 
for(let i=0; i<bikes.length; i++){
    
    const {nome,peso} = bikes[i];
    if(i==0 || (peso < peso_minore)){
        peso_minore = peso;
        nome_pm = nome;
    }

}


const title = document.querySelector('#print');
title.innerHTML = `La bici si chiama ${nome_pm} e pesa ${peso_minore}kg`;