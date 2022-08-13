/*
  Warnings:

  - You are about to drop the `Ride` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ride";

-- CreateTable
CREATE TABLE "rides" (
    "id" SERIAL NOT NULL,
    "authorGoogleId" TEXT NOT NULL,
    "ridedate" TIMESTAMP(3) NOT NULL,
    "event" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "rides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL NOT NULL,
    "rideId" INTEGER NOT NULL,
    "power" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "cadence" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "heart_rate" INTEGER NOT NULL,
    "elapsed_time" DOUBLE PRECISION NOT NULL,
    "postition_lat" DOUBLE PRECISION NOT NULL,
    "position_long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_rideId_fkey" FOREIGN KEY ("rideId") REFERENCES "rides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
