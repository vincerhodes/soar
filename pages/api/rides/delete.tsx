import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    await prisma.record.deleteMany({
      where: {
        rideId: req.body.ride.id,
      },
    });
    await prisma.ride.delete({
      where: {
        id: req.body.ride.id,
      },
    });
    res.status(200);
    res.json(req.body);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "unable to delete ride" });
  }
}
