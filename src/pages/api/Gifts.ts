import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { total, message, from } = await req.body;

  const result = await prisma.gift.create({
    data: {
      author: from,
      amount: total,
      content: message
    }
  });

  res.status(200).json(result)
}