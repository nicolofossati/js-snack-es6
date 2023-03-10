/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        'nome' : 'Torino',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        'nome' : 'Juventus',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        'nome' : 'Inter',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        'nome' : 'Sampdoria',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        'nome' : 'Napoli',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
];

set_object_property(teams,'punti fatti');
set_object_property(teams,'falli subiti');



function set_object_property(obj,property){
    for(let i=0; i<obj.length; i++){
        obj[i][property] = generate_number(0,100);
    }
}

function generate_number(min, max){
    return Math.floor(Math.random() * (max-min+1) +min);
}

console.log(teams);

const copyOfTeams = teams.map(({ nome, ['falli subiti']:falli_subiti}) => ({nome, falli_subiti}) );

console.log(copyOfTeams);