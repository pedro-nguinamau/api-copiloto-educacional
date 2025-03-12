import fastify from "fastify";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";
import { userRoutes } from "./routes/user";
import cors from '@fastify/cors'

const server = fastify()


server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)


server.register(userRoutes)
server.register(cors, {
   origin: '*',})


server.listen({port: 3333}, async (err, adress) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server listen in this ${adress}`)
})  
