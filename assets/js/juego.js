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
// console.log(marcadorJugador);
//console.log(btnPedir);





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
    // console.log(deck);
    // console.log(carta);
    return carta;



};
// VALOR CARTA
// const valorCarta = (carta) => {
//     let puntos = 0;
//     const valor = carta.substring(0,carta.length -1);
//     console.log( valor );

//     if( isNaN( valor )){
//         puntos = (valor === "A") ? 11 : 10;
//         console.log("No es un numero");
//     }else{
//         console.log("sí es un numero");
//         puntos = parseInt( valor )
//     }
//     console.log(puntos);
    
// }


const valorCarta = ( carta ) =>{

    const valor = carta.substring(0,carta.length -1);

    return (isNaN(valor)) ? ((valor === "A") ? 11 : 10) : parseInt( valor );

}

// const carta = pedirCarta()
// console.log(carta);
// const valor = valorCarta(carta)
// console.log(valor); 



//EVENTOS
btnPedir.addEventListener('click', () => {

     const carta = pedirCarta()
    // console.log(carta);
    // const valor = valorCarta(carta)
    // console.log(valor);
    // const valor = valorCarta(pedirCarta()); 
    puntosJugador = valorCarta(carta) + puntosJugador;
    console.log(`los puntos acumulados son : ${puntosJugador}`);
    marcadores[0].innerHTML = puntosJugador;


})







// deck = [];

// console.log(pedirCarta());
// console.log(deck);
