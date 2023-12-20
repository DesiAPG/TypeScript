import { ICustomer, showCustomerData } from "./utils/customer-util";

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

showCustomerData(customer);

export {};
