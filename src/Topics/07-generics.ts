import { ICustomer } from "./utils/customer-util";

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d"];

const getFirstItem = <T>(array: T[]) => {
  return array[0];
};

console.log(getFirstItem(arr1));
console.log(getFirstItem(arr2));

interface IResponse<T> {
  code: string;
  message: string;
  data: T;
}

const cuscomer: ICustomer = {
  name: "Duvan",
  surname: "Marin",
  email: "duvan@gmail.com",
  address: {
    description: "AV. 53",
    city: "Bogotá",
    country: "Colombia",
  },
};

const responseObject: IResponse<ICustomer> = {
  code: "string",
  message: "string",
  data: cuscomer,
};

console.log(responseObject);
