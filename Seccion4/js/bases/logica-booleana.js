
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(true); // true

console.log(!regresaFalse()); // true


console.warn('And');
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.log('==== && ====');
// Ejecutar funciones de manera condicional
// solo se ejecutan hasta encontrar alguna funcion que retorne false
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('==== OR ====');
// basta que una condicion sea true
// solo se ejecutan hasta encontrar alguna funcion que retorne true
console.log(regresaFalse() || regresaTrue()); // true
console.log(regresaTrue() || regresaFalse()); // true
