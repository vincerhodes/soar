import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { useAuthStore } from "../../../hooks/useAuthStore";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });
  // const userId = useAuthStore(state => state.userId)
  try {
    const rides = await prisma.ride.findMany();
    res.status(200);
    res.json({ rides });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "unable to fetch rides" });
  }
}
