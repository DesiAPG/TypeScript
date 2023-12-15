//#region Numbers

console.log("******************");
console.log("******NUMBER******");
console.log("******************");

const age = 15;
const agetext = "23425";

console.log(parseInt(agetext));
console.log(parseFloat(agetext));

console.log(age);

export {};
//#endregion

//#region STRINGS

const name = "Duvan";
const surname = "marin";

const fullName = `String interpolation => ${name} ${surname}`;

console.log(fullName);
//#endregion

//#region DATE

const dateNow = new Date();
console.log(`La fecha actual es: ${dateNow.getFullYear()}`);

//#endregion

//#region ANY

let valueAny: any = "Hi";


//#endregion
