var minhaVar = 'minha variável';


function minhaFun(x, y) {
    return x + y;
}


// ES6 ou ES2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});

// ES2015: arrow function
numeros.map(valor => valor * 2);

class Matematica {
    soma (x, y) {
        return x + y;
    }
}