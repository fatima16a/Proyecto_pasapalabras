let contador = 0;
let pascount = 0;
let palabrasRestantes = 25;
let palabrasPasadas = []
const rosco = document.getElementById("rosco");
let palabras = [
    {

        letra: "A",
        descr: "La necesitamos cuando tenemos que esperar un determinado suceso que demora en ejecutarse, y se necesita para acceder a una api.",
        palabra: "Asincronia",
        contiene: false,
        empieza: true,
        passed: false,
        posicion: 0
    },
    {
        letra: "B",
        descr: "Se encarga de que toda la lógica de una página web funcione, es el desarrollo del elemento web que no vemos.",
        palabra: "Backend",
        contiene: false,
        empieza: true,
        posicion: 1
    },
    {
        letra: "C",
        descr: "Indica elementos de una entidad, pueden asociarse a elementos de la otra entidad relacionada.",
        palabra: "Cardinalidad",
        contiene: false,
        empieza: true,
        posicion: 2
    },
    {
        letra: "D",
        descr: "Contiene todas o una parte de las tablas presentes en la base de datos.",
        palabra: "Diagrama",
        contiene: false,
        empieza: true,
        posicion: 3

    },
    {
        letra: "E",
        descr: "Tiene atributos y relaciones, corresponde a una o varias tablas relacionadas en la base de datos.",
        palabra: "Entidad",
        contiene: false,
        empieza: true,
        posicion: 4
    },
    {
        letra: "F",
        descr: "Identifica una columna o un grupo de columnas en una tabla que se refiere a las columnas en otra tabla.",
        palabra: "Foreign Key",
        contiene: false,
        empieza: true,
        posicion: 5
    },
    {
        letra: "G",
        descr: "Página para alojar proyectos, se utiliza principalmente para la creación de código fuente de programas de ordenador.",
        palabra: "Github",
        contiene: false,
        empieza: true,
        posicion: 6
    },
    {
        letra: "H",
        descr: "Cuando las entidades hijos, se les transmite los atributos de la entidad padre.",
        palabra: "Herencia",
        contiene: false,
        empieza: true,
        posicion: 7
    },
    {
        letra: "I",
        descr: "Es  generalmente un directorio en un orden específico que se utiliza con fines de orientación. Es el listado de páginas web que es emitido por el motor de búsqueda en respuesta a una solicitud de búsqueda del usuario.",
        palabra: "Index",
        contiene: false,
        comienza: true,
        posicion: 8
    },
    {
        letra: "J",
        descr: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,  basado en prototipos, imperativo, débilmente tipado y dinámico.",
        palabra: "JavaScript",
        contiene: false,
        comienza: true,
        posicion: 9
    },
    {
        letra: "L",
        descr: "Pensamiento que va hacer el programa",
        palabra: "Logica",
        contiene: false,
        comienza: true,
        posicion: 10
    },
    {
        letra: "M",
        descr: "Se encarga de arreglar el tipo de datos de columna y arreglar  restricciones de columna",
        palabra: "Modify",
        contiene: false,
        comienza: true,
        posicion: 11
    },
    {
        letra: "N",
        descr: "Es el proceso de elaborar, aplicar y mejorar las normas que se emplean en distintas actividades, con el fin de ordenarlas y mejorarlas.",
        palabra: "Normalizacion",
        contiene: false,
        comienza: true,
        posicion: 12
    },
    {
        letra: "Ñ",
        descr: "Área enfocada en el desarrollo de interfaces digitales, como el boceto  de sitios y aplicaciones para web",
        palabra: "Diseño Web",
        contiene: true,
        comienza: false,
        posicion: 13
    },
    {
        letra: "O",
        descr: "Es un número en base 8 que especifique el permiso. Los números en este modo se especifican empezando el número por un 0.",
        palabra: "Octal",
        contiene: false,
        comienza: true,
        posicion: 14
    },
    {
        letra: "P",
        descr: "Es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, en la actualidad, la noción de esta se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos.",
        palabra: "Programacion",
        contiene: false,
        comienza: true, 
        posicion: 15

    },
    {
        letra: "Q",
        descr: "Término que el usuario escribe en un buscador, como por ejemplo Google, cuando desea realizar una búsqueda utilizando Keywords o palabras clave.",
        palabra: "Query",
        contiene: false,
        comienza: true,
        posicion: 16
    },
    {
        letra: "R",
        descr: "Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
        palabra: "React",
        contiene: false,
        comienza: true,
        posicion: 17
    },
    {
        letra: "S",
        descr: "Es una etiqueta que permite definir una hoja de estilos interna en un documento",
        palabra: "Syle",
        contiene: false,
        comienza: true,
        posicion: 18
    },
    {
        letra: "T",
        descr: "Conjunto de elementos o partes que forman un todo.",
        palabra: "Totalidad",
        contiene: false,
        comienza: true,
        posicion: 19
    },
    {
        letra: "U",
        descr: "Es un lenguaje visual para especificar, construir y documentar los artefactos de los sistemas.",
        palabra: "UML",
        contiene: false,
        comienza: true,
        posicion: 20
    },
    {
        letra: "V",
        descr: "Es un editor de código fuente, Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código",
        palabra: "Visual Studio Code",
        contiene: false,
        comienza: true,
        posicion: 21
    },
    {
        letra: "X",
        descr: " Consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl",
        palabra: "Xampp",
        contiene: false,
        comienza: true,
        posicion: 22
    },
    {
        letra: "Y",
        descr: "La teoría que triunfó durante parte del siglo XX con su defensa de la intervención del Estado en la economía. ",
        palabra: "Keynesianismo",
        contiene: true,
        comienza: false,
        posicion: 23
    },
    {
        letra: "Z",
        descr: "Indica el orden de un elemento posicionado y sus descendientes. Cuando varios elementos se superponen, los elementos con mayor valor, cubren aquellos con menor valor.",
        palabra: "Z index",
        contiene: false,
        comienza: true,
        posicion: 24
    }
];

function counter() {
    contador = palabras[pascount].posicion
}
counter();

("respuestaUs").toLocaleLowerCase

function verificarPalabra() {
    counter()
    let resUser = document.getElementById("respuestaUs").value;
    if (resUser == palabras[contador].palabra) {
        rosco.children[contador].classList.add("verde");
    } else {
        rosco.children[contador].classList.add("rojo");
    }
    contador++;
    pascount++;
}

function pasapalabra() {
    counter()
    rosco.children[contador].classList.add("amarillo");
    palabrasPasadas.push(palabras[contador].letra)
    contador++;
    pascount++;
}

function segundaVuelta() {
    let palabras2 = []
    for (i=0; i < palabras.length; i++) {
    let palab = palabras.find(pal => pal.letra === palabrasPasadas[i])
    if (palab != undefined) {
        palabras2.push(palab);
    }
}
palabras = palabras2
contador = 0
definicion()
}


function definicion() {
    document.getElementById("texto").innerHTML = `${palabras[contador].descr}`;
    console.log('hola')
}
    function temporizador(id, inicio, final) {
        this.id = id;
        this.inicio = inicio;
        this.final = final;
        this.contadorT = this.inicio;
    this.conteoSegundos = function (){
            if (this.contadorT == this.final) {
                document.getElementById(this.id).innerHTML = 0;
                this.conteoSegundos = null;
                return;
            };
            document.getElementById(this.id).innerHTML = this.contadorT--;
            setTimeout(this.conteoSegundos.bind(this), 1000);
        };
    };
definicion();


function mandarRespuesta() {
    verificarPalabra()
    seguirJugando()
    counter()
}
function mandarPasapalabra() {
    pasapalabra()
    counter()
    seguirJugando()
}
function seguirJugando() {
    if (palabrasRestantes != 0) {
        definicion()
    }
    
}
let temp = new temporizador('caja4', 120, 0);
temp.conteoSegundos();
