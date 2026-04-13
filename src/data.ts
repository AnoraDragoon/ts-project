interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

export const people: Person[] = [
  { id: 1, firstName: "Carlos", lastName: "García", age: 30, email: "carlos.garcia@example.com" },
  { id: 2, firstName: "María", lastName: "López", age: 25, email: "maria.lopez@example.com" },
  { id: 3, firstName: "Juan", lastName: "Martínez", age: 40, email: "juan.martinez@example.com" },
  { id: 4, firstName: "Ana", lastName: "Rodríguez", age: 35, email: "ana.rodriguez@example.com" },
  { id: 5, firstName: "Luis", lastName: "Hernández", age: 28, email: "luis.hernandez@example.com" },
];

const formatFullName = (person: Person): string =>
  `${person.firstName} ${person.lastName}`;

export const printPeopleList = (personList: Person[]): void => {
  console.log("=== Lista de Personas ===\n");

  personList.forEach((person) => {
    console.log(
      `ID: ${person.id} | Nombre: ${formatFullName(person)} | Edad: ${person.age} | Email: ${person.email}`
    );
  });

  console.log("\n--- Vista en tabla ---\n");
  console.table(
    personList.map(({ id, firstName, lastName, age, email }) => ({
      ID: id,
      Nombre: `${firstName} ${lastName}`,
      Edad: age,
      Email: email,
    }))
  );

  console.log(`\nTotal de personas: ${personList.length}`);
};

// printPeopleList(people);
