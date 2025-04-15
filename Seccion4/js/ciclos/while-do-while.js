
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

console.warn('While');

let i = 0;
while(i < carros.length) {

    if( i === 1){
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do While');

let j = 0;
do{
    console.log(carros[j]);
    j++;
} while(j < carros.length);
