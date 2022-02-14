console.log('------------------------Calcular el IVA del valor total del producto------------------------\n');
console.log("Ingrese el valor total con el IVA incluido del producto: ");

let valorConIvaIncluido = 0;
let valorSinIvaIncluido = 0;
let valorDelIvaAIncluir = 0;

//Calcula el IVA del Producto
function calcularValorIva(valorConIvaIncluidoP){
    //Se calcula el valor sin IVA
    valorSinIvaIncluido = (valorConIvaIncluidoP / 1.19).toFixed(1);

    //Se resta del valor total de producto con el valor sin IVA del producto
    valorDelIvaAIncluir = (valorConIvaIncluidoP - valorSinIvaIncluido).toFixed(1);

    mostrarDatos(valorConIvaIncluidoP, valorSinIvaIncluido, valorDelIvaAIncluir);
}

//Mustra los Datos Calculados
function mostrarDatos(valorConIvaIncluidoP, valorSinIvaIncluido, valorDelIvaAIncluir){
    console.log(`El Valor Total del Producto con IVA del 19% Incluido es: ${valorConIvaIncluidoP}\n El Valor del Producto sin el IVA Incluido es: ${valorSinIvaIncluido}\n El Valor del IVA correspondiente al 19% es: ${valorDelIvaAIncluir}`);
}

process.stdin.on('data', function (valorConIvaIncluidoIngresado) {

    //Se convierte el tipo de dato string a int
    valorConIvaIncluido = parseInt(valorConIvaIncluidoIngresado);

    calcularValorIva(valorConIvaIncluido);

    process.exit();

});