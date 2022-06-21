// 2C = treboles
// 2D = diamandates
// 2H = coraxones
// 2S =  espadas


//crear DECK

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;



//REFERENCIAS A ELEMENTOS

const btnPedir          = document.querySelector('#btnPedir');
const btnDetener        = document.querySelector('#btnDetener');


const marcadores        = document.querySelectorAll('small');

const jugadorCartas     = document.querySelector('.jugador-cartas');
const computadoraCartas = document.querySelector('.computadora-cartas');
console.log(computadoraCartas);






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



//TURNO  DE LA COMPURADOTA

const trunoComputadora = (puntosMinimos ) => {

    do{
        const carta = pedirCarta();
        puntosComputadora = valorCarta(carta) + puntosComputadora;
        marcadores[1].innerHTML = puntosComputadora;
        const imagenCarta = document.createElement('img');
        imagenCarta.src = `assets/cartas/${carta}.png`;
        imagenCarta.classList.add('carta');
        computadoraCartas.append(imagenCarta);


        
        if (puntosMinimos > 21){
            
            break;
        }

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout( ()=>{

        if(puntosComputadora === puntosMinimos){

            alert('nadie gana,perros');
            
        }else if( puntosMinimos > 21 ){

            alert('computadora gana'); 

        }else if( puntosComputadora > 21 ){

            alert('jugador gana');

        }else {

            alert('nadie gana');
        }

    },500);


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
        trunoComputadora(puntosJugador);
        btnDetener.disabled = true;
        btnPedir.disabled   = true;
        trunoComputadora(puntosJugador);
    }else if(puntosJugador == 21){
        console.log('ya ganaste,perrín');
        btnDetener.disabled = true;
        btnPedir.disabled   = true;
        trunoComputadora(puntosJugador);
    }




})

btnDetener.addEventListener('click',()=>{

    btnDetener.disabled = true;
    btnPedir.disabled   = true;

    trunoComputadora(puntosJugador);
    


})

// ganador(puntosComputadora,puntosJugador);

