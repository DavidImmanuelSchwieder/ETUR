import { getCustomers, createCustomer, readCustomer, deleteCustomer } from "./customers.js";

const random = Math.round(Math.random())

createCustomer("ETUR-CN-34623", "Thomas");
createCustomer("ETUR-CN-32143", "Carlos");
console.log(readCustomer("ETUR-CN-32143"));
// console.log("Delete: {0}",deleteCustomer(random));
// console.log("Get: {0}",getCustomers());

