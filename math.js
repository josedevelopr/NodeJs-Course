//Se crea el objeto Math para que se le agregue los metodos luego
const Math ={};

function add(x1,x2)
{
    return x1+x2;
}

function substract(x1,x2)
{
    return x1-x2;
}

function multiply(x1,x2)
{
    return x1*x2;
}

function divide(x1,x2)
{
    if(x2==0)
    {
        return console.log('No se puede dividir entre 0');
    }
    else
    {
        return x1/x2;
    }
}

//EXPORTANDO LAS FUNCIONES

//Se agrega al objeto Math los metodos que hemos creado
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//Se exporta el objeto Math con los metodos que se le agregaron
module.exports = Math;

/*
//Exportamos el objeto para que pueda ser utilizado
exports.add =add;
exports.substract =substract;
exports.multiply =multiply;
exports.divide =divide;
*/