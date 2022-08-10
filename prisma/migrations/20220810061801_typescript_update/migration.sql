-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "authorGoogleId" TEXT NOT NULL,
    "ridedate" TIMESTAMP(3) NOT NULL,
    "ridedata" JSONB NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);
