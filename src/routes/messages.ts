
import { Type } from "../types";
import z, { string } from "zod";
import { PrismaClient } from "@prisma/client";
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: process.env.API_SECRETE,
})



import {
  GoogleGenAI,
} from '@google/genai';



const prisma = new PrismaClient()

export async function MessagesRoutes(app: Type) {


app.post('/messages', {
    schema: {
        body: z.object({
            chatId: z.coerce.number(),
            role: z.string(),
            conteudo: z.string(),
            nomeDisciplina: z.string()    
        })
    }
}, async (request, reply) => {
    const { 
        chatId,
        role,
        conteudo,
        nomeDisciplina
    } = request.body;

    // 1. Salvar a mensagem do usuário no banco de dados
    const userMessage = await prisma.mensagem.create({
        data: {
            chatId,
            role,
            conteudo,
        }
    });
    try {
      
    const response = await client.responses.create({
      model: "gpt-4.1-2025-04-14",
      max_output_tokens: 700,
      temperature: 0.4,
      input: [
          {
              role: "system",
              content:  `És um professor do ensino médio da disciplina de ${nomeDisciplina} iras actuar como um assistente virtual para os alunos do sistema educativo angolano, regulado pela **Lei de Bases do Sistema de Educação e Ensino (Lei n.º 17/16, de 7 de outubro).
              Responda sempre usando a notação LaTeX entre $$ (dois cifrões) para expressões matemáticas em bloco e entre $ (um cifrão) para expressões inline.
              Exemplo: $E=mc^2$ para inline e $$\\frac{x}{y}$$ para bloco. Evite espaços extras entre os cifrões 
              Nunca use tags HTML como <sup>, <sub>, ou outras formas para indicar expoentes ou frações.
              Se a pergunta estiver fora do contexto da disciplina ${nomeDisciplina}, responda educadamente: "Estamos aqui para estudar ${nomeDisciplina}".
             .`         
          },
          {
              role: "user",
              content: conteudo,
          },
      ],
  });

  // 3. Obter a resposta do assistente ou retornar um erro genérico
  const conteudoAssistent = response.output_text || "Desculpe, houve um erro ao processar a sua mensagem. Por favor, tente novamente mais tarde.";

  // 4. Salvar a resposta do assistente no banco de dados
  const assistantMessage = await prisma.mensagem.create({
      data: {
          chatId,
          role: 'assistent',
          conteudo: conteudoAssistent,
      }
  });

  // 5. Retornar as duas mensagens para o frontend
  return reply.status(200).send({
      message: 'Mensagens salvas com sucesso!',
      data: {
          userMessage: conteudo,
          assistantMessage: conteudoAssistent,
      }
  });

} catch (error) {
  // Caso algum erro ocorra no processo, enviar uma mensagem de erro
  const errorMessage = `Ola, eu sou o professor de ${nomeDisciplina}. Não tarda estarei disponivel`;

  // Salvar mensagem de erro no banco de dados
  await prisma.mensagem.create({
      data: {
          chatId,
          role: 'assistent',
          conteudo: errorMessage,
      }
  });

  return reply.status(500).send({
      message: errorMessage,
  });
}
 

    

  
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
            },
            orderBy: {
                id: 'asc' // Garante ordem cronológica
              }
        })
       

         const fil = messages.map((d) => ({
            r: d.role,
            t: d.conteudo
         }))
         return reply.status(200).send({
            status: 'success',
            data: fil,
          });
    

    })
    
}



