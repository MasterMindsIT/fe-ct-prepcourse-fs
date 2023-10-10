/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var miArray = [];
  Object.entries(objeto).forEach(([key, value]) => {
    var caracter = key.toString();
    var arrayTemporal = [caracter, value];
    miArray.push(arrayTemporal);
  });
  return miArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var resultObjeto = {};
  for (let index = 0; index < string.length; index++) {
    if (resultObjeto[string[index]]) {
      //Existe la propiedad???
      resultObjeto[string[index]]++; //Si existe, le sumamos 1
    } else {
      //No existe. La creamos con valor 1
      resultObjeto[string[index]] = 1;
    }
  }
  var nuevo = Object.entries(resultObjeto);
  nuevo.sort();
  resultObjeto = Object.fromEntries(nuevo);
  return resultObjeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var minusculas = "";
  var mayusculas = "";
  var nuevaCadena = string.split("");
  for (let index = 0; index < nuevaCadena.length; index++) {
    if (nuevaCadena[index] === nuevaCadena[index].toLowerCase()) {
      minusculas += nuevaCadena[index];
    } else {
      mayusculas += nuevaCadena[index];
    }
  }
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var nuevaCadena = frase.split(" ");
  for (let index = 0; index < nuevaCadena.length; index++) {
    var cadena = nuevaCadena[index].split("").reverse().join("");
    nuevaCadena[index] = cadena;
  }
  return nuevaCadena.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numText = numero.toString();
  return numText === numText.split("").reverse().join("")
    ? "Es capicua"
    : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  string = string.replace("a", "");
  string = string.replace("b", "");
  string = string.replace("c", "");
  return string;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  for (let i = 0; i < arrayOfStrings.length; i++) {
    for (let j = i+1; j < arrayOfStrings.length; j++) {
      if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
         aux =  arrayOfStrings[i];
         arrayOfStrings[i] = arrayOfStrings[j];
         arrayOfStrings[j] = aux;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var nuevoArreglo = [];
  for (let i = 0; i < array1.length; i++) {
   for (let j = 0; j < array2.length; j++) {
     if (array1[i] === array2[j]) {
        nuevoArreglo.push(array1[i]);
     }
   }
 }
 return  nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
