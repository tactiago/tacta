import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, result: NextApiResponse) {
  try {
    const gamblers = await prisma.bet.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    result.status(200).send(gamblers);
  } catch (error) {
    result.status(500).json({ error: "Falha ao buscar apostadores" });
  }
}