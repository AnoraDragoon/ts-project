import { people, printPeopleList } from "./data.js";

const main = (): void => {
  console.log("Bienvenido al proyecto TypeScript!");
  // Aquí puedes llamar a otras funciones o realizar operaciones adicionales
  // Por ejemplo, puedes imprimir la lista de personas
  printPeopleList(people);
  console.log("La ejecución del programa ha finalizado.");

};

main();
