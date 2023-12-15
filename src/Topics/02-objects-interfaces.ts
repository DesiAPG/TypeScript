//#region INTERFACES

interface IPerson {
  name: string;
  surname: string;
  age: number;
}

interface IStudent extends IPerson {
  career: string;
  university: string;
}

//#endregion

//#region OBJECTS

const character: IPerson = {
  name: "Duvan",
  surname: "Marin",
  age: 22,
};
console.log(character);

const student: IStudent = {
  name: "Duvan",
  surname: "Marin",
  age: 22,
  career: "Ingeniería de sistemas",
  university: "Universidad Cooperativa de Colombia",
};
console.log(student);
//#endregion
export {};
