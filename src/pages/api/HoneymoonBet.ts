import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gambler, selectedCountriesIds } = await req.body;

  const result = await prisma.bet.create({
    data: {
      author: gambler,
      country: selectedCountriesIds,
    }
  });

  res.status(200).json(result)
}