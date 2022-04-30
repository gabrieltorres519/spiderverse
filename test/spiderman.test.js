/*Requerimiento

Crea una clase spiderman que tenga como atributos los siguientes campos: nombre, edad, actor que lo interpretó, 
número de películas en las que apareció, estudio de cine.
*/ 

const Spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {

        // Aquí se escribe el código que se quere usar

        //Instanciamos un objeto spiderman con la información del requerimiento 
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony");


      //Validamos que el código funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sonyyyyyyyyyyyy");
      
    });
  })