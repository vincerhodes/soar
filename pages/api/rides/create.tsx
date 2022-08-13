import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    // update ride
    const { ride: rideData } = req.body;
    const ride = await prisma.ride.create({
      data: {
        authorGoogleId: rideData.authorGoogleId,
        ridedate: rideData.activity.timestamp,
        event: rideData.activity.event,
        type: rideData.activity.type,
      },
    });

    // update ride records
    const recordData = rideData.records.map((record: Object) => {
      return {
        rideId: ride.id,
        ...record,
      };
    });
    const records = await prisma.record.createMany({
      data: recordData,
    });

    res.status(201);
    res.json({ ride, records });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "unable to log ride" });
  } finally {
    // could call disconnect here but the docs recommend not to from next.js
    // await prisma.$disconnect();
  }
}
