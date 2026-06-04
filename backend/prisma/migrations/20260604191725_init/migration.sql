-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cachorro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "pessoaId" INTEGER NOT NULL,

    CONSTRAINT "Cachorro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cachorro" ADD CONSTRAINT "Cachorro_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
