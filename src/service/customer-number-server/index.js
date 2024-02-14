import { getCustomers, createCustomer, readCustomer, deleteCustomer,createCustomId , routes } from "./customers.js";
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Report,createReport,getReports, routesReport } from "../report.js";

const fastify = Fastify({
  logger: true
})

fastify.register(cors, {
  origin: '*'
});

const start = async () => {
    try {
      await fastify.listen({port: 3000})
      fastify.log.info('server started on port: 3000')
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  }
start()

const random = Math.round(Math.random())

console.log(getReports());
createReport("90101","Feedback","ETUR-CN-32623","This Is a Description","Label","My self","Amerika")
createCustomer("ETUR-CN-34623", "Thomas");
createCustomer("ETUR-CN-32143", "Carlos");
console.log(createCustomId());
// console.log("Delete: {0}",deleteCustomer(random));
// console.log("Get: {0}",getCustomers());

fastify.register(routes);
fastify.register(routesReport)
