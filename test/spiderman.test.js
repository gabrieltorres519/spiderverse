/*Requerimiento 1

Crea una clase spiderman que tenga como atributos los siguientes campos: nombre, edad, actor que lo interpretó, 
número de películas en las que apareció, estudio de cine.
*/ 

const Spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {

        // Aquí se escribe el código que se quere usar

        //Instanciamos un objeto spiderman con la información del requerimiento 
      const andrewGarfield = new Spiderman("Andrew Garfield",31,"Spiderman Sony",2,"Sony");


      //Validamos que el código funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Andrew Garfield");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Spiderman Sony");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
      
    });
  })


  /*Requerimiento 2

Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.

Ejemplo:

tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"
*/ 


describe("2nd Unit test for Spiderman class",() =>{
    test("1) Use the method getInfo",() =>{
    
        //Uso del código necesario
        const tomHolland = new Spiderman("Tom Holland",25,"Spiderman Marvel",5,"Marvel")


        //Validando el comportamiento esperado
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
});