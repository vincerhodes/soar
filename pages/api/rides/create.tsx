import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] })

  try {
    const { ride: rideData } = req.body;
    const ride = await prisma.ride.create({
      data: {
        authorGoogleId: rideData.authorGoogleId,
        ridedate: rideData.ridedate,
        ridedata: rideData.ridedata
      }
      });
    res.status(201);
    res.json({ ride });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "unable to log ride" });
  } finally {
    // could call disconnect here but the docs recomment not to from next.js
    // await prisma.$disconnect();
  }

}