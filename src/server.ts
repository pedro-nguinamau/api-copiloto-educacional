import fastify from "fastify";
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod";
import { userRoutes } from "./routes/user";
import { ChatRoutes } from "./routes/chat";
import cors from '@fastify/cors'
import { MessagesRoutes } from "./routes/messages";
const server = fastify()


server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)


server.register(userRoutes)
server.register(ChatRoutes)
server.register(MessagesRoutes)
server.register(cors, {
   origin: '*',})

   server.get('/', (request, reply) => {
    reply.send('Consumindo-Api-com-Typescript-e-Fastify')
})

server.listen({port: 3333}, async (err, adress) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server listen in this ${adress}`)
})  
