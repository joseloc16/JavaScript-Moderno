
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['J', 'Q', 'K', 'A'];

const crearDeck = () => {

    for(let i = 2; i <=10; i++ ) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let esp of especiales) {
        for(let tipo of tipos) {
            deck.push(esp + tipo)
        }
    }

    return _.shuffle(deck);
}

console.log(crearDeck());
