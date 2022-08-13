/*
  Warnings:

  - You are about to drop the column `ridedata` on the `Ride` table. All the data in the column will be lost.
  - Added the required column `event` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "ridedata",
ADD COLUMN     "event" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
