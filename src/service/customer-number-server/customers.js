import {Report} from '../report.js'

const index = 0;

const customerSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                description: { type: 'string', minLength: 1 },
                id: { type: 'string' },
            },
            required: ['name']
        }
    }
}
const customers = []
export function createCustomId() {

    let newId = "ETUR-CN-" + Math.floor(Math.random() * 100000)

    if(validateCustomerId(newId)){
        return newId;
    }
    createCustomId();
}

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


    if (validateCustomerId(id)) {
        const result = customers.find((element) => element.customerId === id)
        return result;
    }
    return null;
}

export function deleteCustomer(id) {
    for (let i = 0; 0 < customers.length; i++) {
        if (customers[i].customerId === id) {
            return customers.splice(id, 1);
        }
    }
    return null;
}

function validateCustomerId(customerId) {

    const pattern = /ETUR-CN-\w+/;
    const isValid = pattern.test(customerId);

    if (!isValid) {
        return false;
    }


    for (const item of customers) {
        if (item.customerId === customerId);
        {
            return true;
        }
    }

    return false;
}

export async function routes(fastify, options) {
    fastify.get('/customers', async (request, reply) => {
        const customers = getCustomers();
        return { customers }
    });
    fastify.get('/customers/:id', async (request, reply) => {
        const { id } = request.params;
        const customer = readCustomer(id);
        return { customer }
    });
    fastify.post('/customers', customerSchema, async (request, reply) => {
        const { name } = request.body
        const response = createCustomer(createCustomId(), name);
        return { response }
    });
    fastify.delete('/customers/:id', async (request, reply) => {
        const { id } = request.params;
        const response = deleteCustomer(id)
        if (response === null) {
            return "Couldn't find customer";
        }
        return { hello: 'The Customer got removed Successfully' }
    });
}

