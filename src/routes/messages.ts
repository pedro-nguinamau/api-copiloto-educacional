
import { Type } from "../types";
import z from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function MessagesRoutes(app: Type) {

    app.post('/messages', 
  {
    schema: {
        body: z.object({
            chatId: z.coerce.number(),
            role: z.string(),
            conteudo: z.string(),
            nomeDisciplina: z.string()    
        })
}
  }
    
    , async (request, reply) => {

        const { 
            chatId,
            role,
            conteudo,
            nomeDisciplina
         } = request.body
       const menssagens = await prisma.mensagem.create({
        data: {
            chatId,
            role,
            conteudo,
        }
       })
      return  menssagens

       
});



    app.get('/messages/:chatId', 
        {
            schema: {
                params: z.object({
                    chatId: z.coerce.number()

                })
            }
        }
    ,async (req, reply) => {
        const { chatId } = req.params

        const messages = await prisma.mensagem.findMany({
            where: {
                chatId: chatId
            }
        })
       

         const fil = messages.map((d) => ({
            r: d.role,
            t: d.conteudo
         }))
        return fil

    })
    
}