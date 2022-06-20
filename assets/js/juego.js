// 2C = treboles
// 2D = diamandates
// 2H = coraxones
// 2S =  espadas


//crear DECK

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora;



//REFERENCIAS A ELEMENTOS

const btnPedir = document.querySelector('#btnPedir');
const marcadores = document.querySelectorAll('small');

const jugadorCartas = document.querySelector('.jugador-cartas');
console.log(jugadorCartas);






const crearDeck = ()=>{

    for(let i = 2;i <= 10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo);

        }
    }

    //console.log(deck);



    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push( especial + tipo );

        }
    }

    console.log(deck);
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
    // console.log(deck);
    // console.log(carta);
    return carta;



};



const valorCarta = ( carta ) =>{

    const valor = carta.substring(0,carta.length -1);

    return (isNaN(valor)) ? ((valor === "A") ? 11 : 10) : parseInt( valor );

}




//EVENTOS
btnPedir.addEventListener('click', () => {

     const carta = pedirCarta()
   
    puntosJugador = valorCarta(carta) + puntosJugador;
    marcadores[0].innerHTML = puntosJugador;
    const imagenCarta = document.createElement('img');
   
    imagenCarta.src = `assets/cartas/${carta}.png`;
    imagenCarta.classList.add('carta');
    
    jugadorCartas.append(imagenCarta);

    if(puntosJugador > 21){
        console.warn('perdiste,mi perro');
        btnPedir.disabled = true;
    }else if(puntosJugador == 21){
        console.log('ya ganaste,perrín');
        btnPedir.disabled = true;
    }




})







// deck = [];

// console.log(pedirCarta());
// console.log(deck);
