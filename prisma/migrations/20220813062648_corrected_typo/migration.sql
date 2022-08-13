/*
  Warnings:

  - You are about to drop the column `postition_lat` on the `records` table. All the data in the column will be lost.
  - Added the required column `position_lat` to the `records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "records" DROP COLUMN "postition_lat",
ADD COLUMN     "position_lat" DOUBLE PRECISION NOT NULL;
