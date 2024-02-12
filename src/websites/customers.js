class Customer{

    constructor(id, name){

    }

    customerId;
    name;
}

const customers = []

function createCustomerObject() {
    const customerObj = {
        "customerId": "",
        "name": "",
    }

    return customerObj;
}

export function getCustomers() {

    return customers;

}

export function createCustomer(id, name) {

    const customer = createCustomerObject();
    customer.name = name;
    customer.customerId = id;
    customers.push(customer);
    // customers.push(new Customer(id, name))

}

export function readCustomer(id) {


    if(validateCustomerId(id))
    {
        const result = customers.find((element) => element.customerId === id)
        return result;
    }
    return null;
}

export function deleteCustomer(id) {
    return customers.splice(id, 1);
}

function validateCustomerId(customerId) {

    console.log(customerId)

    const pattern = /ETUR-CN-\w+/;
    const isValid = pattern.test(customerId);

    if(!isValid)
    {
        return false;
    }


    for(const item of customers){
        if(item.customerId === customerId);
        {
            return true;
        }
    }

    return false;
}