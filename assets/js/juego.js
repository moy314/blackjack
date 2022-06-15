// 2C = treboles
// 2D = diamandates
// 2H = coraxones
// 2S =  espadas


//crear DECK

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

const crearDeck = ()=>{

    for(let i = 2;i <= 10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo);

        }
    }

    //console.log(deck);



for(let tipo of tipos){
    for(let especial of especiales){
        deck.push(tipo + especial);

    }
}

console.log(deck);


}


crearDeck();