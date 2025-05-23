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
      // { nome: 'Técnicas de Linguagem de Programação', classeId: 1, cursoId: 1},
      // { nome: 'Organização e Administração de Empresas', classeId: 1, cursoId: 1},
      // { nome: 'Técnologia de Informação e Comunicação', classeId: 1, cursoId: 1},
      // { nome: 'Matemática', classeId: 1, cursoId: 1},
      // { nome: 'Base de Dados', classeId: 1, cursoId: 1},
      // { nome: 'Educação Física', classeId: 1, cursoId: 1},
      // { nome: 'Lingua Inglesa', classeId: 1, cursoId: 1},
      // { nome: 'Língua Portuguesa', classeId: 1, cursoId: 1},
        // { nome: 'Formação de Atitudes Integradoras', classeId: 1, cursoId: 1},


      { nome: 'Técnicas de Linguagem de Programação', classeId: 2, cursoId: 1},
      { nome: 'Organização e Administração de Empresas', classeId: 2, cursoId: 1},
      { nome: 'Técnologia de Informação e Comunicação', classeId: 2, cursoId: 1},
      { nome: 'Matemática', classeId: 2, cursoId: 1},
      { nome: 'Base de Dados', classeId: 2, cursoId: 1},
      { nome: 'Educação Física', classeId: 2, cursoId: 1},
      { nome: 'Lingua Inglesa', classeId: 2, cursoId: 1},
      { nome: 'Língua Portuguesa', classeId: 2, cursoId: 1},
      { nome: 'Formação de Atitudes Integradoras', classeId: 2, cursoId: 1},
    ]
  })
  console.log('Disciplinas criadas com sucesso!');
}

export async function Contabilidade() {
  await prisma.disciplina.createMany({
    data:[
      
      { nome: 'Língua Portuguesa', classeId: 1, cursoId: 2 },
      { nome: 'Matemática', classeId: 1, cursoId: 2 },
      { nome: 'Documentação e Legislação Comercial (DLC)', classeId: 1, cursoId: 2 },
      { nome: 'Formação de Atitudes Integradoras (FAI)', classeId: 1, cursoId: 2 },
      { nome: 'Língua Inglesa', classeId: 1, cursoId: 2 },
      { nome: 'Economia', classeId: 1, cursoId: 2 },
      { nome: 'Educação Física', classeId: 1, cursoId: 2 },
      { nome: 'Contabilidade Financeira', classeId: 1, cursoId: 2 },

      // 11ª Classe
      { nome: 'Língua Portuguesa', classeId: 2, cursoId: 2 },
      { nome: 'Matemática', classeId: 2, cursoId: 2 },
      { nome: 'Língua Inglesa', classeId: 2, cursoId: 2 },
      { nome: 'Educação Física', classeId: 2, cursoId: 2 },
      { nome: 'Sociologia', classeId: 2, cursoId: 2 },
      { nome: 'Direito', classeId: 2, cursoId: 2 },
      { nome: 'Contabilidade Financeira', classeId: 2, cursoId: 2 },
      { nome: 'Organização e Gestão Empresarial (OGE)', classeId: 2, cursoId: 2 },

      // 12ª Classe
      { nome: 'Documentação e Legislação Fiscal', classeId: 3, cursoId: 2 },
      { nome: 'Gestão Orçamental', classeId: 3, cursoId: 2 },
      { nome: 'Organização e Gestão Empresarial (OGE)', classeId: 3, cursoId: 2 },
      { nome: 'Contabilidade Analítica', classeId: 3, cursoId: 2 },
      { nome: 'Análise Económica e Financeira', classeId: 3, cursoId: 2 },
      { nome: 'Cálculo Financeiro e Estatística', classeId: 3, cursoId: 2 },
      { nome: 'Língua Portuguesa', classeId: 3, cursoId: 2 },
      { nome: 'Matemática', classeId: 3, cursoId: 2 }

    ] 
  })

  console.log('Sucess')
}

export async function RH() {
  await prisma.disciplina.createMany({
    data: [
      { nome: 'Língua Portuguesa', classeId: 1, cursoId: 2 },
      { nome: 'Matemática', classeId: 1, cursoId: 3 },
      { nome: 'Língua Inglesa', classeId: 1, cursoId: 3 },
      { nome: 'Educação Física', classeId: 1, cursoId: 3 },
      { nome: ' Sociologia', classeId: 1, cursoId: 3 },
      { nome: 'Empreendedorismo', classeId: 1, cursoId: 3 },
      { nome: 'Informática de Gestão', classeId: 1, cursoId: 3 },
      { nome: 'Formação e Desenvolvimento de Pessoas', classeId: 1, cursoId: 3 },
      { nome: 'Teoria da Administração de trabalho', classeId: 1, cursoId: 3 },
      { nome: 'Sistema de comunicação e informação em Recursos Humanos', classeId: 1, cursoId: 3 },

      // 11 classe

      { nome: 'Língua Portuguesa', classeId: 2, cursoId: 2 },
      { nome: 'Matemática', classeId: 2, cursoId: 3 },
      { nome: 'Língua Inglesa', classeId: 2, cursoId: 3 },
      { nome: 'Educação Física', classeId: 2, cursoId: 3 },
      { nome: 'Direito e Legislação social do trabalho', classeId: 2, cursoId: 3 },
      { nome: 'Empreendedorismo', classeId: 2, cursoId: 3 },
      { nome: 'Informática de Gestão', classeId: 2, cursoId: 3 },
      { nome: 'Formação e Desenvolvimento de Pessoas', classeId: 2, cursoId: 3 },
      { nome: 'Teoria da Administração de trabalho', classeId: 2, cursoId: 3 },
      { nome: 'Sistema de comunicação e informação em Recursos Humanos', classeId: 2, cursoId: 3 },
    ]
  })

  console.log('Sucess RH')
}
