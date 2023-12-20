//#region ARRAY

const arr: string[] = ["hello", "hi", "array"];
console.log(arr);

interface IPet {
  name: string;
  age: number;
  species: string;
  isFemale: boolean;
  vaccines: string[];
}

const firulais: IPet = {
  name: "Firulais",
  age: 3,
  species: "Perro",
  isFemale: false,
  vaccines: ["Rabia"],
};

const kitty: IPet = {
  name: "Kitty",
  age: 5,
  species: "Gato",
  isFemale: true,
  vaccines: ["Rabia", "Distemper"],
};

const pets: IPet[] = [firulais, kitty];
console.log(pets);

const petsFemale = pets.filter((pet) => {
  return pet.isFemale;
});

console.log("Las mascotas hembra son: ", petsFemale);

//#endregion
export {};
