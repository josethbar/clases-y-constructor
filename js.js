/**

Ejercicio: Sistema de Registro de Alumnos

En una escuela, se necesita implementar un sistema de 
registro de alumnos. Cada alumno tiene los siguientes atributos:

Nombre
Edad
Grado
Para ello, se te pide crear una clase llamada 
"Alumno" que tenga métodos para establecer y 
obtener los atributos mencionados.

Además, se requiere un método adicional llamado 
"mostrarInformacion" que imprima en la consola 
la información del alumno en el siguiente formato:
"Nombre: [nombre] - Edad: [edad] - Grado: [grado]".

Una vez creada la clase "Alumno", crea tres 
instancias de la clase para representar a tres 
alumnos diferentes y muestra su información 
utilizando el método "mostrarInformacion".

Tu tarea consiste en:

Crear la clase "Alumno" con los atributos y métodos mencionados.
Crear tres instancias de la clase "Alumno" con información diferente para cada alumno.
Utilizar el método "mostrarInformacion" para imprimir la información de cada alumno en la consola.

*/

class Alumno {
    nombre = "";
    edad = "";
    grado = "Nivel1";


    setNombre(nombreParam) {
        this.nombre = nombreParam;

    }
    getNombre() {
        return this.nombre;



    }
    setEdad(edadParam) {
        this.edad = edadParam;

    }
    getEdad() {
        return this.edad;
    }




    setGrado(gradoParam) {
        this.grado = gradoParam;
    }
    getGrado() {
        return this.grado;
    }



    //metodo
    MostrarInformacion() {
        console.log("Nombre:" + this.nombre + "\n- Edad:" + this.edad + "\n- Grado:" + this.grado);
    }

}

let Joseth = new Alumno();
Joseth.setNombre("Joseth");
console.log("Mi alumno es ", Joseth.getNombre());

Joseth.setEdad("18")
console.log("La edad de mi alumno es ", Joseth.getEdad());

Joseth.setGrado("12°")
console.log("El grado de mi alumno es ", Joseth.getGrado());
Joseth.MostrarInformacion()


//===============================================================
//=======================
let Maria = new Alumno();
Maria.setNombre("Maria");
Maria.setEdad("19")
Maria.setGrado("11°")
Maria.MostrarInformacion()

//-----------------------------------------------//


/**

Ejercicio: Tienda de Productos Electrónicos

En una tienda de productos electrónicos,
se necesita implementar un sistema de inventario.
Cada producto tiene los siguientes atributos:

Nombre del producto
Categoría
Precio
CantidadDisponible
Para ello, se te pide crear una clase llamada "Producto" 
que tenga métodos para establecer y obtener los atributos mencionados.

Además, se requiere un método adicional llamado "verificarCantidadDisponible" 
que reciba una cantidad deseada y verifique si hay suficiente cantidad disponible
para esa cantidad. El método debe devolver true si hay suficiente cantidad y false en caso contrario.

*/


console.log("Tienda de Productos Electrónicos");

class Producto {
    nombre = "";
    categoria= "";
    precio = 0;
    cantidadDiponible = 0;
    
    
    constructor(nombreParam,categoriaParam, precioParam, cantidadDisponibleParam){
        this.nombre = nombreParam;
        this.categoria = categoriaParam;
        this.precio= precioParam;
        this.cantidadDisponible = cantidadDisponibleParam;
    }

    setNombre(nombreParam) {
        this.nombre = nombreParam;

    }

    getNombre() {
        return this.nombre;
    }
    
    setCategoria(categoriaParam){
        this.categoria=categoriaParam;
    }

    getCategoria(){
        return this.categoria;
    }
    
    setPrecio(precioParam) {
        this.precio = precioParam;
    }

    getPrecio() {
        return this.precio;
    }

    setCantidadDisponible(cantidadDisponibleParam) {
        this.cantidadDiponible = cantidadDisponibleParam;
    }

    getCantidadDisponible() {
        return this.cantidadDisponible;
    }

    verificarCantidadDisponible(verificarCantidadDisponibleParam) {
        if (this.getCantidadDisponible() >= verificarCantidadDisponibleParam)
            return true;
        else {
            return false;
        }
    }

    imprimir(){
        console.log("El nombre es: " + this.getNombre() +
        "\nla categoria es: " + this.getCategoria() + 
        "\nel precio es:" + this.getPrecio() + 
        "\nla cantidad es: " + this.getCantidadDisponible() +
        "\nEstá disponible la cantidad: " + this.verificarCantidadDisponible(10));
    }

}


//metodo


let phone = new Producto("atun","enlatados",2500,18);
// phone.setNombre("phone");
// console.log("Producto 1:", phone.getNombre());

// phone.setPrecio("135 000");
// console.log("Su precio es:", phone.getPrecio());

// phone.setCantidadDisponible(135);
// console.log("Unidades disponibles: ", phone.getCantidadDisponible());

// console.log("disponibilidad:", phone.verificarCantidadDisponible(1));
phone.imprimir();


let laptop = new Producto("laptop","computadoras",750000,33);
laptop.imprimir();



// laptop.setNombre("Laptop");
// console.log("Producto 2:" , laptop.getNombre());
// laptop.setPrecio("550 000");
// console.log("Su precio es:", laptop.getPrecio());
// laptop.setCantidadDisponible(15);
// console.log("unidades disponibles: ", laptop.getCantidadDisponible());

// console.log("disponibilidad:", laptop.verificarCantidadDisponible())


console.log("===================================================================================================0")


var numero= 5;
var funcionSaludosBuenosDias =  function(){
    console.log("Buenos Días");
}

var funcionSaludosBuenosNoches = function(){
    console.log("Buena Noches");
}

function saludar(funcionSaludarParam){
    funcionSaludarParam();
}

saludar(funcionSaludosBuenosNoches)


function crearBoton(funcionBoton){
    var btn= document.createElement("button");
    btn.addEventListener
}


(
    function(){
        console.log("Crear una función que se ejecuta de una vez");
    })()



    console.log("-----------------------------------------------------------------------");



















//MAP= -cambia objetos en mis lista
// REDUCE= - comprime mi lista
//FILTER= - filtra mi lista y retorna solo los que cumplen


// var listaFrutas =["manzana de gala" , 
//                 "manzana manshintosh" , 
//                 " manzana pequeña" ,    
//                 "pera" ,
//                 "chayote" , 
//                 "banana"
// ];

// function hacerMayuscula(fruta){
//     return fruta.toUpperCase();
// }

// var listaFrutasMayuscula = listaFrutas.map();


console.log("----------------------------MAP-------------------------------")
var equiposFutball = [
    { nombre: "Estados Unidos" },
    { nombre: "Brasil" },
    { nombre: "España" },
    { nombre: "Inglaterra" },
    { nombre: "Argentina" },
    { nombre: "Sele" }
];

function clasificarEquipo(objetoDeLaLista) {// 
    let clasificado = "CLASIFICADO";
    if (objetoDeLaLista.nombre == "Sele") {
        clasificado = "NO clasificado";
    }

    return { nombre: objetoDeLaLista.nombre, clasificado: clasificado }
}

var listaMundial = equiposFutball.map(clasificarEquipo); // clasificarEquipo(objeto3)

console.log(listaMundial);


/**
El señor de la tienda compro 5 chocolates de cada tipo,
aumentar la cantidad de chocolates en 5
*/
var listaChocolates = [
    { sabor: "chocolate amargo",  cantidad: 4 },
    { sabor: "chocolate de leche",  cantidad: 1 },
    { sabor: "chocolate blanco",  cantidad: 2 },
    { sabor: "chocolate en polvo",  cantidad: 3 }
];

function reabastecerLaTienda(listaChocolates1){
return{...listaChocolates1,cantidad:listaChocolates1.cantidad+5}
}

var chocolates = listaChocolates.map(reabastecerLaTienda);

console.log(chocolates)

//-----------------------------------------------------------------------------------------

var listaCantidadesDolares = [ 500, 100 , 1 , 900 , 150 ];
const tipoCombio = 547;
function cambioDeDinero(listaCantidadesDolares1){
    return{...listaCantidadesDolares1,cantidad:listaCantidadesDolares1*547 }
}

var cambio = listaCantidadesDolares.map(cambioDeDinero);
console.log(cambio)

console.log("======================================FILTER=============================")





var listaNombres = [{ nombre: "Luis", emocion: "POSITIVA" },
{ nombre: "Diego", emocion: "POSITIVA" },
{ nombre: "Hugo Chavez", emocion: "NEGATIVA" }];


function quitarPersona(personaParametro) {

    if (personaParametro.emocion === "POSITIVA") {
        return true;
    } else {
        return false;
    }

}
var nuevasPersonas = listaNombres.filter(quitarPersona);

console.log(nuevasPersonas);


//Filter productos mayores a 30

const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 35 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Bolso', precio: 15 },
];
function quitarCaros(productoParam){

    if(productoParam.precio>30){
        return true;  
}
    else{
        return false;
    }
}

var nuevosArticulos = productos.filter(quitarCaros); 
console.log(nuevosArticulos);



//  Quitar los celulares dañados
const celulares = [
    { marca: "Samsung", modelo: "Galaxy S21", estado: "dañado" },
    { marca: "Apple", modelo: "iPhone 12", estado: "bueno" },
    { marca: "Xiaomi", modelo: "Redmi Note 9", estado: "bueno" },
    { marca: "Motorola", modelo: "Moto G Power", estado: "dañado" },
];

function quitarcelular(celularParametro) {
    if (celularParametro.estado== "bueno") {
        return true;
    } else {
        return false;
    }
}
var nuevoCelular = celulares.filter(quitarcelular);
console.log(nuevoCelular);


console.log("______________reduce______________")

let verduras = [
    { nombre: "zanahoria", cantidad: 10 },
    { nombre: "tomate", cantidad: 5 },
    { nombre: "lechuga", cantidad: 8 },
    { nombre: "chiles", cantidad: 3 },
    { nombre: "espinacas", cantidad: 6 },
]
function contarVerduras(contador, objetivoActual) {
    return contador + "  " + objetivoActual.nombre;
}

var reducir = verduras.reduce(contarVerduras, "")
console.log(reducir);




var listaChocolates2 = [
    { sabor: "chocolate amargo", cantidad: 4 },
    { sabor: "chocolate de leche", cantidad: 1 },
    { sabor: "chocolate blanco", cantidad: 2 },
    { sabor: "chocolate en polvo", cantidad: 3 }
];
function contarChocolate(contador, cantidadactual){
    return contador+cantidadactual.cantidad; 
}

var reducir2 =  listaChocolates.reduce(contarChocolate,0);
console.log(reducir2);


var listaPeces = ["nemo", "dory", "bob", "gary"];

function contarLetras(contador, objetoActual) {

    console.log("Mi objeto actual:", objetoActual);
    console.log("Mi contador:", contador);

    return contador + objetoActual.length;
}

var listaPecesNueva = listaPeces.reduce(contarLetras, 0);

console.log(listaPecesNueva);





console.log("==============================funciones con flecha==============================")

function funcionSuma(numeroA, numeroB) {
    console.log("La suma es ", numeroA + numeroB);

}

funcionSuma(2, 5);

var funcionSumaVariable = (numeroA, numeroB) => {
    console.log("La suma2 es ", numeroA + numeroB);
}

funcionSumaVariable(10, 20);





//.FILTER con ARROW

var listaNumeros = [1, 15, , 80, 74, 13, 65, 75, 20, 90];

var listaNumerosNueva = listaNumeros.filter((numero) => numero > 50);
console.log(listaNumerosNueva);


console.log("==============REST Operator ====");

function imprime(...parametros) {

    parametros.forEach(elemento => {
        console.log(elemento)
    })


}

imprime("Hola mundo",  "jose ", "lucas ");




var etiquetaCount = document.getElementById("count");
var etiquetaCountMin = document.getElementById("countMin");

var counter = 0;
var counterMin = 0;

setInterval(() => {
    counter++;

    if (counter == 60) {
        counter = 0;
        counterMin++;
    }
    etiquetaCount.textContent = counter;
    etiquetaCountMin.textContent = counterMin;

}, 1000)


console.log("---------------------------promise/promesa")




fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('No se pudo obtener la información del Pokémon.');
        }
    })
    .then(data => {
        console.log("data", data)
        // Puedes mostrar más datos según tus necesidades
    })
    .catch(error => {
        console.error(error);
    });