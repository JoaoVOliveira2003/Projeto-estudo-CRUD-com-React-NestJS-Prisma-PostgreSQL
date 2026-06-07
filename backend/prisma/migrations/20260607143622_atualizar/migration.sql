/*
  Warnings:

  - A unique constraint covering the columns `[pessoaId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pessoaId` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "pessoaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_pessoaId_key" ON "Endereco"("pessoaId");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
