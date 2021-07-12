//declaramos las variables

//let car = "Fiat";

const carro = {
	marca:"Fiat",
	modelo:"500",
	color:"blanco"
}

console.log(carro);

/*const persona = {
	nombre:"Edwar",
	apellido:"Vilchez",
	edad:43,
	colorOjos:"Marrones",
	profesion:"Ingeniero en Informatica",
	fullName: function(){
		return this.nombre + " " + this.apellido;
	}
}*/

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/*console.log(persona.nombre, 
			persona.apellido,
			carro
			);*/


console.log(person.fullName,
			person["firstName"]);

// JavaScript Object Notation (JSON)


nombre = person.fullName();

console.log(nombre);


