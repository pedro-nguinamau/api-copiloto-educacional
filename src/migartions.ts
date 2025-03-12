import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function classecurso() {
await prisma.classe.createMany({
        data: [
      { numeroClasse: 1 , rotulo: '10ª Classe'}, // Primeiro ano do ensino médio
      { numeroClasse: 2 , rotulo: '11ª Classe'}, // Segundo ano do ensino médio
      { numeroClasse: 3 , rotulo: '12ª Classe'}, // Terceiro ano do ensino médio
    ],
  });
await prisma.curso.createMany({
    data: [
      { nomeCurso: "Informática de Gestão" },
      { nomeCurso: "Contabilidade e Gestão" },
      { nomeCurso: "Gestão de Recursos Humanos" },
      { nomeCurso: "Técnico de Finanças" },
    ],
  });

  console.log('Cursos criados com sucesso!');
  console.log('Classes criadas com sucesso!');
};

export default async function Disciplinas() {
  await prisma.disciplina.createMany({
    data: [
      { nome: 'Técnicas de Linguagem de Programação', classeId: 1, cursoId: 1},
      { nome: 'Organização e Administração de Empresas', classeId: 1, cursoId: 1},
      { nome: 'Técnologia de Informação e Comunicação', classeId: 1, cursoId: 1},
      { nome: 'Matemática', classeId: 1, cursoId: 1},
      { nome: 'Base de Dados', classeId: 1, cursoId: 1},
      { nome: 'Educação Física', classeId: 1, cursoId: 1},
      { nome: 'Lingua Inglesa', classeId: 1, cursoId: 1},
      { nome: 'Língua Portuguesa', classeId: 1, cursoId: 1},
      { nome: 'Formação de Atitudes Integradoras', classeId: 1, cursoId: 1},
    ]
  })
  console.log('Disciplinas criadas com sucesso!');
} 