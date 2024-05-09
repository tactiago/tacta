import prisma from "@/lib/prisma";

export async function getGamblers() {
  const gamblers = await prisma.bet.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return gamblers.map((gambler) => gambler)
}