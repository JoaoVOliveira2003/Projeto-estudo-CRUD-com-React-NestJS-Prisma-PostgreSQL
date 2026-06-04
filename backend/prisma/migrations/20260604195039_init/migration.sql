/*
  Warnings:

  - You are about to drop the column `idade` on the `Pessoa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "idade";

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "nomeRua" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);
