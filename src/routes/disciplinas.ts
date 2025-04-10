import { Type } from "../types"
import z, { Schema, never } from 'zod'
import { PrismaClient } from "@prisma/client"
import { request } from "http";
const prisma = new PrismaClient()

export async function  DisciplinasRoutes(app:Type) {
    app.get('/disciplinas/:id', 
    {
        schema: 
        {
            params: z.object({
                id: z.coerce.number()
            })
        }
    },
        async (request, reply) => {
            const { id } = await request.params
            const disciplina = await prisma.disciplina.findFirst({
                where: { 
                    id
                }
            })
            reply.send(disciplina?.nome)
        }
    )
    
}