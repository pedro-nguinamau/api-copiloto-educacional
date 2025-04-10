import { Type } from "../types"
import z, { never } from 'zod'
import { PrismaClient } from "@prisma/client"
import { request } from "http";
const prisma = new PrismaClient()

export async function ChatRoutes(app:Type) {
    app.post('/chat', {
        schema: {
            body: z.object({
                alunoId: z.number(),
                disciplinaId: z.number()
            })
        }
    }, async (request, reply) => {
        const { alunoId, disciplinaId} = request.body

        try {
            // Verifica se o chat já existe
            let chat = await prisma.chat.findFirst({
              where: { alunoId, disciplinaId }
            });
        
            // Se não existir, cria um novo
            if (!chat) {
              chat = await prisma.chat.create({
                data: {
                  alunoId,
                  disciplinaId,
                }
              });
            }
            return reply.send(chat); // Sempre retorna o chat correto
        } catch (error) {
          console.error(error);
          return reply.status(500).send({ error: "Erro ao buscar/criar o chat" });
        }

    })  
}

  