# Sección 3

## Índice

- [Primitivos](#primitivos)
- [Palabras reservadas](#palabras-reservadas)
- [Arreglos](#arreglos)
- [Objetos literales](#objetos-literales)
- [Funciones básicas](#funciones-básicas)
- [Funciones de flecha](#funciones-de-flecha)
- [Retorno de funciones](#retorno-de-funciones)
- [Tips prácticos](#tips-practicos)

---

## Primitivos
---

Los primitivos son valores simples que no son objetos y son inmutables.  
Estos datos se almacenan directamente en la memoria, no como referencia.

- **Boolean** — `true / false`
- **Null** — Sin valor en absoluto
- **Undefined** — Una variable declarada que aún no se le asigna un valor
- **Number** — Números enteros, decimales, etc.
- **String** — Una cadena de caracteres
- **Symbol** — Un valor único e inmutable, no es igual a ningún otro valor

---

## Palabras reservadas
---

Identificadores que no se pueden usar como nombres de variables o funciones.

Ejemplos:
- `if`, `else`, `switch`, `case`, `break`
- `var`, `let`, `const`
- `function`, `return`
- `class`, `extends`, `super`
- `try`, `catch`, `finally`, `throw`
- `new`, `delete`, `typeof`, `instanceof`
- `import`, `export`, `default`

Estas palabras forman parte de la estructura básica del lenguaje y son necesarias para escribir programas correctos.

---

## Arreglos
---

Los **arreglos** son estructuras que permiten almacenar múltiples valores en una sola referencia.

```javascript
const frutas = ['Manzana', 'Banana', 'Cereza'];
console.log(frutas[0]); // Manzana
```

## Objetos Literales
---

Colección de pares clave-valor.

```javascript
const persona = {
  nombre: 'Ana',
  edad: 30
};
console.log(persona.nombre); // Ana
```

## Funciones básicas
---

Bloques de código reutilizables.

```javascript
function saludar(nombre) {
  console.log(arguments); // lo tienen solo las funciones tradicionales
  return `Hola, ${nombre}`;
}
console.log(saludar('Joseloc')); // Hola, Joseloc
```

## Funciones de flecha
---

Sintaxis más corta para definir funciones.

```javascript
const saludar = (nombre) => `Hola, ${nombre}`;
console.log(saludar('Joseloc')); // Hola, Joseloc
```

## Retorno de funciones
---

Las funciones pueden devolver valores.
si una función no tiene un return explícito esta retorna undefined.

```javascript
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 4)); // 7
```

## Tips prácticos
---

### Retornar objetos directamente en funciones de flecha

```javascript
function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

const crearPersonaPro = (nombre, apellido) => ({ nombre, apellido });

console.log(crearPersona('Gino', 'Nuñez'));
console.log(crearPersonaPro('Jose', 'Nuñez'));
```

### Usar argumentos dinámicos con `...args` 

```javascript
function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentosPro = (nombre, ...args) => {
  return args;
};

console.log(imprimeArgumentosPro('Jose', 17, 'Junior', 'Java'));
```

### Desestructuración de arreglos

```javascript
const [age, seniority, language] = imprimeArgumentosPro('Jose', 17, 'Junior', 'Java');
console.log({ age, seniority, language });

```

### Desestructuración de objetos (renombramiento y valores por defecto)

```javascript
const { apellido: nuevoApellido } = crearPersonaPro('Jose', 'Nuñez');
console.log({ nuevoApellido });

const tony = {
  nombre: 'Tony Montana',
  codeName: 'Cara cortada',
  vivo: false,
  edad: 40
};

const imprimirPropiedades = ({ nombre, codeName, vivo, edad = 20, trajes }) => {
  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
};

imprimirPropiedades(tony);
```
