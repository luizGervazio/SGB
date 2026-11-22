-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT,
    "disponivel" BOOLEAN NOT NULL,
    "paginas" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "editora" TEXT NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprestismo" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "dataEmprestimo" TIMESTAMP(3) NOT NULL,
    "dataDevolucao" TIMESTAMP(3) NOT NULL,
    "atraso" BOOLEAN NOT NULL,
    "statusEmprestismo" BOOLEAN NOT NULL,

    CONSTRAINT "Emprestismo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LivroAutores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LivroAutores_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "_LivroAutores_B_index" ON "_LivroAutores"("B");

-- AddForeignKey
ALTER TABLE "Emprestismo" ADD CONSTRAINT "Emprestismo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprestismo" ADD CONSTRAINT "Emprestismo_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LivroAutores" ADD CONSTRAINT "_LivroAutores_A_fkey" FOREIGN KEY ("A") REFERENCES "Autor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LivroAutores" ADD CONSTRAINT "_LivroAutores_B_fkey" FOREIGN KEY ("B") REFERENCES "Livro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
