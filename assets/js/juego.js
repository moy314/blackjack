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

    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
        return deck

}


crearDeck();



//TOMAR UNA CARTA

const pedirCarta = () =>{
    
    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop(); 
    console.log(deck);
    console.log(carta);
    return carta;



};
deck = [];

console.log(pedirCarta());
console.log(deck);
