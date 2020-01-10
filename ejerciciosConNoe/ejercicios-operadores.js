
/*-----------------------------  EJERCICIOS -------------------------------------------------------------
Objetos
*/

let user = {
	firstName: "Liliana",
	lastName: "Belliski",
	email: "belliski@gmail.com",
	age: 999
}
console.log(`Resultado: Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`);

let usuarioUno = {
	id: 1,
	nombre: "ada@gmail.com",
	email: "Ada Lovelace",
	telefono: "1234567890"
}

let usuarioDos = {
	id: 2,
	nombre: "grace@hotmail.com",
	email: "Grace Hopper",
	telefono: "0987654321"
}

let usuarioTres = {
	id: 3,
	nombre: "hedy@gmail.com",
	email: "Hedy Lamarr",
	telefono: "6789054321"
}

let usuarioCuatro = {
	id: 4,
	nombre: "radia@yahoo.com",
	email: "Radia Perlman",
	telefono: "1234509876"
}

let usuarioCinco = {
	id: 5,
	nombre: "sheryl@facebook.com",
	email: "Sheryl Sandberg",
	telefono: "5432167890"
}

console.log(`${usuarioUno.id},${usuarioUno.email},${usuarioUno.nombre}, ${usuarioUno.telefono}`);
console.log(`${usuarioDos.id},${usuarioDos.email},${usuarioDos.nombre}, ${usuarioDos.telefono}`);
console.log(`${usuarioTres.id},${usuarioTres.email},${usuarioTres.nombre}, ${usuarioTres.telefono}`);
console.log(`${usuarioCuatro.id},${usuarioCuatro.email},${usuarioCuatro.nombre}, ${usuarioCuatro.telefono}`);
console.log(`${usuarioCinco.id},${usuarioCinco.email},${usuarioCinco.nombre}, ${usuarioCinco.telefono}`);


console.log(usuarioUno.nombre);
console.log(usuarioDos.id);
console.log(usuarioTres.nombre);
console.log(usuarioCuatro.id, usuarioCuatro.nombre);
console.log(usuarioTres.telefono);

const disco = {
	id: 1,
	nombre: 'Wasting Light',
	anioLanzamiento: 2011,
	cantidadDeTemas: 12,
	banda: {
		nombre: 'Foo Fighters',
		anioFormacion: 1994
	}
};
console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`);


let tecnologiasConocidas = ["html5", "CSS3", "SASS", "JavaScript", "ETC"];
user.sabeProgramar = true;
user.tecnologiasConocidas = tecnologiasConocidas;
console.log(user);


const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) => {
	if (sabeProgramar) {
		console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
	}
};

mostrarTecnologias(user.sabeProgramar, user.tecnologiasConocidas);


tecnologiasConocidas.push("proximamente DOM");
mostrarTecnologias(user.sabeProgramar, user.tecnologiasConocidas);


const newUser = {
	name: {
		first: user.firstName,
		last: user.lastName,
	},
	email: user.email,
	age: user.age,
	sabeProgramar: user.sabeProgramar,
	tecnologiasConocidas: user.tecnologiasConocidas
}

console.log(newUser);

const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

const mostrarGanadoras = (ganadorasRuPaul) => {

	for (let i = 0; i < ganadorasRuPaul.length; i++) {
		console.log(`${ganadorasRuPaul[i].nombre} ganó la temporada ${ganadorasRuPaul[i].temporada}`);
	}
}

mostrarGanadoras(ganadoras);


const nevermind = [
	{ id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
	{ id: 2, nombre: "In Bloom", duracion: 255 },
	{ id: 3, nombre: "Come As You Are", duracion: 219 },
	{ id: 4, nombre: "Breed", duracion: 184 },
	{ id: 5, nombre: "Lithium", duracion: 257 }
];

let calcularDuracionTotal = 0;
let calcularPromedioPorCancion = 0;
let totalCanciones = nevermind.length;

for (let i = 0; i < nevermind.length; i++) {
	calcularDuracionTotal += nevermind[i].duracion;
}

calcularPromedioPorCancion = calcularDuracionTotal / totalCanciones;

console.log(calcularDuracionTotal);
console.log(calcularPromedioPorCancion);


const bandas = [
	{ id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
	{ id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
	{ id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
	{ id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
	{ id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const mostrarBandas = (arrayBandas) => {

	for (let i = 0; i < arrayBandas.length; i++) {
		if (arrayBandas[i].activa) {
			console.log(`${arrayBandas[i].nombre} está activa desde el año ${arrayBandas[i].fundacion}`);
		} else {
			console.log(`${arrayBandas[i].nombre} no está activa`);
		}
	}

}

mostrarBandas(bandas);
