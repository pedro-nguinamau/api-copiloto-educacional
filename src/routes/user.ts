import { Type } from "../types"
import z, { never } from 'zod'
import { PrismaClient } from "@prisma/client"
import { request } from "http";


const prisma = new PrismaClient()

export async function userRoutes(app: Type) {
  app.post('/user', {
    schema: {
      body: z.object({
        nomeCompleto: z.string(),
        email: z.string().email(),
        password: z.string(),
        classeId: z.number(),
        cursoId: z.number()
      })
    }

  }, async (request, reply) => {
    const { nomeCompleto, email, password, classeId, cursoId } = request.body
    
    const user = await prisma.aluno.create({
      data: {
        nomeCompleto: nomeCompleto,
        email: email,
        password: password,
        classeId: classeId,
        cursoId: cursoId
      }
    }) 

    return user
  });
  app.post('/', {
    schema : {
      body: z.object({
        email: z.string().email(),
        password: z.string(),
      })
    }
  } , async (request, reply) => {
    const { email, password } = request.body
    const userLogin = await prisma.aluno.findUnique({
      where: {
        email: email,
        password: password
      }
    })
    if(!userLogin){
      return reply.status(400).send({message: 'Aluno não encontrado'})
    }
    return reply.status(200).send(userLogin)

  })
  
  app.get('/user/:id', {
    schema: {
      params: z.object({
        id: z.coerce.number(),
      })
    }
  },async (request, reply) => {
    const  { id }  =  request.params
    
    const data = await prisma.aluno.findMany(
      {
        where: {
        id
        },
        include: {
          curso: true,
          classe: true, 
        },
        
      }
    )
    const aluno = data[0]
    const cursoaluno = aluno.curso?.nomeCurso
    const classeAluno = aluno.classe?.rotulo
    const idclasse = aluno.classe?.id
    const idcurso = aluno.curso?.id

    const disciplinas = await prisma.disciplina.findMany({
      where: {
        cursoId: idcurso, classeId: idclasse
       }
    });  
    const nomesDisciplinas = disciplinas.map((disciplina) => disciplina.nome);
    return {
      nome: aluno.nomeCompleto,
      classe: classeAluno,
      curso: cursoaluno,
      disciplina: nomesDisciplinas
    }

    
  })

}
