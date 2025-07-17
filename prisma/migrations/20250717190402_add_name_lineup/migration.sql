/*
  Warnings:

  - Added the required column `name` to the `Lineup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lineup" ADD COLUMN     "name" TEXT NOT NULL;
