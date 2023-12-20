export interface ICustomer {
  name: string;
  surname: string;
  email: string;
  address: {
    description: string;
    city: string;
    country: string;
  };
}

export const showCustomerData = (customer: ICustomer) => {
  const {
    name,
    surname,
    email,
    address: { description, city, country },
  } = customer;

  console.log("Nombres: ", name);
  console.log("Apellidos: ", surname);
  console.log("Email: ", email);
  console.log("---DIRECCIÓN---");
  console.log("Direccion: ", description);
  console.log("Ciudad: ", city);
  console.log("País: ", country);
};
