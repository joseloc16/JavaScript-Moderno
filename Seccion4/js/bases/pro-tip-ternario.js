
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro 
                        ? '2 Dólares' 
                        : '10 Dólares';

console.log(`El mayor número es: ${elMayor(20, 150)}`);
console.log(`Costo: ${tieneMembresia(false)}`);

// -----------------------------------------------
const amigo = true;
const amigosArr = ['Peter', 'Tony', 'Dr Strange',
    amigo ? 'Thor': 'Loki'
]

console.log(amigosArr);
