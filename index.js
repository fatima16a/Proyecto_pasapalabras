let contador = 0;
const rosco = document.getElementById("rosco");
const palabras = [
    {
        letra: "A",
        descr: "La necesitamos cuando tenemos que esperar un determinado suceso que demora en ejecutarse, y se necesita para acceder a una api.",
        palabra: "Asincronía",
        contiene: false,
        empieza: true
    },
    {
        letra: "B",
        descr: "Se encarga de que toda la lógica de una página web funcione, es el desarrollo del elemento web que no vemos.",
        palabra: "Backend",
        contiene: false,
        empieza: true

    },
    {
        letra: "C",
        descr: "Indica elementos de una entidad, pueden asociarse a elementos de la otra entidad relacionada.",
        palabra: "Cardinalidad",
        contiene: false,
        empieza: true

    },
    {
        letra: "D",
        descr: "Contiene todas o una parte de las tablas presentes en la base de datos.",
        palabra: "Diagrama",
        contiene: false,
        empieza: true

    },
    {
        letra: "E",
        descr: "Tiene atributos y relaciones, corresponde a una o varias tablas relacionadas en la base de datos.",
        palabra: "Entidad",
        contiene: false,
        empieza: true
    },
    {
        letra: "F",
        descr: "Identifica una columna o un grupo de columnas en una tabla que se refiere a las columnas en otra tabla.",
        palabra: "Foreign Key",
        contiene: false,
        empieza: true
    },
    {
        letra: "G",
        descr: "Página para alojar proyectos, se utiliza principalmente para la creación de código fuente de programas de ordenador.",
        palabra: "Github",
        contiene: false,
        empieza: true
    },
    {
        letra: "H",
        descr: "Cuando las entidades hijos, se les transmite los atributos de la entidad padre.",
        palabra: "Herencia",
        contiene: false,
        empieza: true
    },
    {
        letra: "I",
        descr: "Es  generalmente un directorio en un orden específico que se utiliza con fines de orientación. Es el listado de páginas web que es emitido por el motor de búsqueda en respuesta a una solicitud de búsqueda del usuario.",
        palabra: "Index",
        contiene: false,
        comienza: true
    },
    {
        letra: "J",
        descr: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
        palabra: "JavaScript",
        contiene: false,
        comienza: true
    },
    {
        letra: "L",
        descr: "Pensamiento que va hacer el programa",
        palabra: "Logica",
        contiene: false,
        comienza: true
    },
    {
        letra: "M",
        descr: "Se encarga de arreglar el tipo de datos de columna y arreglar  restricciones de columna",
        palabra: "Modify",
        contiene: false,
        comienza: true
    },
    {
        letra: "N",
        descr: "Es el proceso de elaborar, aplicar y mejorar las normas que se emplean en distintas actividades, con el fin de ordenarlas y mejorarlas.",
        palabra: "Normalizacion",
        contiene: false,
        comienza: true
    },
    {
        letra: "Ñ",
        descr: "Área enfocada en el desarrollo de interfaces digitales, como el boceto  de sitios y aplicaciones para web",
        palabra: "Diseño Web",
        contiene: true,
        comienza: false
    },
    {
        letra: "O",
        descr: "Es un número en base 8 que especifique el permiso. Los números en este modo se especifican empezando el número por un 0.",
        palabra: "Octal",
        contiene: false,
        comienza: true
    },
    {
        letra: "P",
        descr: "Es el proceso utilizado para idear y ordenar las acciones necesarias para realizar un proyecto, en la actualidad, la noción de esta se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos.",
        palabra: "Programación",
        contiene: false,
        comienza: true
    },
    {
        letra: "Q",
        descr: "Término que el usuario escribe en un buscador, como por ejemplo Google, cuando desea realizar una búsqueda utilizando Keywords o palabras clave.",
        palabra: "Query",
        contiene: false,
        comienza: true
    },
    {
        letra: "R",
        descr: "Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
        palabra: "React",
        contiene: false,
        comienza: true
    },
    {
        letra: "S",
        descr: "Es una etiqueta que permite definir una hoja de estilos interna en un documento",
        palabra: "Syle",
        contiene: false,
        comienza: true
    },
    {
        letra: "T",
        descr: "Conjunto de elementos o partes que forman un todo.",
        palabra: "Totalidad",
        contiene: false,
        comienza: true
    },
    {
        letra: "U",
        descr: "Es un lenguaje visual para especificar, construir y documentar los artefactos de los sistemas.",
        palabra: "UML",
        contiene: false,
        comienza: true
    },
    {
        letra: "V",
        descr: "Es un editor de código fuente, Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código",
        palabra: "Visual Studio Code",
        contiene: false,
        comienza: true
    },
    {
        letra: "X",
        descr: " Consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl",
        palabra: "Xampp",
        contiene: false,
        comienza: true
    },
    {
        letra: "Y",
        descr: "La teoría que triunfó durante parte del siglo XX con su defensa de la intervención del Estado en la economía. ",
        palabra: "Keynesianismo",
        contiene: true,
        comienza: false
    },
    {
        letra: "Z",
        descr: "Indica el orden de un elemento posicionado y sus descendientes. Cuando varios elementos se superponen, los elementos con mayor valor, cubren aquellos con menor valor.",
        palabra: "Z index",
        contiene: false,
        comienza: true
    }
];
("respuestaUs").toLocaleLowerCase
function verificarPalabra() {
    let resUser = document.getElementById("respuestaUs").value;
    if (resUser == palabras[contador].palabra) {
        rosco.children[contador].classList.add("verde");
    } else {
        rosco.children[contador].classList.add("rojo");
    }
    SumContador();
}

function pasapalabra() {
    rosco.children[contador].classList.add("amarillo");
    contador++;
}

function SumContador() {
    if (contador != palabras.length - 1) {
        contador++;
        definicion();
    }
}

function definicion() {
    document.getElementById("texto").innerHTML = `${palabras[contador].descr}`;
}

definicion();
/*
function temporizador(id, inicio, final) {
    this.id = id;
    this.inicio = inicio;
    this.final = final;
    this.conadorT = this.inicio;
    this.conteoSegundos = function (){
        if (this.conadorT == this.final) {
            this.conteoSegundos = null;
            return;
        };
        document.getElementById(this.id).innerHTML = this.conadorT--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
    };
    whe
};
let temporizadorr = new temporizador('caja4', 1200, 0);
temporizadorr.conteoSegundos();*/
