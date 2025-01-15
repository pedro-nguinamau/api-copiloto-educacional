import fastify from "fastify";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";

const server = fastify()


server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.listen({port: 3333}, (err, adress) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server listen in ${adress}`)
})  