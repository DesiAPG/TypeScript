class Person {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  walk(): void {
    console.log(`${this.name} is walking`);
  }

  talk(): void {
    console.log(`${this.name} is talking`);
  }
}

const juan = new Person("Duvan", "Marin");
console.log(juan);

class Astronaut extends Person {
  masterDegrees: number;
  constructor(name: string, surname: string, masterDegrees: number) {
    super(name, surname);
    this.masterDegrees = masterDegrees;
  }
}

const astronaut = new Astronaut("Duvan", "Marin", 14);
console.log(astronaut);
