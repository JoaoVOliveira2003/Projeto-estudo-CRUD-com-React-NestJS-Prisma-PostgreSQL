/*
  Warnings:

  - Added the required column `idade` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "idade" INTEGER NOT NULL;
