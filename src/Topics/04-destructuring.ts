//#region Destructuring

interface ICustomer {
  name: string;
  surname: string;
  email: string;
  address: {
    description: string;
    city: string;
    country: string;
  };
}

const customer: ICustomer = {
  name: "Duvan",
  surname: "Marin",
  email: "desire@gmail.com",
  address: {
    description: "Av. 56",
    city: "Bogotá",
    country: "Colombia",
  },
};

const { 
  name, 
  surname, 
  email, 
  address
 } = customer;

console.log("Nombres: ", name);

export {};

//#region
