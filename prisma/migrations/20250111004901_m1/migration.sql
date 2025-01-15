-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "num_acess" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Classe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classe" INTEGER NOT NULL,
    "alunoClasseId" INTEGER NOT NULL,
    CONSTRAINT "Classe_alunoClasseId_fkey" FOREIGN KEY ("alunoClasseId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeCurso" TEXT NOT NULL,
    "alunoCursoId" INTEGER NOT NULL,
    CONSTRAINT "Curso_alunoCursoId_fkey" FOREIGN KEY ("alunoCursoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Disciplinas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    CONSTRAINT "Disciplinas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Classe_alunoClasseId_key" ON "Classe"("alunoClasseId");

-- CreateIndex
CREATE UNIQUE INDEX "Curso_alunoCursoId_key" ON "Curso"("alunoCursoId");
